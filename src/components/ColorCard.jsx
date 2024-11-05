// src/components/ColorCard.js
import React from 'react';
import fontColorContrast from 'font-color-contrast'
import { FaRegCopy } from "react-icons/fa";
import { rgbaToHex, hexToHsl, getRGBAString } from '../utils/colorUtils';
import namer from 'color-namer';
import chroma from "chroma-js";

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
    <div className="p-4 border rounded shadow-md" style={{ backgroundColor: getRGBAString(color), color: fontColorContrast(color)}}>
      <p>HEX: {chroma(color).hex()} <span><FaRegCopy /></span></p>
      <p>RGB: {getRGBAString(color)}</p>
      <p>HSL: {hexToHsl(color)}</p>
      <p>Name: {getColorName(color)}</p>
    </div>
  );
};

export default ColorCard;