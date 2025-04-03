import React, { useState } from "react";
import SelectSkip from "./components/selectSkip";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip); // or skip.id
  };

  const handleOnContinue = () => {
    //TODO: Handle On Continue logic in here
  };

  const handleOnBack = () => {
    //TODO: Handle On Back Logic in here
  };

  const handleSelectStepBtn = () => {
    //TODO: Handle Select Step Btn logic - redirect user to page
  };

  return (
    <div className="App">
      <SelectSkip
        address={"LE10 1SH"}
        onSkipSelect={handleSkipSelect}
        selectedSkip={selectedSkip}
        onContinue={handleOnContinue}
        onBack={handleOnBack}
        onSelectStepBtn={handleSelectStepBtn}
      />
    </div>
  );
}

export default App;
