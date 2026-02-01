import React from 'react';
    import './App.css';
    import JobTimer from './components/JobTimer';
    import MileageTracker from './components/MileageTracker';
    import FieldNotes from './components/FieldNotes';
    import Estimator from './components/estimator'; // Note: filename was estimator.js
    import Invoicer from './components/Invoicer';
    import CRM from './components/CRM';
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Contractor Toolkit Dashboard</h1>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-md-4"><JobTimer /></div>
              <div className="col-md-4"><MileageTracker /></div>
              <div className="col-md-4"><FieldNotes /></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6"><Estimator /></div>
              <div className="col-md-6"><Invoicer /></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12"><CRM /></div>
            </div>
          </div>
        </div>
      );
    }
    
    export default App;
    
