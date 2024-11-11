// App.jsx
import React, { useState, useEffect } from 'react';
import { PlusIcon, ShareIcon } from 'lucide-react';
import ColorPicker from './components/ColorPicker';
import DarkModeToggle from './components/DarkModeToggle';
import ColorCode from './components/ColorCode';
import SavedColors from './components/SavedColors';
import namer from 'color-namer';
import { CColor } from './utils/colorUtils';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

export default function App() {
  // State declarations
  const [color, setColor] = useState({ r: 255, g: 0, b: 0, a: 1 }); // Current color object
  const [savedColors, setSavedColors] = useState([]); // List of saved colors
  const [darkMode, setDarkMode] = useState(true); // Dark mode status
  const [loadedLocalStorage, setLoadedLocalStorage] = useState(false); // To prevent premature saving during initial load

  // Load dark mode preference from local storage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  // Update document class based on dark mode setting
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Save savedColors to localStorage whenever it changes
  useEffect(() => {
    if (!loadedLocalStorage) return; // Skip saving on initial load
    localStorage.setItem('savedColors', JSON.stringify(savedColors));
  }, [savedColors]);

  // Load saved colors from local storage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('savedColors');
    if (savedItems) {
      const tempColors = JSON.parse(savedItems);
      const loadedColors = tempColors.map(
        (element) => new CColor(element.r, element.g, element.b, element.a)
      );
      setSavedColors(loadedColors);
    }
    setLoadedLocalStorage(true); // Set flag to allow future saves
  }, []);

  // Set initial color from URL query parameter or generate a random color
  useEffect(() => {
    const url = new URL(window.location.href);
    const urlColor = url.searchParams.get('hex'); // Example format: https://example.com?hex=ff0000
    if (urlColor) {
      const { r, g, b, a } = CColor.fromHex(urlColor);
      setColor({ r, g, b, a });
    } else {
      const { r, g, b, a } = CColor.random();
      setColor({ r, g, b, a });
    }
  }, []);

  const cColor = new CColor(color.r, color.g, color.b, color.a); // Create CColor instance for easier color management

  // Add current color to saved colors
  const saveColor = () => {
    setSavedColors([...savedColors, cColor]);
  };

  // Delete all saved colors
  const deleteAllColors = () => {
    localStorage.removeItem('savedColors');
    setSavedColors([]);
  };

  // Delete a specific color by index
  const deleteSpecificColor = (index) => {
    const newSavedColors = savedColors.filter((_, i) => i !== index);
    setSavedColors(newSavedColors);
    localStorage.setItem('savedColors', JSON.stringify(newSavedColors));
  };

  // Load a color from saved colors
  const loadColor = (color) => {
    setColor({ r: color.r, g: color.g, b: color.b, a: color.a });
  };

  // Share the color through the Web Share API or copy the URL to clipboard
  const shareColor = () => {
    const shareData = {
      title: 'ColorShare',
      text: `Color: ${cColor.toHex()}, RGB: ${cColor.toString("rgb")}, HSL: ${cColor.toString("hsl")}, Name: ${namer(cColor.toString("rgb")).ntc[0]?.name || 'Unknown'}`,
      url: `${window.location.origin}?hex=${cColor.toHex()}`
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900`}>
      <div className="py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 select-none">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🎨 ColorShare</h1>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="p-6 rounded-lg mt-5">
                <ColorPicker color={color} setColor={setColor} />
                <div className="w-full h-14 mt-5 rounded-md shadow-md" style={{ backgroundColor: cColor.toHex() }}></div>
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Color Codes</h2>
                <div className="space-y-4">
                  <ColorCode label="HEX" value={cColor.toHex()} />
                  <ColorCode label="RGB" value={cColor.toString("rgb")} />
                  <ColorCode label="HSL" value={cColor.toString("hsl")} />
                  <ColorCode label="Name" value={namer(cColor.toString("rgb")).ntc[0]?.name || 'Unknown'} />
                </div>

                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={saveColor}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Save Color
                  </button>
                  <button
                    onClick={shareColor}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <ShareIcon className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <SavedColors
            savedColors={savedColors}
            deleteAllColors={deleteAllColors}
            deleteSpecificColor={deleteSpecificColor}
            loadColor={loadColor}
          />
        </div>
      </div>

      {darkMode ? (
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      ) : (
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      )}
      
      <Footer />
    </div>
  );
}