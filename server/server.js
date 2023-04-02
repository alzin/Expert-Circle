require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

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

const apiKey = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

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
    "Write an article about " +
    prompt +
    " by obey the following strcuture \n Title: \n Body: \n Ref:";

  const text = "";

  try {
    console.log(articlePrompt);
    const modelResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: articlePrompt,
      temperature: 0.7,
      max_tokens: 1000,
    });
    text = modelResponse.data.choices[0].text;
    console.log(text);
  } catch (error) {
    console.error(error.message);
  }

  return text;
}

app.get("/", (req, res) => {
  res.send({ express: "Hello from Express" });
});

app.post("/ask", async (req, res) => {
  const receivedPrompt = req.body.prompt;
  const imageUrl = await generateImage(receivedPrompt);
  const generatedText = await getCustomArticle(receivedPrompt);

  if (generatedText) {
    res.json({ data: generatedText, url: imageUrl });
  } else {
    res
      .status(500)
      .send({ error: "An error occurred while handling the request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
