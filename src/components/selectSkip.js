import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import skipPhoto from "../img/photo-skip.jpeg";
import StepNavigation from "./generic/stepNavigation";

function SelectSkip({
  selectedSkip,
  onSkipSelect,
  onBack,
  onContinue,
  address,
  onSelectStepBtn,
  hasHeavyWaste = false,
}) {
  const [skips, setSkips] = useState([]);
  const [permit, setPermit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [address]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://clicks.aweber.com/y/ct/?l=IBPEO1&m=99WSJGayKN5jSBlr&b=WFB7MbvY7r7soU6CpbOHmQ`
      );

      setSkips(response.data);
    } catch (err) {
      console.error("Error loading data:", err);
      setError("Failed to load available skips for your location");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (selected) => {
    onSkipSelect(selected, permit || undefined);
  };

  const filteredSkips = skips.filter((s) => !s.forbidden);

  return (
    <>
      {<StepNavigation currentStep={2} onSelectStepBtn={onSelectStepBtn} />}
      <Fragment>
        <div className="max-w-7xl mx-auto px-4 pb-32">
          <h2 className="text-2xl text-[#333] text-center mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-[#c07] text-center mb-8">
            Select the skip size that best suits your needs
          </p>

          {error && (
            <div className="max-w-xl mx-auto mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                {/* <Z className="w-5 h-5 text-red-500 mt-1 shrink-0" /> */}
                <div>
                  <p className="text-red-500">{error}</p>
                  <button
                    onClick={fetchData}
                    className="mt-2 text-sm text-[#0037C1] hover:underline"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-4 border-[#0037C1] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredSkips.length === 0 ? (
            <div className="max-w-xl mx-auto mb-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              {/* ... No skips available message ... */}
            </div>
          ) : (
            // Render list of skip options
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkips.map((skip) => {
                const isSelected = selectedSkip?.id === skip.id;
                const price =
                  (skip.price_before_vat * skip.vat) / 100 +
                  skip.price_before_vat;
                return (
                  <div
                    key={skip.id}
                    className={`p-4 border rounded cursor-pointer transition-all ${
                      isSelected ? "border-2 border-[#c07]" : "border-grey-200"
                    }`}
                    onClick={() => handleSelect(skip)}
                  >
                    <div className="relative">
                      <div className="absolute top-3 right-2 z-20 bg-[#c07] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {skip.size + " Yards"}
                      </div>
                      <img
                        src={skipPhoto}
                        alt={`${skip.size} YARD SKIP`}
                        className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                      />
                      {!skip.allowed_on_road && (
                        <div className="absolute bottom-3 left-2 z-20 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-medium text-white">
                            Private Property Only
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium">{skip.name}</h3>
                    <p className="text-2xl text-left text-[#333]">
                      {skip.size + " YARD SKIP"}
                    </p>
                    <p
                      style={{ color: "#c07" }}
                      className="text-sm text-left font-bold mb-4 md:mb-6"
                    >
                      {skip.hire_period_days + " day hire period"}
                    </p>
                    <div className="text-left">
                      <span className="text-3xl md:text-2xl text-[#333]">
                        £{parseFloat(price.toFixed(2))}
                      </span>
                      <span
                        className="text-sm ml-2 font-bold text-[#c03]"
                        style={{ color: "#c03" }}
                      >
                        per week
                      </span>
                    </div>
                    <button
                      onClick={() => handleSelect(skip)}
                      className="w-full py-2.5 md:py-3 mt-8 px-4 rounded-md transition-all flex items-center justify-center space-x-2
            bg-[#c07] btn-skip text-white hover:bg-[#c01] hover:border-[#0037C1]
            false"
                    >
                      <span>
                        {isSelected ? "Selected" : "Select This Skip"}
                      </span>

                      {!isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-arrow-right w-4 h-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Fragment>
      <div className="fixed bottom-0 left-0 right-0 bg-[#c07] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={onBack} className="btn-secondary w-full">
                Back
              </button>
              <button onClick={onContinue} className="btn-primary w-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectSkip;
