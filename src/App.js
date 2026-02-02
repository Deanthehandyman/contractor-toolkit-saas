import React, { useState, useEffect } from 'react';
import './App.css';
import LeadViewer from './components/LeadViewer';
import DailyLeadScheduler from './components/DailyLeadScheduler';

function App() {
  const [activeTab, setActiveTab] = useState('leads');
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    // Check for new leads daily
    const lastCheck = localStorage.getItem('lastLeadCheck');
    const today = new Date().toDateString();
    
    if (lastCheck !== today) {
      // New day - reset counter
      localStorage.setItem('lastLeadCheck', today);
      setTodayCount(0);
    } else {
      const count = localStorage.getItem('todayLeadCount');
      setTodayCount(count ? parseInt(count) : 0);
    }
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>📍 Dean's New Leads</h1>
          <p>Real-time handyman lead generation for Texas</p>
          <div className="lead-counter">
            <span className="counter-badge">{todayCount} New Leads Today</span>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeTab === 'leads' ? 'active' : ''}`}
          onClick={() => setActiveTab('leads')}
        >
          📋 View Leads
        </button>
        <button 
          className={`nav-btn ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          ⏰ Schedule
        </button>
        <button 
          className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'leads' && <LeadViewer />}
        {activeTab === 'schedule' && <DailyLeadScheduler onNewLeads={(count) => setTodayCount(todayCount + count)} />}
        {activeTab === 'settings' && (
          <div className="settings-panel">
            <h2>Settings</h2>
            <div className="setting-item">
              <label>Daily Lead Check Time:</label>
              <input type="time" defaultValue="09:00" />
            </div>
            <div className="setting-item">
              <label>Target Regions:</label>
              <div className="region-checkboxes">
                <label><input type="checkbox" defaultChecked /> Ark-La-Tex</label>
                <label><input type="checkbox" defaultChecked /> East Texas</label>
                <label><input type="checkbox" /> North Texas</label>
                <label><input type="checkbox" /> Central Texas</label>
              </div>
            </div>
            <div className="setting-item">
              <label>Lead Quality Filter:</label>
              <select>
                <option>All Quality Levels</option>
                <option>Hot Only</option>
                <option>Hot & Warm</option>
              </select>
            </div>
            <button className="save-settings-btn">Save Settings</button>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Dean's New Leads • Ark-La-Tex to All Texas Coverage • Updated Daily</p>
      </footer>
    </div>
  );
}

export default App;
