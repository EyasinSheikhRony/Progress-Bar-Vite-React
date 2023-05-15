import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Step = () => {
  const [currentstep, setCurrentstep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Customer Info", "Shipping Info", "Payment Info", "Payment"];
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="flex flex-col">
        <div className="flex min-w-[320px]">
          {steps.map((step, index) => (
            <div
              className={`step_item ${currentstep === index + 1 && "active"} ${
                (index + 1 < currentstep || complete) && "complete"
              }`}
              key={index}>
              <div className="step">
                {index + 1 < currentstep || complete ? (
                  <TiTick size={24} />
                ) : (
                  index + 1
                )}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
        {!complete && (
          <button
            className="bg-gray-600 w-20 mx-auto px-3 py-1 rounded-md text-white font-semibold mt-24"
            onClick={() => {
              currentstep === steps.length
                ? setComplete(true)
                : setCurrentstep((prev) => prev + 1);
            }}>
            {currentstep === steps.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
