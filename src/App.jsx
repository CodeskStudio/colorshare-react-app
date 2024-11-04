// src/App.js
import React, { useState, useEffect } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorCard from './components/ColorCard';
import Footer from './components/Footer';
import { getRandomColor } from './utils/colorUtils';

function App() {
  const [currentColor, setCurrentColor] = useState('#000000');


  useEffect(() => {
    const randomColor = getRandomColor();
    setCurrentColor(randomColor);
  }, []);

  // Check URL for color parameter on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const color = urlParams.get('color');
    if (color) {
      setCurrentColor(color);
    }
  }, []);

  const handleColorPick = (color) => setCurrentColor(color);

  const generateShareableLink = () => {
    const baseUrl = window.location.origin;
    const shareableUrl = `${baseUrl}?color=${currentColor}`;
    navigator.clipboard.writeText(shareableUrl);
    alert("Shareable link copied to clipboard!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">ColorShare</h1>
        <ColorPicker onColorPick={handleColorPick} defaultColor={currentColor} />
        <ColorCard color={currentColor} />
        <button
          onClick={generateShareableLink}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Copy Shareable Link
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;