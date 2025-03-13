import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 20000,
    duration: 10,
  });

  function handleChange(event, field) {
    setUserInput((previousState) => {
      const updated = { ...previousState, [field]: event.target.value };
      return updated;
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>{" "}
          <input
            onChange={(e) => handleChange(e, "initialInvestment")}
            type="number"
            value={userInput.initialInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Annual Investment</label>{" "}
          <input
            onChange={(e) => handleChange(e, "annualInvestment")}
            type="number"
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>{" "}
          <input
            onChange={(e) => handleChange(e, "expectedReturn")}
            type="number"
            value={userInput.expectedReturn}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Duration</label>{" "}
          <input
            onChange={(e) => handleChange(e, "duration")}
            type="number"
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
