import React, { useState } from 'react';
    
    function CRM() {
      const [clients, setClients] = useState([
        { name: 'John Doe', phone: '281-917-9914', address: '123 Main St, Anytown, TX' }
      ]);
      const [newClient, setNewClient] = useState({ name: '', phone: '', address: '' });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
      };
    
      const addClient = () => {
        if (newClient.name && newClient.phone && newClient.address) {
          setClients([...clients, newClient]);
          setNewClient({ name: '', phone: '', address: '' }); // Clear form
        } else {
          alert('Please fill in all client details.');
        }
      };
    
      return (
        <div>
          <h3>Client Management</h3>
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Client Name" 
              value={newClient.name} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              value={newClient.phone} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="address" 
              placeholder="Service Address" 
              value={newClient.address} 
              onChange={handleInputChange} 
            />
            <button onClick={addClient}>Add Client</button>
          </div>
          <hr />
          <h4>Client List</h4>
          {clients.map((client, index) => (
            <div key={index} style={{ borderBottom: '1px solid #eee', padding: '5px 0' }}>
              <strong>{client.name}</strong><br />
              Phone: {client.phone}<br />
              Address: {client.address}
            </div>
          ))}
        </div>
      );
    }
    
    export default CRM;
    
