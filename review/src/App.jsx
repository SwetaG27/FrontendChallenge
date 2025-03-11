import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [numSeat, setNumSeat] = useState(2);
  const [clickSeat, setClickSeat] = useState([]);
  const navigate = useNavigate();

  const handleClick = (row, col) => {
    const seat = `${row}-${col}`;

    if (clickSeat.length < numSeat) {
      setClickSeat([...clickSeat, seat]);
    }
  };

  const handleNext = () => {
    if (clickSeat.length === numSeat) {
      navigate("/secondPage", {
        state: { seatNo: numSeat, seatDetail: clickSeat },
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10 gap-3">
        <span>No. of seat:</span>
        <select
          className="border w-10 bg-blue-300"
          value={numSeat}
          onChange={(e) => setNumSeat(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-5 space-x-5 ml-6">
        {["A", "B", "C", "D", "E", "F"].map((label) => (
          <div key={label} className="w-10 text-center">
            {label}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-2">
        {Array(24)
          .fill("")
          .map((_, row) => (
            <div className="flex space-x-6 space-y-5" key={row}>
              <div className="mt-2">{row + 1}</div>
              {Array(6)
                .fill("")
                .map((_, col) => {
                  const seat = `${row}-${col}`;
                  const isSeat = clickSeat.includes(seat);
                  return (
                    <div
                      key={`${row}-${col}`}
                      className={`w-10 h-10  ${
                        isSeat ? "bg-amber-600" : "bg-gray-300"
                      }`}
                      onClick={() => handleClick(row, col)}
                    ></div>
                  );
                })}
            </div>
          ))}
      </div>
      <div className="text-end">
        <button
          className="bg-blue-400 px-5 py-1 rounded-lg "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
