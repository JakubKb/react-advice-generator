import "./App.css";
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
  return (
    <div className="container">
      <h1>Advice #117</h1>
      <span className="p-wrapper">
        <p>
          "it is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
      </span>
      <span className="divider-wrapper">
        <img src={patternDivider} className="divider" />
      </span>
      <span className="btn-wrapper">
        <button className="dice-btn">
          <img src={iconDice} alt="Dice icon" />
        </button>
      </span>
    </div>
  );
}

export default App;
