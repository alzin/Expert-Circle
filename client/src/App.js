import { useState } from "react";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Article from "./components/Article/Article";

import Loader from "./components/Loader/Loader";

const App = () => {
  const [articleData, setArticleData] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (question) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });
      const responseText = await response.json();

      setIsLoading(false);
      setArticleData(responseText.data);
      setImageUrl(responseText.url);
      setVideos(responseText.videos);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getJsonArray = (str) => {
    try {
      return JSON.parse(str);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  if (articleData) {
    return (
      <div>
        <Article
          title={articleData.split("Title:")[1].split("\n")[0]}
          image={imageUrl}
          body={articleData.split("Body:")[1].split("Ref:")[0]}
          videos={videos}
          references={getJsonArray(articleData.split("Ref:")[1])}
        />
      </div>
    );
  } else {
    return (
      <div>
        {isLoading ? <Loader /> : <div></div>}
        <QuestionInput onSubmit={handleSubmit} />
      </div>
    );
  }
};

export default App;
