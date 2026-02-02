import { useState, useRef, useCallback } from 'react';

const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, [isRunning]);

  const pauseTimer = useCallback(() => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, [isRunning]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? '0' + v : v))
      .join(':');
  };

  return { time, isRunning, startTimer, pauseTimer, resetTimer, formatTime };
};

export default useTimer;
