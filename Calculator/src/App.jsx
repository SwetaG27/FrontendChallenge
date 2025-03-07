import { useState } from "react";

const App = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [equal, setEqual] = useState(false);

  function setNumber(value) {
    if (!operator && equal) {
      setFirst(value);
      setEqual(false);
    } else if (!operator) {
      if (!(first.includes(".") && value === ".")) setFirst(first + value);
    } else {
      if (!(second.includes(".") && value === ".")) setSecond(second + value);
    }
  }

  function handleDel() {
    if (second) {
      setSecond(second.slice(0, -1));
    } else if (operator) {
      setOperator("");
    } else if (first) {
      setFirst(first.slice(0, -1));
    }
  }

  function changeSign() {
    if (second) {
      setSecond(second.startsWith("-") ? second.slice(1) : "-" + second);
    } else if (first) {
      setFirst(first.startsWith("-") ? first.slice(1) : "-" + first);
    }
  }

  function square() {
    if (second) {
      const num = parseFloat(second);
      setSecond((num * num).toString());
    } else if (first) {
      const num = parseFloat(first);
      setFirst((num * num).toString());
      setResult((num * num).toString());
    }
  }

  function squareRoot() {
    if (second) {
      const num = parseFloat(second);
      if (num >= 0) {
        setSecond(Math.sqrt(num).toString());
      } else {
        setSecond("Error");
      }
    } else if (first) {
      const num = parseFloat(first);
      if (num >= 0) {
        setFirst(Math.sqrt(num).toString());
        setResult(Math.sqrt(num).toString());
      } else {
        setFirst("Error");
        setResult("Error");
      }
    }
  }

  function power() {
    if (first && second) {
      const base = parseFloat(first);
      const exponent = parseFloat(second);
      const answer = Math.pow(base, exponent);
      setResult(answer.toString());
      setFirst(answer.toString());
      setSecond("");
      setOperator("");
      setEqual(true);
    } else {
      setOperator("^");
    }
  }

  function calculate() {
    if (!first || !second || !operator) return;

    let num1 = parseFloat(first);
    let num2 = parseFloat(second);
    let answer;

    switch (operator) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
      case "/":
        answer = num2 !== 0 ? num1 / num2 : "Infinity";
        break;
      case "^":
        answer = Math.pow(num1, num2);
        break;
      default:
        return;
    }

    setResult(answer.toString());
    setFirst(answer.toString());
    setSecond("");
    setOperator("");
    setEqual(true);
  }

  function clear() {
    setFirst("");
    setSecond("");
    setOperator("");
    setResult("");
    setEqual(false);
  }

  function handleButtonClick(btn) {
    if (!isNaN(btn) || btn === ".") {
      setNumber(btn.toString());
    } else if (btn === "=") {
      calculate();
    } else if (btn === "Clear") {
      clear();
    } else if (btn === "Del") {
      handleDel();
    } else if (btn === "+-") {
      changeSign();
    } else if (btn === "x²") {
      square();
    } else if (btn === "√") {
      squareRoot();
    } else if (btn === "Xʸ") {
      power();
    } else {
      setOperator(btn);
    }
  }

  return (
    <div className="w-full max-w-md h-full bg-emerald-300 flex flex-col justify-center items-center p-5 rounded-lg shadow-lg">
      <div className="border border-black bg-black text-white w-full h-20 mb-5 rounded-lg mt-10 flex flex-col p-3 text-end overflow-hidden">
        <p className="text-gray-300 h-6 overflow-hidden">
          {first} {operator} {second}
        </p>
        <p className="text-xl font-bold h-8 overflow-hidden">
          {result || second || first || "0"}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full">
        {[
          "Clear",
          "Del",
          "+-",
          "x²",
          "1",
          "2",
          "3",
          "+",
          "4",
          "5",
          "6",
          "/",
          "7",
          "8",
          "9",
          "-",
          "0",
          "Xʸ",
          "√",
          "*",
          ".",
          "=",
        ].map((btn, index) => (
          <button
            key={index}
            className={`w-full h-16 ${
              ["=", "+", "-", "*", "/", "Xʸ", "^"].includes(btn)
                ? "bg-orange-500"
                : ["Clear", "Del", "+-", "x²", "√"].includes(btn)
                ? "bg-orange-500"
                : "bg-gray-500"
            } text-white rounded-xl text-xl hover:opacity-80 transition-opacity`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
