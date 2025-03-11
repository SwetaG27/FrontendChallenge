import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["java", "python"]);
  const [edit, setEdit] = useState(null);

  const handleSubmit = () => {
    if (edit !== null) {
      setList((prev) =>
        prev.map((item, index) => (index === edit ? input : item))
      );
      setEdit(null);
    } else {
      setList([...list, input]);
    }
    setInput("");
  };
  const handleCancel = () => {
    setInput("");
    setEdit(null);
  };

  const handleDelete = (index) => {
    setList((prev) => prev.filter((a, i) => i !== index));
    setEdit(null);
  };

  const handleEdit = (i) => {
    setInput(list[i]);
    setEdit(i);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="px-100 py-5 font-bold shadow-lg">Todo List</h1>
      <div>
        <input
          placeholder="Enter your Todo"
          className="border px-5 py-1 mb-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex gap-5 mb-2">
          <button
            className={`text-white px-2 py-1  rounded-lg ${
              input ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={handleSubmit}
          >
            {edit !== null ? "update" : "Submit"}
          </button>
          <button
            className={`text-white px-2 py-1  rounded-lg ${
              input ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        <p>Double click on todo to toggle completion status</p>

        <div>
          {list.map((a, i) => (
            <li className="list-none flex justify-between mb-2 ">
              <p>{a}</p>
              <div className="space-x-1.5">
                <button
                  className="text-white px-2 py-1 bg-green-700 rounded-lg"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="text-white px-2 py-1 bg-red-600 rounded-lg"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
