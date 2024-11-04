// src/components/SavedColors.js
import React from 'react';
import ColorCard from './ColorCard';

const SavedColors = ({ savedColors }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {savedColors.map((color, index) => (
        <ColorCard key={index} color={color} />
      ))}
    </div>
  );
};

export default SavedColors;