import React from "react";

export const Question = (props) => {
    return (
    <div className="question-holder">
        <h1 className="question-number">
          {" "}
          Question number<span className="num-of-questions">/total</span>
          </h1>
          <p className="question-description">Question description</p>
    </div>
  );
};
