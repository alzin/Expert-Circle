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
            <div>
              <h1 key={index}>{video.snippet.title} </h1>
              <YouTube videoId={video.id.videoId} key={video.id.videoId} />
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
