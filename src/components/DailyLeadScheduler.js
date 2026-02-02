import React, { useState, useEffect } from 'react';
import { generateTexasLeads } from '../texasLeadDatabase';

const DailyLeadScheduler = ({ onNewLeads }) => {
  const [schedule, setSchedule] = useState('09:00');
  const [lastRun, setLastRun] = useState(null);
  const [nextRun, setNextRun] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [newLeadsCount, setNewLeadsCount] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadScheduleSettings();
    startScheduler();
  }, []);

  const loadScheduleSettings = () => {
    const saved = localStorage.getItem('leadSchedule');
    if (saved) {
      setSchedule(saved);
    }
  };

  const startScheduler = () => {
    const checkLeads = () => {
      const now = new Date();
      const [hours, minutes] = schedule.split(':');
      const scheduledTime = new Date();
      scheduledTime.setHours(parseInt(hours), parseInt(minutes), 0);

      if (now >= scheduledTime && (!lastRun || new Date(lastRun).getDate() !== now.getDate())) {
        runLeadGeneration();
      }
    };

    const interval = setInterval(checkLeads, 60000); // Check every minute
    return () => clearInterval(interval);
  };

  const runLeadGeneration = () => {
    setIsRunning(true);
    addLog('Starting lead generation...');

    setTimeout(() => {
      try {
        const data = generateTexasLeads();
        const newCount = data.arkLaTexLeads.length + data.eastTexasLeads.length;
        
        setNewLeadsCount(newCount);
        setLastRun(new Date().toLocaleString());
        addLog(`✅ Successfully generated ${newCount} new leads`);
        addLog(`🃍 Ark-La-Tex: ${data.arkLaTexLeads.length} leads`);
        addLog(`🃍 East Texas: ${data.eastTexasLeads.length} leads`);
        
        // Store leads in localStorage
        localStorage.setItem('todayLeads', JSON.stringify(data.allLeads));
        localStorage.setItem('todayLeadCount', newCount);
        
        // Notify parent component
        if (onNewLeads) {
          onNewLeads(newCount);
        }
        
        setIsRunning(false);
      } catch (error) {
        addLog(`❌ Error: ${error.message}`);
        setIsRunning(false);
      }
    }, 1000);
  };

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  const handleScheduleChange = (e) => {
    const newTime = e.target.value;
    setSchedule(newTime);
    localStorage.setItem('leadSchedule', newTime);
    addLog(`⏰ Schedule updated to ${newTime}`);
  };

  const calculateNextRun = () => {
    const [hours, minutes] = schedule.split(':');
    const next = new Date();
    next.setHours(parseInt(hours), parseInt(minutes), 0);
    
    if (next <= new Date()) {
      next.setDate(next.getDate() + 1);
    }
    
    return next.toLocaleString();
  };

  return (
    <div className="scheduler-panel">
      <h2>툿0 Daily Lead Generation Schedule</h2>

      <div className="schedule-settings">
        <div className="setting-row">
          <label>Daily Check Time:</label>
          <input 
            type="time" 
            value={schedule} 
            onChange={handleScheduleChange}
          />
        </div>

        <div className="schedule-info">
          {lastRun && (
            <p><strong>Last Run:</strong> {lastRun}</p>
          )}
          <p><strong>Next Run:</strong> {calculateNextRun()}</p>
        </div>

        <button 
          className="run-now-btn" 
          onClick={runLeadGeneration}
          disabled={isRunning}
        >
          {isRunning ? '⏳ Running...' : '▶️ Run Now'}
        </button>
      </div>

      <div className="schedule-stats">
        <div className="stat-card">
          <h3>Today's Leads</h3>
          <p className="stat-number">{newLeadsCount}</p>
        </div>
        <div className="stat-card">
          <h3>Status</h3>
          <p className={`stat-status ${isRunning ? 'running' : 'idle'}`}>
            {isRunning ? 'Running' : 'Idle'}
          </p>
        </div>
      </div>

      <div className="scheduler-logs">
        <h3>📋 Activity Log</h3>
        <div className="log-container">
          {logs.length === 0 ? (
            <p className="no-logs">No activity yet. Click 'Run Now' to start.</p>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="log-entry">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyLeadScheduler;
