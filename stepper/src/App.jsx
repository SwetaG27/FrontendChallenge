import { useState } from "react";

const stepsBasedText = [
  "Add contact details for further communications.",
  "Add Shipping address for successful delivery.",
  "Complete Payment to complete the order.",
  "Ready to get delivered!",
  "Order Delivered successfully! 🎉",
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < stepsBasedText.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1 className="text-center shadow-lg p-5  text-lg">Stepper</h1>

      <div className="flex flex-col items-center space-y-6 p-6">
        <div className="flex items-center justify-center gap-4">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="flex items-center">
              <button
                className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-white transition-all 
                ${
                  index < currentStep
                    ? "bg-green-700"
                    : index === currentStep
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {index < currentStep ? "✅" : index + 1}
              </button>

              {index < 3 && (
                <div
                  className={`w-30 h-1  -mr-5 transition-all ${
                    index < currentStep ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-lg font-semibold text-gray-700">
          {stepsBasedText[currentStep]}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-400 text-white font-bold rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === stepsBasedText.length - 1}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md disabled:opacity-50"
          >
            {currentStep === stepsBasedText.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
