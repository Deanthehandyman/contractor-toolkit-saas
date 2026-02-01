import React from 'react';
    
    function Invoicer({ estimateItems = [], estimateTotal = 0 }) {
      // In a real app, you'd pass estimate data as props or context
      const items = estimateItems.length > 0 ? estimateItems : [{ description: 'Sample Item', quantity: 1, price: 100 }];
      const total = estimateTotal > 0 ? estimateTotal : 100;
    
      return (
        <div>
          <h3>Invoice</h3>
          {items.map((item, index) => (
            <div key={index}>
              <span>{item.description} - </span>
              <span>{item.quantity} x ${parseFloat(item.price).toFixed(2)}</span>
            </div>
          ))}
          <h4>Total: ${parseFloat(total).toFixed(2)}</h4>
          
          {/* Placeholder for PayPal Pay Now button */}
          <div style={{marginTop: '20px', border: '1px solid #ccc', padding: '10px', display: 'inline-block'}}>
            <span>PayPal Pay Now Button Placeholder</span>
            <button disabled>Pay Now</button>
          </div>
        </div>
      );
    }
    
    export default Invoicer;
    
