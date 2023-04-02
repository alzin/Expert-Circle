import React from "react";

import "./QuestionInput.css";

import { SiTurbosquid } from "react-icons/si";

const QuestionInput = (props) => {
  return (
    <div className="input-container">
      <input type="text" placeholder="Ask me anything..." />
      <button type="submit">
        <SiTurbosquid size={24} />
      </button>
    </div>
  );
};

export default QuestionInput;
