import React from "react";

function LengthControl({ label, id, length, setLength, disabled, setTimeLeft }) {
  const decrement = () => {
    if (length > 1) {
      setLength(length - 1);
      if (id === "session" && setTimeLeft) {
        setTimeLeft((length - 1) * 60);
      }
    }
  };

  const increment = () => {
    if (length < 60) {
      setLength(length + 1);
      if (id === "session" && setTimeLeft) {
        setTimeLeft((length + 1) * 60);
      }
    }
  };

  return (
    <div className="text-center">
      <h4 id={`${id}-label`}>{label}</h4>
      <div className="d-flex justify-content-center align-items-center">
        <button
          id={`${id}-decrement`}
          className="btn btn-outline-danger mx-2"
          onClick={decrement}
          disabled={disabled}
        >
          -
        </button>
        <span id={`${id}-length`} className="mx-2 fs-4">
          {length}
        </span>
        <button
          id={`${id}-increment`}
          className="btn btn-outline-success mx-2"
          onClick={increment}
          disabled={disabled}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LengthControl;
