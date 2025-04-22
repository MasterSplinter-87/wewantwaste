import React, { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import SelectSkip from "./components/selectSkip";
import Postcode from "./components/postcode";
import WasteType from "./components/wasteType";
import PermitCheck from "./components/permitCheck";
import ChooseDate from "./components/chooseDate";
import Payment from "./components/payment";
import "./App.css";

const steps = [
  { label: "Postcode", icon: "map-pin", slug: "postcode", index: 0 },
  { label: "Waste Type", icon: "trash2", slug: "waste-type", index: 1 },
  { label: "Select Skip", icon: "truck", slug: "select-skip", index: 2 },
  { label: "Permit Check", icon: "shield", slug: "permit-check", index: 3 },
  { label: "Choose Date", icon: "calendar", slug: "choose-date", index: 4 },
  { label: "Payment", icon: "credit-card", slug: "payment", index: 5 },
];

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Derive current step index from the URL
  const derivedStep = steps.findIndex((step) =>
    location.pathname.includes(step.slug)
  );

  const currentStep = derivedStep === -1 ? 0 : derivedStep;

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip); // or skip.id
  };

  const handleOnContinue = () => {
    if (currentStep < steps.length - 1) {
      const nextSlug = steps[currentStep + 1].slug;
      navigate(`/${nextSlug}`);
    }
  };

  const handleOnBack = () => {
    if (currentStep > 0) {
      const prevSlug = steps[currentStep - 1].slug;
      navigate(`/${prevSlug}`);
    }
  };

  const handleSelectStepBtn = (step) => {
    navigate(`/${step?.slug}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/postcode" replace />} />
        <Route
          path="/select-skip"
          element={
            <SelectSkip
              address={"LE10 1SH"}
              onSkipSelect={handleSkipSelect}
              selectedSkip={selectedSkip}
              onContinue={handleOnContinue}
              onBack={handleOnBack}
              onSelectStepBtn={handleSelectStepBtn}
              selectedStep={currentStep}
              stepItems={steps}
            />
          }
        />

        <Route
          path="/postcode"
          element={
            <Postcode
              selectedStep={currentStep}
              onSelectStepBtn={handleSelectStepBtn}
              onContinue={handleOnContinue}
              onBack={handleOnBack}
              stepItems={steps}
            />
          }
        />
        <Route
          path="/waste-type"
          element={
            <WasteType
              selectedStep={currentStep}
              onSelectStepBtn={handleSelectStepBtn}
              onBack={handleOnBack}
              onContinue={handleOnContinue}
              stepItems={steps}
            />
          }
        />
        <Route
          path="/permit-check"
          element={
            <PermitCheck
              selectedStep={currentStep}
              onSelectStepBtn={handleSelectStepBtn}
              onContinue={handleOnContinue}
              onBack={handleOnBack}
              stepItems={steps}
            />
          }
        />
        <Route
          path="/choose-date"
          element={
            <ChooseDate
              selectedStep={currentStep}
              onSelectStepBtn={handleSelectStepBtn}
              onContinue={handleOnContinue}
              onBack={handleOnBack}
              stepItems={steps}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              selectedStep={currentStep}
              onSelectStepBtn={handleSelectStepBtn}
              onContinue={handleOnContinue}
              onBack={handleOnBack}
              stepItems={steps}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
