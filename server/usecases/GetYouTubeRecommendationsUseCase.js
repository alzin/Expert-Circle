class GetYouTubeRecommendationsUseCase {
  constructor(youTubeService) {
    this.youTubeService = youTubeService;
  }

  async execute(query) {
    try {
      const response = await this.youTubeService.searchList({
        part: "id,snippet",
        q: query,
      });
      console.log("In GetYouTubeRecommendationsUseCase");
      console.log(response);
      return response;
    } catch (error) {
      console.error("getYoutubeRecommendations: " + error.message);
    }
  }
}

module.exports = GetYouTubeRecommendationsUseCase;
