import { useState } from "react";
import "./App.css";
import { StepFourForm } from "./Component/Form/StepFourForm";
import { StepOneForm } from "./Component/Form/StepOneForm";
import { StepThreeForm } from "./Component/Form/StepThreeForm";
import { StepTwoForm } from "./Component/Form/StepTwoForm";
import { Stepper } from "./Component/Stepper";

function App() {
  const [stepCount, setStepCout] = useState(1);
  const getNextStep = () => {
    setStepCout((step) => step + 1);
  };
  const getFormContent = (step) => {
    switch (step) {
      case 1:
        return <StepOneForm />;
      case 2:
        return <StepTwoForm />;
      case 3:
        return <StepThreeForm />;
      case 4:
        return <StepFourForm />;
      default:
        return "no case found";
    }
  };
  return (
    <div className='app-container'>
      <div className='header'>
        <img src='/images/logo.png' />
        <span>Eden</span>
      </div>
      <div className='stepper-container'>
        <Stepper step={stepCount} />
      </div>
      {getFormContent(stepCount)}
      <button
        className='btn'
        onClick={() => {
          stepCount < 4 && getNextStep();
        }}
      >
        {stepCount < 4 ? "Create Workspace" : "Launch Eden"}
      </button>
    </div>
  );
}

export default App;
