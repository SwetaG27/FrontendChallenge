import { useState } from "react";

const App = () => {
  const [click, setClick] = useState(null);
  const [highlight, setHighlight] = useState([]);

  const handleClick = (row, col) => {
    setClick({ row, col });

    const diagonal = [];
    for (let i = 0; i < 8; i++) {
      if (row - i >= 0 && col - i >= 0) {
        diagonal.push({ row: row - i, col: col - i });
      }
      if (row + i < 8 && col + i < 8) {
        diagonal.push({ row: row + i, col: col + i });
      }
      if (row - i >= 0 && col + i < 8) {
        diagonal.push({ row: row - i, col: col + i });
      }
      if (row + i < 8 && col - i >= 0) {
        diagonal.push({ row: row + i, col: col - i });
      }
    }

    setHighlight(diagonal);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="px-100 py-5 font-bold shadow-lg ">Chess Board</h1>
      <p className="mt-5 mb-5">Click on any cell to color diagonally</p>
      <div className="border">
        {Array(8)
          .fill("")
          .map((_, row) => (
            <div className="flex" key={row}>
              {Array(8)
                .fill("")
                .map((_, col) => {
                  const isBlack = (row + col) % 2 === 1;
                  const isClicked =
                    click && click.row === row && click.col === col;

                  const isHighlight = highlight.some(
                    (cell) => cell.row === row && cell.col === col
                  );

                  return (
                    <div
                      key={`${row}-${col}`}
                      className={`w-23 h-23 ${
                        isClicked
                          ? "bg-red-900"
                          : isHighlight
                          ? "bg-red-500"
                          : isBlack
                          ? "bg-black"
                          : "bg-gray-100"
                      }`}
                      onClick={() => handleClick(row, col)}
                    ></div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
