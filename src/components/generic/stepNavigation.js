// components/StepNavigation.jsx
import React from "react";
import StepButton from "./stepButton";
import StepDivider from "./stepDivider";

function StepNavigation({ currentStep, onSelectStepBtn, steps }) {
  return (
    <div className="step-nav flex justify-center mt-3 mb-8 overflow-x-auto whitespace-nowrap px-2 py-4">
      <div className="flex items-center space-x-3 min-w-[600px]">
        {steps &&
          steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isDisabled = index > currentStep;

            return (
              <React.Fragment key={step.label}>
                <StepButton
                  icon={step.icon}
                  label={step.label}
                  active={isActive}
                  completed={isCompleted}
                  disabled={isDisabled}
                  onSelectStepBtn={(e) => onSelectStepBtn(step)}
                />
                {index < steps.length - 1 && (
                  <StepDivider active={index < currentStep} />
                )}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default StepNavigation;
