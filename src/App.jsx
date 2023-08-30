import "./App.css";
import { useState, useEffect } from "react";
import patternDivider from "./assets/pattern-divider-mobile.svg";
import iconDice from "./assets/icon-dice.svg";

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

function AppContainer() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdviceData();
  }, []);

  const fetchAdviceData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  return (
    <div className="container">
      <h1>Advice #117</h1>
      <span className="p-wrapper">
        <p>{advice ?? "A piece of advice is loading..."}</p>
      </span>
      <span className="divider-wrapper">
        <img src={patternDivider} alt="Pattern Divider" className="divider" />
      </span>
      <span className="btn-wrapper">
        <button className="dice-btn" onClick={fetchAdviceData}>
          <img src={iconDice} alt="Dice icon" />
        </button>
      </span>
    </div>
  );
}

export default App;
