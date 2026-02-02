import React, { useState } from 'react';
import useTimer from '../hooks/useTimer';

function JobTimer() {
  const { time, isRunning, startTimer, pauseTimer, resetTimer, formatTime } = useTimer(0);
  const [jobName, setJobName] = useState('');

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="jobName" className="form-label">Job Name:</label>
        <input
          id="jobName"
          type="text"
          className="form-control"
          placeholder="Enter job name"
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
        />
      </div>
      
      <div className="timer-display mb-3">
        <h4>{formatTime(time)}</h4>
      </div>

      <div className="button-group d-grid gap-2">
        {!isRunning ? (
          <button onClick={startTimer} className="btn btn-success">
            Start
          </button>
        ) : (
          <button onClick={pauseTimer} className="btn btn-warning">
            Pause
          </button>
        )}
        <button 
          onClick={resetTimer} 
          disabled={isRunning && time === 0} 
          className="btn btn-danger"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default JobTimer;
