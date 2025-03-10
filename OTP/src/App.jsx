import { useRef, useState } from "react";

const App = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const input = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      input.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      input.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      input.current[index + 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      input.current[index - 1].focus();
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    if (!/^\d*$/.test(paste)) return;

    const digit = paste.split("");
    const newOtp = [...otp];
    digit.forEach((digit, i) => {
      if (index + i < 6) {
        newOtp[index + i] = digit;
      }
    });
    setOtp(newOtp);
    const newposition = Math.min(index + digit.length, 5);
    input.current[newposition].focus();
  };

  return (
    <div className="flex gap-3 mt-10 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          className="w-10 h-12  text-center text-lg border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none"
          type="text"
          value={digit}
          ref={(el) => (input.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
        />
      ))}
    </div>
  );
};

export default App;
