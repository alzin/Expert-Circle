import { useState } from "react";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Article from "./components/Article/Article";

import Loader from "./components/Loader/Loader";

const App = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleImageUrl, setArticleImageUrl] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleSections, setArticleSections] = useState([]);
  const [articleYoutubeVideos, setArticleYouTubeVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (question) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });
      const responseText = await response.json();

      setArticleTitle(responseText.title);
      setArticleImageUrl(responseText.url);
      setArticleBody(responseText.body);
      setArticleYouTubeVideos(responseText.videos);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleEdit = async (edit) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: edit }),
      });
      const responseText = await response.json();

      const content = responseText.newText;
      const newSection = {
        title: edit,
        content: content,
      };

      setArticleSections([...articleSections, newSection]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (articleTitle) {
    return (
      <div>
        <Article
          title={articleTitle}
          image={articleImageUrl}
          body={articleBody}
          sections={articleSections}
          videos={articleYoutubeVideos}
        />
        {isLoading ? <Loader /> : <div></div>}
        <QuestionInput onSubmit={handleEdit} />
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
