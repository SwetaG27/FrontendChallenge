import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(1);
  const [InValue, setInValue] = useState(1);
  const [upperValue, setUpperValue] = useState(1000);
  const [lowerValue, setLowerValue] = useState(-1000);

  const handleReset = () => {
    setValue(0);
    setInput(1);
    setInValue(1);
    setLowerValue(-1000);
    setUpperValue(1000);
  };

  const handledecrement = () => {
    setValue((prev) => {
      const newValue = prev - InValue;
      return newValue >= lowerValue && newValue <= upperValue ? newValue : prev;
    });
  };

  const handleIncrement = () => {
    setValue((prev) => {
      const newValue = prev + InValue;
      return newValue >= lowerValue && newValue <= upperValue ? newValue : prev;
    });
  };

  const asyncDecrement = () => {
    setTimeout(() => {
      handledecrement();
    }, input * 1000);
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      handleIncrement();
    }, input * 1000);
  };

  return (
    <div>
      <h1 className="py-5 shadow-lg font-bold text-center">Advanced Counter</h1>
      <div className=" flex flex-col items-center mt-5">
        <p className="text-2xl font-bold">{value}</p>
        <div className="flex gap-5 mt-5">
          <button className="border px-2 bg-gray-200" onClick={handledecrement}>
            -
          </button>
          <button className="border px-2 bg-gray-200" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="flex gap-5 mt-5">
          <button className="border px-2 bg-gray-200" onClick={asyncDecrement}>
            async-
          </button>
          <button className="border px-2 bg-gray-200" onClick={asyncIncrement}>
            +async
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <label>Delay</label>
          <input
            type="range"
            min="1"
            max="3"
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
          <p>{input}s</p>
        </div>
        <div className="flex gap-2 mt-2">
          <label>Increment/Decrement by</label>
          <input
            type="number"
            className="border w-10"
            value={InValue}
            onChange={(e) => setInValue(parseInt(e.target.value))}
          />
        </div>
        <div className="flex gap-2 mt-2">
          <label>Lower Limit</label>
          <input
            type="number"
            className="border w-15"
            value={lowerValue}
            onChange={(e) => setLowerValue(parseInt(e.target.value))}
          />
        </div>
        <div className="flex gap-2 mt-2">
          <label>Upper Limit</label>
          <input
            type="number"
            className="border w-15"
            value={upperValue}
            onChange={(e) => setUpperValue(parseInt(e.target.value))}
          />
        </div>
        <button className="border px-2 bg-gray-200 mt-5" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
