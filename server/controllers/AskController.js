class AskController {
  constructor(
    generateImageUseCase,
    generateCustomArticleUseCase,
    getYouTubeRecommendationsUseCase
  ) {
    this.generateImageUseCase = generateImageUseCase;
    this.generateCustomArticleUseCase = generateCustomArticleUseCase;
    this.getYouTubeRecommendationsUseCase = getYouTubeRecommendationsUseCase;
  }

  async ask(req, res) {
    const receivedPrompt = req.body.prompt;

    const videos = await this.getYouTubeRecommendationsUseCase.execute(
      receivedPrompt
    );
    const imageUrl = await this.generateImageUseCase.execute(receivedPrompt);
    const generatedText = await this.generateCustomArticleUseCase.execute(
      receivedPrompt
    );

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

      res.json({
        title: title,
        url: imageUrl,
        body: body,
        videos: videos,
      });
    } else {
      res
        .status(500)
        .send({ error: "An error occurred while handling the ask request" });
    }
  }
}

module.exports = AskController;
