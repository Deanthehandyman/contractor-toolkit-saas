import React, { useState } from 'react';
    import useTimer from '../hooks/useTimer';
    
    const JobTimer = () => {
      const {
        time,
        isRunning,
        startTimer,
        pauseTimer,
        resetTimer,
        formatTime,
      } = useTimer(0);
    
      return (
        <div>
          <h2>Job Timer</h2>
          <div>{formatTime(time)}</div>
          <div>
            {!isRunning ? (
              <button onClick={startTimer}>Start</button>
            ) : (
              <button onClick={pauseTimer}>Pause</button>
            )}
            <button onClick={resetTimer} disabled={!isRunning && time === 0}>
              Stop/Reset
            </button>
          </div>
        </div>
      );
    };
    
    export default JobTimer;
    
