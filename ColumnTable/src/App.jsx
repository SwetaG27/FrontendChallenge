import { useState } from "react";

const App = () => {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(2);
  return (
    <div>
      <h1 className="text-center  font-bold py-5 shadow-lg">Column Table</h1>
      <div className="flex justify-center gap-5 mt-5 mb-5">
        <label>Rows::{row}</label>
        <input
          type="range"
          min="2"
          max="8"
          value={row}
          onChange={(e) => setRow(parseInt(e.target.value))}
        />
        <label>Columns::{col}</label>
        <input
          type="range"
          min="2"
          max="8"
          value={col}
          onChange={(e) => setCol(parseInt(e.target.value))}
        />
      </div>

      <div className=" flex flex-col items-center ">
        {Array(row)
          .fill("")
          .map((_, rows) => (
            <div key={rows} className="flex   space-y-1 space-x-1">
              {Array(col)
                .fill("")
                .map((_, cols) => {
                  return (
                    <div
                      key={cols}
                      className="w-10 h-10 border flex justify-center items-center"
                    >
                      {cols * row + rows + 1}
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
