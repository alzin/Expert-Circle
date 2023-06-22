import { useState } from "react";
import { fetchAsk, fetchEdit } from "./api";

export const useArticleData = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleImageUrl, setArticleImageUrl] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleYoutubeVideos, setArticleYouTubeVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (question) => {
    try {
      setIsLoading(true);
      const responseText = await fetchAsk(question);
      setArticleTitle(responseText.title);
      setArticleImageUrl(responseText.url);
      setArticleBody(responseText.body);
      setArticleYouTubeVideos(responseText.videos);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (edit) => {
    try {
      setIsLoading(true);
      const responseText = await fetchEdit(edit);
      setArticleTitle(responseText.title);
      setArticleBody(responseText.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    articleTitle,
    articleImageUrl,
    articleBody,
    articleYoutubeVideos,
    isLoading,
    handleSubmit,
    handleEdit,
  };
};
