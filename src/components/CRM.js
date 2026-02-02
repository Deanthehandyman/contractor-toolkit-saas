import React, { useState } from 'react';

function CRM() {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', phone: '281-917-9914', address: '123 Main St, Anytown, TX' }
  ]);

  const [newClient, setNewClient] = useState({ name: '', phone: '', address: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient(prev => ({ ...prev, [name]: value }));
  };

  const addClient = () => {
    if (newClient.name.trim() && newClient.phone.trim() && newClient.address.trim()) {
      setClients([...clients, { id: Date.now(), ...newClient }]);
      setNewClient({ name: '', phone: '', address: '' });
    } else {
      alert('Please fill in all client details.');
    }
  };

  const deleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div>
      <h3>Client Management</h3>
      
      <div className="mb-3 p-3 border rounded">
        <h5>Add New Client</h5>
        <div className="mb-2">
          <label className="form-label">Client Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Client Name"
            value={newClient.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            value={newClient.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Service Address:</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Service Address"
            value={newClient.address}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={addClient} className="btn btn-primary">
          Add Client
        </button>
      </div>

      <hr />
      <h4>Client List</h4>
      
      {clients.length === 0 ? (
        <p className="text-muted">No clients yet. Add one to get started!</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    <strong>{client.name}</strong>
                  </td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>
                    <button
                      onClick={() => deleteClient(client.id)}
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
      )}
    </div>
  );
}

export default CRM;
