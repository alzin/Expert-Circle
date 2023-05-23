require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const { google } = require("googleapis");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.set("json spaces", 40);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create a YouTube API client
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

async function generateImage(prompt) {
  let imageUrl =
    "https://content.api.news/v3/images/bin/19baaccb3d706775bb9c3bbe2f946bb3";
  try {
    const imageResponse = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    imageUrl = imageResponse.data.data[0].url;
  } catch (error) {
    console.log("generateImage: " + error.message);
  }

  return imageUrl;
}

let messages = [
  { role: "system", content: "You are a helpful assistant who right articles following the structure of Title: Body: Ref:" },
  {
    role: "user",
    content: `Write a very detailed Article Using the following structure \n Title: \n Body: \n Ref: and make sure to write after Ref: in the form of JSON array object of title and URL as of the form"
  [
    {"url_title":"","url":"" },
    {"url_title":"", "url": ""}
  "and give as much ref as possible`,
  },
];

let articleText = "";

async function getCustomArticle(prompt) {
  messages.push({ role: "system", content: prompt });
  try {
    const modelResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    articleText = modelResponse.data.choices[0].message.content;
    console.log(articleText);
  } catch (error) {
    console.error("getCustomArticle: " + error.message);
  }
  return articleText;
}

async function getYoutubeRecommendations(query) {
  try {
    const response = await youtube.search.list({
      part: "id,snippet",
      q: query,
    });
    return response.data.items;
  } catch (error) {
    console.error("getYoutubeRecommendations: " + error.message);
  }
}

app.get("/", (req, res) => {
  res.send({ express: "Hello from Express" });
});

const getJsonArray = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Error parsing JSON: ", error);
    return null;
  }
};

app.post("/ask", async (req, res) => {
  const receivedPrompt = req.body.prompt;

  const videos = await getYoutubeRecommendations(receivedPrompt);
  const imageUrl = await generateImage(receivedPrompt);
  const generatedText = await getCustomArticle(receivedPrompt);

  if (generatedText) {
    let title = "Default title";
    const titleIndex = generatedText.indexOf("Title:");
    if (titleIndex != -1) {
      title = generatedText.split("Title:")[1].split("\n")[0];
    }

    let body = "Default body";
    const bodyIndex = generatedText.indexOf("Body:");
    if (bodyIndex != -1) {
      body = generatedText.split("Body:")[1].split("Ref:")[0];
    }

    let ref = "Default ref";
    const refIndex = generatedText.indexOf("Ref:");
    if (refIndex != -1) {
      ref = getJsonArray(generatedText.split("Ref:")[1]);
    }

    res.json({
      title: title,
      url: imageUrl,
      body: body,
      videos: videos,
      ref: ref,
    });
  } else {
    res
      .status(500)
      .send({ error: "An error occurred while handling the ask request" });
  }
});

let editMessages = [
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "Write about the following." },
];

async function editArticle(prompt) {
  let editRequest = {
    role: "system",
    content: `${prompt}`,
  };
  editMessages.push(editRequest);

  let text = "";
  try {
    const modelResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: editMessages,
    });

    text = modelResponse.data.choices[0].message.content;
  } catch (error) {
    console.error("editArticle: " + error.message);
  }

  editMessages.pop();
  return text;
}

app.post("/edit", async (req, res) => {
  const editPrompt = req.body.prompt;
  const text = await editArticle(editPrompt);

  if (text) {
    res.json({ newText: text });
  } else {
    res
      .status(500)
      .send({ error: "An error occurred while handling the edit request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
