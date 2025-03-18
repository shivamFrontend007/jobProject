import React from 'react';
import './Services.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-icon" loading='lazy'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
