import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChips([...chips, input]);
      setInput("");
    }
  };

  const handleCancel = (i) => {
    setChips((prev) => prev.filter((a, index) => index !== i));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="px-100 py-5 shadow-lg font-bold">Chips Input</h1>
      <div className="px-2 mt-10  border-black border-2 w-80 py-3">
        <input
          placeholder="Type & Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="focus:outline-none"
        />
      </div>
      <div className="mt-10 flex  gap-2 self-start ml-10">
        {chips.map((a, i) => (
          <li className="list-none flex gap-3 border px-2 py-1 rounded-xl bg-gray-200 border-gray-200 ">
            <p>{a}</p>
            <button className="text-red-500" onClick={() => handleCancel(i)}>
              ❌{" "}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default App;
