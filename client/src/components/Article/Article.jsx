import React from "react";
import YouTube from "react-youtube";

import "./Article.css";
import Paragraph from "../Paragraph/Paragraph";

const Article = ({ title, image, body, videos, references }) => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="article-title">{title}</h1>
        <img src={image} alt={title} className="article-image" />
        <Paragraph text={body} />
        {Array.isArray(videos) &&
          videos.map((video, index) => (
            <div key={index}>
              <h2>{video.snippet.title} </h2>
              <div style={{ textAlign: "center" }}>
                <YouTube videoId={video.id.videoId} />
              </div>
            </div>
          ))}
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
