import React from "react";
import Paragraph from "../Paragraph/Paragraph";

const ArticleSection = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Paragraph text={content} />
    </div>
  );
};

export default ArticleSection;
