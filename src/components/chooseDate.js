import React from "react";
import StepNavigation from "./generic/stepNavigation";

const ChooseDate = ({
  onSelectStepBtn,
  selectedStep,
  onBack,
  onContinue,
  stepItems,
}) => {
  return (
    <>
      {
        <StepNavigation
          currentStep={selectedStep}
          onSelectStepBtn={onSelectStepBtn}
          steps={stepItems}
        />
      }
      <h1>ChooseDate</h1>
      <div className="fixed bottom-0 left-0 right-0 bg-[#c07] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="flex justify-between items-center">
              <button onClick={onBack} className="btn-secondary mx-4 w-full">
                Back
              </button>
              <button onClick={onContinue} className="btn-primary mx-4 w-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseDate;
