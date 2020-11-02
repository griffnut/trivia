import "../styles/App.css";
import trivia from "../data/triviaQ";
import {React, useState} from "react";
import Trivia from './Trivia';

function App() {
  const [gameStart, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    return arr;
  };

  const gameBegin = () => {    
    // shuffle questions
    const q = shuffle(trivia.slice());
    setQuestions(shuffle(q).slice(0, 10));

    // begin trivia
    setScore(0)
    setGame(true);
  };

  return (
    <div className="App">
      {
        gameStart
        ? <Trivia 
          score = { score }
          setScore = { setScore } 
          setGame = { setGame }
          questions = { questions } 
          shuffle = { shuffle } 
          />
        : <header className="header">
              Press Begin to start the trivia game!
            <button onClick={() => gameBegin(questions)}>Begin</button>
          </header>
      }
    </div>
  );
};

export default App;