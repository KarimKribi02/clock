import React, { useState, useEffect, useRef } from "react";
import LengthControl from "./LengthControl";
import Timer from "./Timer";
import Controls from "./Controls";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session"); // Session or Break
  const timerRef = useRef(null);

  const reset = () => {
    clearInterval(timerRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setMode("Session");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">25 + 5 Clock</h1>

      <div className="d-flex justify-content-around">
        <LengthControl
          label="Break Length"
          id="break"
          length={breakLength}
          setLength={setBreakLength}
          disabled={isRunning}
        />
        <LengthControl
          label="Session Length"
          id="session"
          length={sessionLength}
          setLength={setSessionLength}
          disabled={isRunning}
          setTimeLeft={setTimeLeft}
        />
      </div>

      <Timer timeLeft={timeLeft} mode={mode} />

      <Controls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        reset={reset}
        timerRef={timerRef}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        mode={mode}
        setMode={setMode}
        breakLength={breakLength}
        sessionLength={sessionLength}
      />

      <audio
        id="beep"
        preload="auto"
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      />
    </div>
  );
}

export default App;
