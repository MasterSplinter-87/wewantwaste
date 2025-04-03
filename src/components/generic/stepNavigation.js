// components/StepNavigation.jsx
import React from "react";
import StepButton from "./stepButton";
import StepDivider from "./stepDivider";

const steps = [
  { label: "Postcode", icon: "map-pin" },
  { label: "Waste Type", icon: "trash2" },
  { label: "Select Skip", icon: "truck" },
  { label: "Permit Check", icon: "shield" },
  { label: "Choose Date", icon: "calendar" },
  { label: "Payment", icon: "credit-card" },
];

function StepNavigation({ currentStep, onSelectStepBtn }) {
  return (
    <div className="step-nav flex justify-center mt-3 mb-8 overflow-x-auto whitespace-nowrap px-2 py-4">
      <div className="flex items-center space-x-3 min-w-[600px]">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isDisabled = index > currentStep;

          return (
            <React.Fragment key={step.label}>
              <StepButton
                icon={step.icon}
                label={step.label}
                active={isActive}
                completed={isCompleted}
                disabled={isDisabled}
                onSelectStepBtn={onSelectStepBtn}
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
