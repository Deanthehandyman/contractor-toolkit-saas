import React from 'react';
import './App.css';
import JobTimer from './components/JobTimer';
import MileageTracker from './components/MileageTracker';
import FieldNotes from './components/FieldNotes';
import Estimator from './components/Estimator';
import Invoicer from './components/Invoicer';
import CRM from './components/CRM';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contractor Toolkit Dashboard</h1>
        <p>Job timing, mileage, notes, estimating, invoicing, and CRM in one place.</p>
      </header>

      <main className="App-main container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <section className="card h-100">
              <div className="card-header">
                <h2 className="h5 mb-0">Job Timer</h2>
              </div>
              <div className="card-body">
                <JobTimer />
              </div>
            </section>
          </div>

          <div className="col-md-4 mb-3">
            <section className="card h-100">
              <div className="card-header">
                <h2 className="h5 mb-0">Mileage Tracker</h2>
              </div>
              <div className="card-body">
                <MileageTracker />
              </div>
            </section>
          </div>

          <div className="col-md-4 mb-3">
            <section className="card h-100">
              <div className="card-header">
                <h2 className="h5 mb-0">Field Notes</h2>
              </div>
              <div className="card-body">
                <FieldNotes />
              </div>
            </section>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <section className="card h-100">
              <div className="card-header">
                <h2 className="h5 mb-0">Estimator</h2>
              </div>
              <div className="card-body">
                <Estimator />
              </div>
            </section>
          </div>

          <div className="col-md-6 mb-3">
            <section className="card h-100">
              <div className="card-header">
                <h2 className="h5 mb-0">Invoicer</h2>
              </div>
              <div className="card-body">
                <Invoicer />
              </div>
            </section>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <section className="card">
              <div className="card-header">
                <h2 className="h5 mb-0">CRM</h2>
              </div>
              <div className="card-body">
                <CRM />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
