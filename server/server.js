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
  const imageResponse = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "256x256",
  });
  const imageUrl = imageResponse.data.data[0].url;

  return imageUrl;
}

async function getCustomArticle(prompt) {
  const articlePrompt =
    "Write a very detailed Article about " +
    prompt +
    " Using the following structure \n Title: \n Body: \n Ref:" +
    "and make sure to write after Ref: in the form of JSON array object of title and URL as of the form" +
    `[
      {"title":"","url":"" },
      {"title":"", "url": ""}` +
    "and give as much ref as possible";

  let text = "";

  try {
    const modelResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: articlePrompt,
      temperature: 0.7,
      max_tokens: 4000,
    });
    text = modelResponse.data.choices[0].text;
  } catch (error) {
    console.error(error.message);
  }

  return text;
}

async function getYoutubeRecommendations(query) {
  try {
    const response = await youtube.search.list({
      part: "id,snippet",
      q: query,
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}

app.get("/", (req, res) => {
  res.send({ express: "Hello from Express" });
});

app.post("/ask", async (req, res) => {
  const receivedPrompt = req.body.prompt;

  const videos = await getYoutubeRecommendations(receivedPrompt);
  const imageUrl = await generateImage(receivedPrompt);
  const generatedText = await getCustomArticle(receivedPrompt);

  if (generatedText) {
    res.json({ data: generatedText, url: imageUrl, videos: videos });
  } else {
    res
      .status(500)
      .send({ error: "An error occurred while handling the request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
