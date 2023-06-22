import React from "react";

import "./ArticleImage.css";

const ArticleImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="article-image" />;
};

export default ArticleImage;
