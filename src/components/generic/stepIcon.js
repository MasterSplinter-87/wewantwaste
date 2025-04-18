// components/generic/StepIcon.jsx
import React from "react";

function StepIcon({ icon }) {
  const common = "w-4 h-4 shrink-0";

  const baseProps = {
    className: common,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (icon) {
    case "map-pin":
      return (
        <svg {...baseProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "trash2":
      return (
        <svg {...baseProps}>
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      );
    case "truck":
      return (
        <svg {...baseProps}>
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...baseProps}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...baseProps}>
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "credit-card":
      return (
        <svg {...baseProps}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    default:
      return null;
  }
}

export default StepIcon;
