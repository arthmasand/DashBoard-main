// Time.js
import React, { useState, useEffect } from "react";
import './Time.css';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDate(now.toDateString().slice(0, 11));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-card">
      <div className="time-span">{currentTime}</div>
      <div className="date-span">{currentDate}</div>
    </div>
  );
}

export default Time;    