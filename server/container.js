const {
  createContainer,
  asClass,
  asValue,
  Lifetime,
  InjectionMode,
} = require("awilix");
const OpenAIService = require("./services/OpenAIService");
const YouTubeService = require("./services/YouTubeService");
const GenerateImageUseCase = require("./usecases/GenerateImageUseCase");
const GenerateCustomArticleUseCase = require("./usecases/GenerateCustomArticleUseCase");
const GetYouTubeRecommendationsUseCase = require("./usecases/GetYouTubeRecommendationsUseCase");
const EditArticleUseCase = require("./usecases/EditArticleUseCase");
const AskController = require("./controllers/AskController");
const EditController = require("./controllers/EditController");

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container
  .register({
    openAIService: asClass(OpenAIService).scoped(),
    youTubeService: asClass(YouTubeService).scoped(),
    generateImageUseCase: asClass(GenerateImageUseCase).scoped(),
    generateCustomArticleUseCase: asClass(
      GenerateCustomArticleUseCase
    ).scoped(),
    getYouTubeRecommendationsUseCase: asClass(
      GetYouTubeRecommendationsUseCase
    ).scoped(),
    editArticleUseCase: asClass(EditArticleUseCase).scoped(),
    askController: asClass(AskController).scoped(),
    editController: asClass(EditController).scoped(),
    prompt: asValue(
      "Write a very detailed Article Using the following structure \n Title: \n Body:"
    ),
  })
  .loadModules([], {
    formatName: "camelCase",
    cwd: __dirname,
    lifetime: Lifetime.SCOPED,
  });

module.exports = container;
