import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Row from "./Compenent/row";

function App() {
  const actor = "Harley Quinn";
  const answer = "B A T M A N";
  const letterNumber = answer.split(" ");
  const onChangeHandler = (e) => {
    if (e.target.value.length > letterNumber.length) {
      return;
    }

    setUserInput(e.target.value);
  };

  const [userInput, setUserInput] = useState("");
  const [userAnswers, setUserAnswers] = useState(["", "", "", "", ""]);

  const sendAnswer = () => {
    if (userInput.length == letterNumber.length) {
      setUserAnswers((prev) => {
        const halilhan = [...prev];
        for (let index = 0; index < halilhan.length; ++index) {
          if (halilhan[index].length == 0) {
            halilhan[index] = userInput;

            break;
          }
        }
        return [...halilhan];
      });
      setUserInput("");
    }
  };
  const onKeyPress = (e) => {
    if (e.which === 13) sendAnswer();
  };

  const checkAnswer = (userAnswer, index) => {
    return userAnswer[index].toUpperCase() == letterNumber[index];
  };

  const decideBackgroundColor = (userAnswer, index) => {
    if (userAnswer.length == 0) {
      return "white";
    }
    if (checkAnswer(userAnswer, index)) {
      return "green";
    }

    if (letterNumber.includes(userAnswer[index].toUpperCase())) {
      return "yellow";
    }
    return "red";
  };

  return (
    <div style={{ background: "#1a1a1b" }} className="App">
      <div>
        <p style={{ color: "white" }}>{actor}</p>
      </div>
      {userAnswers.map((userAnswer) => (
        <div className="row">
          {letterNumber.map((item, index) => (
            <Row
              answer={userAnswer}
              index={index}
              borderColor={decideBackgroundColor(userAnswer, index)}
            />
          ))}
        </div>
      ))}

      <div>
        <br />

        <input
          onKeyPress={onKeyPress}
          value={userInput}
          onChange={onChangeHandler}
          name="movie"
        />
        <button onClick={sendAnswer}>Send</button>
      </div>
    </div>
  );
}

export default App;
