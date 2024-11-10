// components/ColorPicker.jsx
import React from 'react';
import { RgbaColorPicker } from 'react-colorful';

export default function ColorPicker({ color, setColor }) {
  return (
    <div className="flex-1" aria-label="Color Picker">
      <RgbaColorPicker
        color={color}
        onChange={setColor}
        aria-label="RGBA Color Picker"
      />
    </div>
  );
}