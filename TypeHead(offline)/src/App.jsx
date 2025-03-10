import { useState } from "react";
import countries from "./assets/data/data";

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = countries.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestion(filtered.slice(0, 5));
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestion([]);
    setFocusedIndex(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(suggestion.length - 1, prevIndex + 1)
      );
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null ? suggestion.length - 1 : Math.max(0, prevIndex - 1)
      );
    } else if (e.key === "Enter" && focusedIndex !== null) {
      handleSuggestionClick(suggestion[focusedIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-96 p-2.5 rounded border border-gray-300 text-base"
        onKeyDown={handleKeyDown}
        placeholder="Search for a country..."
      />
      {suggestion.length > 0 && (
        <ul className="list-none p-0 mt-1 w-96 border border-gray-300 rounded bg-yellow-50 max-h-36 overflow-y-auto">
          {suggestion.map((suggestion, index) => (
            <li
              key={index}
              onMouseEnter={() => setFocusedIndex(index)}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`p-2.5 cursor-pointer ${
                index !== suggestion.length - 1
                  ? "border-b border-gray-200"
                  : ""
              } ${focusedIndex === index ? "bg-yellow-300" : "bg-transparent"}`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
