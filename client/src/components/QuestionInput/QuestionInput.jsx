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

  return (
    <div className="input-container">
      <input
        type="text"
        value={questionValue}
        placeholder="Type an article name for any topic..."
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        <SiTurbosquid size={24} />
      </button>
    </div>
  );
};

export default QuestionInput;
