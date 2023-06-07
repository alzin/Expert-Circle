const { Configuration, OpenAIApi } = require("openai");

class OpenAIService {
  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
    this.messages = [
      {
        role: "system",
        content:
          "You are a professional writer who writes articles following the structure of Title: Body: Ref:",
      },
    ];
  }

  async createChatCompletion(params) {
    this.messages.push({ role: "user", content: params });
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: this.messages,
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("createChatCompletion: " + error.message);
      throw error;
    }
  }

  async createImage(params) {
    try {
      const response = await this.openai.createImage(params);
      return response.data.data[0].url;
    } catch (error) {
      console.error("createImage: " + error.message);
      throw error;
    }
  }
}

module.exports = OpenAIService;
