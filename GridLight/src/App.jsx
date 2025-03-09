import { useState, useEffect } from "react";

const App = () => {
  const [selections, setSelections] = useState([]);
  const [isClearing, setIsclearing] = useState(false);

  function handleClick(row, col) {
    if (isClearing) return;

    const alreadySelected = selections.some(
      (cell) => cell.row === row && cell.col === col
    );
    if (alreadySelected) return;
    setSelections([...selections, { row, col }]);
  }

  useEffect(() => {
    if (selections.length === 9) {
      setIsclearing(true);
      selections.forEach((_, index) => {
        setTimeout(() => {
          setSelections((prev) => prev.slice(0, prev.length - 1));

          if (index === selections.length - 1) {
            setIsclearing(false);
          }
        }, index * 300);
      });
    }
  }, [selections]);

  return (
    <div className=" flex justify-center mt-10">
      <div className="grid grid-cols-3 gap-2 ">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const isSelected = selections.some(
              (cell) => cell.row === row && cell.col === col
            );

            return (
              <div
                key={`${row}-${col}`}
                className={`w-50 h-50 border cursor-pointer flex items-center justify-center
              ${isSelected ? "bg-green-600" : "bg-gray-300"}`}
                onClick={() => handleClick(row, col)}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;



