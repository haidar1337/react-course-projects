import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

const INITIAL_USERINPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
  err: false,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USERINPUT);

  function handleChange(event, field) {
    setUserInput((previousState) => {
      return {
        ...previousState,
        [field]: +event.target.value,
        err: +event.target.value <= 0 ? true : false,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {userInput.err ? (
        <p className="center">Invalid Input</p>
      ) : (
        <Results userInput={userInput} />
      )}
    </>
  );
}

export default App;
