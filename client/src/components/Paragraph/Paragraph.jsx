import React from "react";
import "./Paragraph.css";

function Paragraph(props) {
  // Split the text into paragraphs based on two or more consecutive newlines
  const paragraphs = props.text.split(/\n{2,}/);

  // Format and render each paragraph in separate <p> tags
  const formattedParagraphs = paragraphs.map((paragraph, index) => (
    <p className="article-body" key={index}>
      {paragraph.trim()}
    </p>
  ));

  return <div>{formattedParagraphs}</div>;
}

export default Paragraph;
