import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("1");
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    if (Number(input) < 1 || Number(input) > 100) {
      setMessage("enetr a valid number");
      return;
    }
    if (Number(input) === random) {
      setMessage("You are winner");
    } else if (Number(input) < random) {
      setMessage("Your guess is Less than the actual number");
    } else {
      setMessage("Your guess is Higher than the actual number");
    }
  };

  const handleReset = () => {
    setInput("1");
  };

  return (
    <div>
      <h1 className="text-center shadow-lg p-5  text-lg">Guess the number</h1>

      <div className="flex flex-col justify-center items-center ">
        <p className="mt-10">Guess a Number between 0 and 100</p>
        <input
          type="number"
          value={input}
          className="border px-15 py-2 text-center"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="m-5">
          <button
            className="bg-gray-200 border-gray-200 px-12 py-1 mr-5"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-gray-200 border-gray-200 px-12 py-1 mr-5"
            onClick={handleCheck}
          >
            Check
          </button>
        </div>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default App;
