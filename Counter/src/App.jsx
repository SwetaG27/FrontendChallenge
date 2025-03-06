import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(1);

  const handleReset = () => {
    setValue(0);
    setInput(1);
  };

  const handleIncrement = () => {
    setValue(value + input);
  };

  const handleDecrement = () => {
    setValue(value - input);
  };

  const handleInputChange = (e) => {
    setInput(() => {
      const newValue = e.target.value;
      if (!isNaN(newValue) && Number(newValue) > 0) {
        setInput(Number(newValue));
      }
    });
  };

  return (
    <div>
      <h1 className="text-center shadow-lg p-5  text-lg">Counter</h1>
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-xl">{value}</h1>
        <div className="m-5">
          <button
            className="border bg-gray-200 px-2 py-1 text-lg mr-5"
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            className="border bg-gray-200 px-2 py-1 text-lg"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div>
          <label>Increment/Decrement by</label>
          <input
            className="border ml-2 w-20"
            type="number"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="border bg-gray-200 px-2 py-1 text-lg mt-5"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
