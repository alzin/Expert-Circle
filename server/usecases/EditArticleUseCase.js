class EditArticleUseCase {
  constructor(openAIService) {
    this.openAIService = openAIService;
    this.editMessages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Write about the following." },
    ];
  }

  async execute(prompt) {
    const editRequest = {
      role: "system",
      content: `${prompt}`,
    };
    this.editMessages.push(editRequest);
    let text = "";

    try {
      text = await this.openAIService.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: this.editMessages,
      });
    } catch (error) {
      console.error("editArticle: " + error.message);
    }

    return text;
  }
}

module.exports = EditArticleUseCase;
