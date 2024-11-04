// src/components/ColorCard.js
import React from 'react';
import { hexToRgb, hexToHsl } from '../utils/colorUtils';
import namer from 'color-namer';

const ColorCard = ({ color }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Color code copied to clipboard!");
  };

  const getColorName = (hex) => {
    const result = namer(hex);
    return result.ntc[0].name;
  };

  return (
    <div className="p-4 border rounded shadow-md" style={{ backgroundColor: color }}>
      <p className="text-white">HEX: {color}</p>
      <p className="text-white">RGB: {hexToRgb(color)}</p>
      <p className="text-white">HSL: {hexToHsl(color)}</p>
      <p className="text-white">Name: {getColorName(color)}</p>
      <button
        onClick={copyToClipboard}
        className="mt-2 px-2 py-1 bg-gray-800 text-white rounded"
      >
        Copy HEX
      </button>
    </div>
  );
};

export default ColorCard;