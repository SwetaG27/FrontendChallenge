import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleFormat = (value) => {
    const data = value.replace(/\D/g, "");

    if (data.length === 0) return "";
    if (data.length <= 3) return `+(${data}`;
    if (data.length <= 6) return `+(${data.slice(0, 3)}) - ${data.slice(3)}`;
    return `+(${data.slice(0, 3)}) - ${data.slice(3, 10)}`;
  };

  return (
    <div>
      <h1 className="text-center shadow-lg p-5  text-lg">
        Telephone formatter
      </h1>
      <div className=" flex flex-col items-center mt-10 gap-4">
        <input
          placeholder="Mobile number"
          className="border py-1  text-lg px-1"
          type="tel"
          value={input}
          onChange={(e) => setInput(handleFormat(e.target.value))}
        />
        <p>+(123) - 4567890</p>
      </div>
    </div>
  );
};
export default App;
