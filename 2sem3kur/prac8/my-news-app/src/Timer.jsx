import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      Таймер: {seconds} секунд
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Остановить' : 'Запустить'}
        </button>
        <button onClick={resetTimer}>Сбросить</button>
      </div>
    </div>
  );
};

export default Timer;