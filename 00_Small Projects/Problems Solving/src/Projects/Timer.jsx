import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(60);
  const [timerOn, setTimerOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    setTimerOn(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    setTimerOn(false);
  };

  useEffect(() => {
    if (timerOn) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      // Save the interval ID to state
      setIntervalId(id);
    } else {
      // Clear interval if timer is stopped
      clearInterval(intervalId);
    }

    // Cleanup function to clear interval when component unmounts or timer stops
    return () => clearInterval(intervalId);
  }, [timerOn]); // Only re-run effect if timerOn changes

  // Reset function to reset the timer
  const resetTimer = () => {
    setCount(60); // Reset count to initial value
    setTimerOn(false); // Stop the timer
    clearInterval(intervalId); // Clear the interval
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        {!timerOn ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
