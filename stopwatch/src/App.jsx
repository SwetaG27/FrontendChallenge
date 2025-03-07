import { useState, useRef } from "react";

const App = () => {
  const [input, setInput] = useState(2);
  const [time, SetTime] = useState({
    minutes: 0,
    seconds: input,
    milliseconds: 0,
  });

  const [isRunning, setRunning] = useState(false);
  const timer = useRef(null);

  const start = () => {
    if (!isRunning) {
      setRunning(true);
      timer.current = setInterval(() => {
        SetTime((prevtime) => {
          let { minutes, seconds, milliseconds } = prevtime;

          milliseconds += 10;

          if (milliseconds === 1000) {
            milliseconds = 0;
            seconds = Number(seconds) + Number(input);
          }
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          return { minutes, seconds, milliseconds };
        });
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(timer.current);
    setRunning(false);
  };

  const cancel = () => {
    clearInterval(timer.current);
    setInput(input);
    SetTime({ minutes: 0, seconds: input, milliseconds: 0 });
    setRunning(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center
    border bg-gray p-5 w-[15rem] h-[15rem] rounded-[7.5rem]"
    >
      <div>
        {String(time.minutes).padStart(2, "0")}:
        {String(time.seconds).padStart(2, "0")}:
        {String(time.minutes).padStart(3, "0")}
      </div>
      <div>
        <input
          className="border w-20 mr-2 text-center"
          value={input}
          type="number"
          onChange={(e) => setInput(e.target.value)}
        />
        <label>seconds</label>
      </div>

      <div>
        <button className="p-1 border" onClick={start}>
          START
        </button>
        <button className="p-1 m-2 border" onClick={stop}>
          STOP
        </button>
        <button className="p-1 border" onClick={cancel}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default App;
