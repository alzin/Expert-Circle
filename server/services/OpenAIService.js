// OpenAIService.js
const { Configuration, OpenAIApi } = require("openai");

class OpenAIService {
  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  async createChatCompletion(params) {
    try {
      const response = await this.openai.createChatCompletion(params);
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
