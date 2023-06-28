import React from "react";

import "./Article.css";
import Paragraph from "./Paragraph/Paragraph";
import ArticleTitle from "./ArticleTitle/ArticleTitle";
import ArticleImage from "./ArticleImage/ArticleImage";
import ArticleSection from "./ArticleSection/ArticleSection";

const Article = ({ title, image, body, sections, onEdit }) => {
  return (
    <div className="container">
      <div className="card">
        <ArticleTitle title={title} />
        <ArticleImage src={image} alt={title} />
        <Paragraph text={body} onEdit={onEdit} />
        {sections &&
          sections.map((section, index) => (
            <ArticleSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
      </div>
    </div>
  );
};

export default Article;
