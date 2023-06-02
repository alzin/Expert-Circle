import React from "react";

import "./Paragraph.css";

function Paragraph(props) {
  const lastDotIndex = props.text.lastIndexOf("。");
  const truncatedText = props.text.substring(0, lastDotIndex);
  const sentences = truncatedText.split("。");
  const paragraphs = sentences.map((sentence) => (
    <p className="article-body" key={sentence}>
      {sentence}。
      <br />
    </p>
  ));

  return <div>{paragraphs}</div>;
}

export default Paragraph;
