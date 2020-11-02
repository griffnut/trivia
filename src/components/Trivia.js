import {React, useState} from "react";
import Question from './Question';


function Trivia({ questions, setScore, setGame, score, shuffle }) {
  // question, isCorrect, next
  const [display, setDisplay] = useState("question");
  const [idx, setIdx] = useState(questions.length-1);
  const [choices, setChoices] = useState([]);
  const [correct, setCorrect] = useState("");
  
  const handleSubmit = answer => {
    if (questions[idx].correct === answer) {
      setCorrect("correct");
      setScore(score + 1);
    } else {
      setCorrect("incorrect");
    }

    setDisplay("isCorrect");

    if (idx - 1 !== -1) {
      const c = questions[idx-1].incorrect.slice();
      c.push(questions[idx-1].correct);
      setChoices(shuffle(c));
    }    
  };

  const handleNext = () => {
    setIdx(idx - 1);
    setDisplay("question");
  };

  // randomize choices
  if (!choices.length) {
    const c = questions[idx].incorrect.slice();
    c.push(questions[idx].correct);
    setChoices(shuffle(c));
  }; 

  // trivia
  if (display === "question") {
    return (
      <>
        {questions[idx]
          ? <Question 
            question = { questions[idx].question }
            handleSubmit = { handleSubmit }
            choices = { choices }
            />
          : <><p className = "header">Your final score is {score}.</p>
            <button onClick = {() => setGame(false)}>Play Again</button></>
        }
      </>
    );
  } else if (display === "isCorrect") {
    return (
      <div>
        <p className = "header">{questions[idx].question}</p>
        <p>You got the answer {correct}. The answer is {questions[idx].correct}.</p>
        <p>Your current score is {score}.</p>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    );
  }
};

export default Trivia;