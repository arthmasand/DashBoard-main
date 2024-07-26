// PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

function PomodoroTimer({ initialTime = 25 * 60 }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert("Time's up!");
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-container">
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <button className="timer-btn" onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

export default PomodoroTimer;    
