import React, { useState } from 'react';
    
    function Estimator() {
      const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);
      const [total, setTotal] = useState(0);
    
      const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
        calculateTotal(newItems);
      };
    
      const addItem = () => {
        setItems([...items, { description: '', quantity: 1, price: 0 }]);
      };
    
      const calculateTotal = (currentItems) => {
        let sum = 0;
        currentItems.forEach(item => {
          sum += (parseFloat(item.quantity) * parseFloat(item.price));
        });
        setTotal(sum);
      };
    
      return (
        <div>
          <h3>Estimator</h3>
          {items.map((item, index) => (
            <div key={index}>
              <input 
                type="text" 
                placeholder="Description" 
                value={item.description} 
                onChange={(e) => handleItemChange(index, 'description', e.target.value)} 
              />
              <input 
                type="number" 
                placeholder="Quantity" 
                value={item.quantity} 
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} 
                min="0"
              />
              <input 
                type="number" 
                placeholder="Price" 
                value={item.price} 
                onChange={(e) => handleItemChange(index, 'price', e.target.value)} 
                min="0"
                step="0.01"
              />
            </div>
          ))}
          <button onClick={addItem}>Add Item</button>
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
      );
    }
    
    export default Estimator;
    
