import { useState } from "react";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Article from "./components/Article/Article";

const App = () => {
  const [articleData, setArticleData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (question) => {
    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });
      const responseText = await response.json();

      setArticleData(responseText.data);
      setImageUrl(responseText.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getJsonArray = (str) => {
    return JSON.parse(str);
  };

  if (articleData) {
    return (
      <div>
        <Article
          title={articleData.split("Title: ")[1].split("\n")[0]}
          image={imageUrl}
          body={articleData.split("Body: ")[1].split("Ref: ")[0]}
          references={getJsonArray(articleData.split("Ref: ")[1])}
        />
      </div>
    );
  } else {
    return <QuestionInput onSubmit={handleSubmit} />;
  }
};

export default App;
