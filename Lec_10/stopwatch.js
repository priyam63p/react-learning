import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setṬime] = useState(0);
  const [isRunning, setIsRunning] = useState(0);
  const interRef = useRef(null);
  function start() {
    if(!isRunning){
    interRef.current = setInterval(() => {
      setṬime((prevTime) => prevTime + 1);
      //   setṬime(time + 1);
      //   console.log(time);
    }, 1000);
    setIsRunning(true)
    }
  }
  function stop() {
    if(isRunning){
    clearInterval(interRef.current);
    setIsRunning(false)
    }
  }
  function reset() {
    clearInterval(interRef.current);
    setṬime(0);
  }
  return (
    <>
      <h1>StopWatch is: {time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StopWatch></StopWatch>
);
