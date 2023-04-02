import React from "react";
import "./Article.css";

const Article = ({ title, image, body, references }) => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="article-title">{title}</h1>
        <img src={image} alt={title} className="article-image" />
        <p className="article-body">{body}</p>
        {references && (
          <div className="article-references">
            <h2>References:</h2>
            <ul>
              {references.map((ref, index) => (
                <li key={index}>
                  <a href={ref.url}>{ref.title}</a>
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
