import React from "react";

function Timer({ timeLeft, mode }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  return (
    <div className="my-4">
      <h2 id="timer-label">{mode}</h2>
      <div
        id="time-left"
        className="display-1 border rounded p-3 bg-dark text-white"
        style={{ width: "200px", margin: "0 auto" }}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

export default Timer;
