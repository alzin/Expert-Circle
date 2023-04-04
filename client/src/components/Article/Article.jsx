import React from "react";
import "./Article.css";
import Paragraph from "../Paragraph/Paragraph";

const Article = ({ title, image, body, references }) => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="article-title">{title}</h1>
        <img src={image} alt={title} className="article-image" />
        <Paragraph text={body} />
        {references && (
          <div className="article-references">
            <h2>References:</h2>
            <ul>
              {references.map((ref, index) => (
                <li key={index}>
                  <a href={ref.url} target="_blank" rel="noreferrer">
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
