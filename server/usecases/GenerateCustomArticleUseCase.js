class GenerateCustomArticleUseCase {
  constructor(openAIService) {
    this.openAIService = openAIService;
    this.messages = [
      {
        role: "system",
        content:
          "You are a helpful assistant who writes articles following the structure of Title: Body: Ref:",
      },
    ];
  }

  async execute(prompt) {
    this.messages.push({ role: "user", content: prompt });

    let modelResponse = "Title: My Title: Body: My Body";
    try {
      modelResponse = await this.openAIService.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: this.messages,
      });

      console.log(modelResponse);
    } catch (error) {
      console.error("getCustomArticle: " + error.message);
    }

    return modelResponse;
  }
}

module.exports = GenerateCustomArticleUseCase;
