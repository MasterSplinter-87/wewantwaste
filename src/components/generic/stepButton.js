// components/generic/StepButton.jsx
import React from "react";
import StepIcon from "./stepIcon";

function StepButton({ icon, label, active, completed, disabled }) {
  const baseStyle =
    "step-button flex items-center justify-center whitespace-nowrap text-sm font-medium px-3 py-1 transition-colors text-center rounded-md duration-200 min-w-[100px] min-h-[80px] arrow-right";
  const activeStyle = "bg-[#fff] text-[#c07] shadow-md border border-pink-200";
  const completedStyle = "bg-[#c07] text-white";
  const disabledStyle = "text-white bg-[#2A2A2A] cursor-not-allowed";

  return (
    <button
      disabled={disabled}
      className={`${baseStyle} ${
        active ? activeStyle : completed ? completedStyle : disabledStyle
      }`}
    >
      <StepIcon icon={icon} />
      <span className="ml-2">{label}</span>
    </button>
  );
}

export default StepButton;
