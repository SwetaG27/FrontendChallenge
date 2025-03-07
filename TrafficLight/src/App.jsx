import { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(5);
  const [active, setActive] = useState("red");
  useEffect(() => {
    let timer;
    switch (active) {
      case "red":
        setSeconds(5);
        timer = setTimeout(() => setActive("green"), 5000);
        break;
      case "green":
        setSeconds(3);
        timer = setTimeout(() => setActive("yellow"), 3000);
        break;
      case "yellow":
        setSeconds(2);
        timer = setTimeout(() => setActive("red"), 2000);
        break;
      default:
        clearTimeout(timer);
    }
  }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <h1 className="text-center shadow-lg p-5 text-lg font-bold">
        Traffic Lights
      </h1>
      <div className="flex justify-center mt-10">
        <div className="w-25 h-60 bg-black rounded-lg flex flex-col items-center  gap-5">
          <div
            className={`w-15 h-15 rounded-full mt-2  ${
              active === "red" ? "bg-red-400" : "bg-gray-400"
            }`}
          ></div>
          <div
            className={`w-15 h-15 rounded-full   ${
              active === "yellow" ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></div>
          <div
            className={`w-15 h-15 rounded-full   ${
              active === "green" ? "bg-green-400" : "bg-gray-400"
            }`}
          ></div>
        </div>
      </div>
      <h1 className="text-center mt-5 font-bold text-lg">{seconds} seconds</h1>
    </div>
  );
};

export default App;
