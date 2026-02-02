import React, { useState } from 'react';

function MileageTracker() {
  const [trips, setTrips] = useState([
    { id: 1, date: '2024-01-15', startOdometer: 10000, endOdometer: 10050, notes: 'Client visit' }
  ]);

  const [newTrip, setNewTrip] = useState({
    date: new Date().toISOString().split('T')[0],
    startOdometer: '',
    endOdometer: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip(prev => ({ ...prev, [name]: value }));
  };

  const addTrip = () => {
    if (newTrip.startOdometer && newTrip.endOdometer) {
      const miles = parseFloat(newTrip.endOdometer) - parseFloat(newTrip.startOdometer);
      if (miles > 0) {
        setTrips([...trips, { id: Date.now(), ...newTrip, miles }]);
        setNewTrip({ date: new Date().toISOString().split('T')[0], startOdometer: '', endOdometer: '', notes: '' });
      } else {
        alert('End odometer must be greater than start odometer.');
      }
    } else {
      alert('Please fill in odometer readings.');
    }
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  const totalMiles = trips.reduce((sum, trip) => sum + (trip.miles || 0), 0);
  const deductionAmount = totalMiles * 0.655; // 2024 IRS mileage rate

  return (
    <div>
      <h3>Mileage Tracker</h3>
      
      <div className="mb-3 p-3 border rounded">
        <h5>Log New Trip</h5>
        <div className="mb-2">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={newTrip.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="form-label">Start Odometer:</label>
            <input
              type="number"
              name="startOdometer"
              className="form-control"
              placeholder="Start miles"
              value={newTrip.startOdometer}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">End Odometer:</label>
            <input
              type="number"
              name="endOdometer"
              className="form-control"
              placeholder="End miles"
              value={newTrip.endOdometer}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Notes:</label>
          <input
            type="text"
            name="notes"
            className="form-control"
            placeholder="Trip notes"
            value={newTrip.notes}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={addTrip} className="btn btn-primary">
          Log Trip
        </button>
      </div>

      <hr />
      <h4>Trip Log</h4>
      
      <div className="table-responsive mb-3">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Miles</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.date}</td>
                <td>{trip.startOdometer}</td>
                <td>{trip.endOdometer}</td>
                <td>{trip.miles || (trip.endOdometer - trip.startOdometer)}</td>
                <td>{trip.notes}</td>
                <td>
                  <button
                    onClick={() => deleteTrip(trip.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="summary p-3 bg-light rounded">
        <h5>Summary</h5>
        <p><strong>Total Miles:</strong> {totalMiles}</p>
        <p><strong>Tax Deduction (@ $0.655/mi):</strong> ${deductionAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MileageTracker;
