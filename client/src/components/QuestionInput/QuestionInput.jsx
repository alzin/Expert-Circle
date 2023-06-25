import React, { useState } from "react";

import "./QuestionInput.css";

import { SiTurbosquid } from "react-icons/si";

const QuestionInput = (props) => {
  const [questionValue, setQuestionValue] = useState("");

  const handleChange = (event) => {
    setQuestionValue(event.target.value);
  };

  const handleClick = () => {
    props.onSubmit(questionValue);
    setQuestionValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={questionValue}
        placeholder="Enter an article name for any topic..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleClick}>
        <SiTurbosquid size={24} />
      </button>
    </div>
  );
};

export default QuestionInput;
