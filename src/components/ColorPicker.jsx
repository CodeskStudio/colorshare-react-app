// src/components/ColorPicker.js
import React, { useEffect, useState } from 'react';
import { RgbaColorPicker } from "react-colorful";

const ColorPicker = ({ onColorPick, defaultColor }) => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1.0 });

  const handleColorChange = (e) => {
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
      <RgbaColorPicker color={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;