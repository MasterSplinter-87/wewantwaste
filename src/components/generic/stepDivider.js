// components/generic/StepDivider.jsx
import React from "react";

function StepDivider({ active }) {
  return (
    <div
      className={`w-12 h-1 rounded ${active ? "bg-[#0037C1]" : "bg-[#2A2A2A]"}`}
    />
  );
}

export default StepDivider;
