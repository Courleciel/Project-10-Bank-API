// src/components/FeatureItem.js
import React from 'react';
import './FeatureItem.css'; // Import du CSS pour le composant FeatureItem

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={title} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
