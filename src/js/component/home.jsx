import React, { useState, useEffect } from 'react';

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="calendar">
      <div className="counter">{seconds}</div>
    </div>
  );
};

export default SecondsCounter;