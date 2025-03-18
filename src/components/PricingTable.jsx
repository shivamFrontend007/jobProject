import React from 'react';
import './Prices.css';

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="pricing-card">
        <h2>Basic Plan</h2>
        <p>₹599.9 / month</p>
        <button>Choose Plan</button>
      </div>
      <div className="pricing-card">
        <h2>Advance Plan</h2>
        <p>₹999.9 / month</p>
        <button>Choose Plan</button>
      </div>
      <div className="pricing-card">
        <h2>Enterprise Plan</h2>
        <p>₹1999.9 / month</p>
        <button>Choose Plan</button>
      </div>
    </div>
  );
};

export default PricingTable;
