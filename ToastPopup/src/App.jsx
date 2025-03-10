import { useState } from "react";
const App = () => {
  // const [input, setInput] = useState();
  const [horizontal,setHorizontal]=useState("LEFT")
  const [vertical,setVertical]=useState("TOP")
  const [type,setType]=useState("Normal")
  const [message,setMessage]=useState("This is a toast message!")
  const [duration,setDuration]=useState(5);
  const [toastMessage,setToastMessage]=useState([])

  return (
    <div>
      <h1 className="text-center font-lg shadow-lg p-5">Toast Popup</h1>
      <div className="flex flex-col items-center gap-5 mt-10">
        <form >

        
     <div>
          <select  name=" position" id="horizontal-position" value={horizontal} onChange={(e)=>setHorizontal(e.target.value)} className="border w-60 px-2 py-1">
          <option value="LEFT">Left</option>
          <option value="RIGHT"> Right</option>
          </select>
          </div>
          <div>
          <select
          value={vertical}
          onChange={(e) => setVertical(e.target.value)}
          className="border w-60 px-2 py-1 mt-5 mb-5"
        >
          <option value="TOP">Top</option>
          <option value="BOTTOM">Bottom</option>
        </select>
        </div>

        <div>
        <select value={type} onChange={(e) => setType(e.target.value)}  className="border w-60 px-2 py-1  mb-5">
          <option value="NORMAL">Normal</option>
          <option value="SUCCESS">Success</option>
          <option value="ERROR">Error</option>
          <option value="WARNING">Warning</option>
          <option value="INFO">Info</option>
        </select>
        </div>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-2 py-1 mb-5 w-60"
        />

        <div>
          <label>Duration</label>
          <input type="range" min={3} max={10}  value={duration} onChange={(e)=>setDuration(e.target.value)}/>
        </div>

        <button className="border px-2 py-1 bg-blue-200 mt-5 ">Show Toast</button>
        </form>
      </div>
    </div>
  );
};

export default App;
