import React from "react";
import { useArticleData } from "../../useArticleData";
import QuestionInput from "../QuestionInput/QuestionInput";
import Article from "../Article/Article";
import Loader from "../Loader/Loader";
import YouTubeCarousel from "../YouTubeCarousel/YouTubeCarousel.jsx";
import { extractVideoIds } from "../../articleUtils";

const App = () => {
  const {
    articleTitle,
    articleImageUrl,
    articleBody,
    articleYoutubeVideos,
    isLoading,
    handleSubmit,
    handleEdit,
  } = useArticleData();

  return (
    <div>
      {isLoading && <Loader />}
      {articleTitle ? (
        <>
          <Article
            title={articleTitle}
            image={articleImageUrl}
            body={articleBody}
            sections=""
            onEdit={handleEdit}
          />
          <YouTubeCarousel videoIds={extractVideoIds(articleYoutubeVideos)} />
        </>
      ) : (
        <QuestionInput onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
