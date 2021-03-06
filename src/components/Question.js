import React from "react";

function Question({ question, choices, handleSubmit }) {  
  return (
    <>
      <p className = "header" data-testid="question">{question}</p>
      {choices.map(choice => (
        <button className = "choices" key = {choice} onClick = {() => handleSubmit(choice)}>
          {choice}
        </button>
      ))}
    </>
  );
};

export default Question;