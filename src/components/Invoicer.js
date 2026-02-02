import React, { useState, useMemo } from 'react';

function Invoicer({ estimateItems = [], estimateTotal = 0 }) {
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [items, setItems] = useState(estimateItems.length > 0 ? estimateItems : [
    { description: 'Sample Item', quantity: 1, price: 100 }
  ]);

  const [taxRate, setTaxRate] = useState(0.1);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }, [items]);

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h3>Invoice Generator</h3>

      <div className="mb-3">
        <label className="form-label">Client Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Client Name"
          value={clientInfo.name}
          onChange={handleClientChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={clientInfo.email}
          onChange={handleClientChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone:</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="Phone"
          value={clientInfo.phone}
          onChange={handleClientChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address:</label>
        <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Service Address"
          value={clientInfo.address}
          onChange={handleClientChange}
        />
      </div>

      <hr />

      <h5>Invoice Items</h5>
      <div className="table-responsive mb-3">
        <table className="table table-sm table-bordered">
          <thead className="table-light">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="invoice-summary">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>Tax ({(taxRate * 100).toFixed(0)}%):</strong> ${tax.toFixed(2)}</p>
        <h4><strong>Total:</strong> ${total.toFixed(2)}</h4>
      </div>

      <button onClick={handlePrint} className="btn btn-success">
        Print Invoice
      </button>
    </div>
  );
}

export default Invoicer;
