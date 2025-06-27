import React, { useEffect } from "react";

function Controls({
  isRunning,
  setIsRunning,
  reset,
  timerRef,
  timeLeft,
  setTimeLeft,
  mode,
  setMode,
  breakLength,
  sessionLength,
}) {
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            // Play sound
            const audio = document.getElementById("beep");
            audio.play();

            // Switch mode
            if (mode === "Session") {
              setMode("Break");
              return breakLength * 60;
            } else {
              setMode("Session");
              return sessionLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, mode, breakLength, sessionLength, setTimeLeft, setMode]);

  return (
    <div className="my-3">
      <button
        id="start_stop"
        className="btn btn-primary mx-2"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause ⏸" : "Start ▶️"}
      </button>

      <button id="reset" className="btn btn-danger mx-2" onClick={reset}>
        Reset 🔄
      </button>
    </div>
  );
}

export default Controls;
