// src/components/ColorPicker.js
import React, { useEffect, useState } from 'react';
import { HexAlphaColorPicker } from "react-colorful";

const ColorPicker = ({ onColorPick, defaultColor }) => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    console.log(e);
    setColor(e);
    onColorPick(e);
  };

  useEffect(() => {
    if (color !== defaultColor) {
      setColor(defaultColor);
    }
  }, [defaultColor, color]);
  

  return (
    <div className="p-4">
      <HexAlphaColorPicker color={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;