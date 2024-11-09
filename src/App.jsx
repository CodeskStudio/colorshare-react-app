// App.jsx
import React, { useState, useEffect } from 'react';
import { PlusIcon, ShareIcon } from 'lucide-react';
import ColorPicker from './components/ColorPicker';
import DarkModeToggle from './components/DarkModeToggle';
import ColorCode from './components/ColorCode';
import SavedColors from './components/SavedColors';
import namer from 'color-namer';
import { CColor, randomColor } from './utils/colorUtils';
import Footer from './components/Footer';

export default function App() {
  const [color, setColor] = useState({ r: 255, g: 0, b: 0, a: 1 });
  const [savedColors, setSavedColors] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const [loadedLocalStorage, setLoadedLocalStorage] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  // Save "saved colors"
  useEffect(() => {
    if (!loadedLocalStorage) {
      return;
    }
    localStorage.setItem('savedColors', JSON.stringify(savedColors));
  }, [savedColors]);

  // Load "saved colors"
  useEffect(() => {
  
    const savedItems = localStorage.getItem('savedColors');
    if (savedItems) {
      const tempColors = JSON.parse(savedItems);
  
      // Map each element to create a new array of CColor instances
      const loadedColors = tempColors.map(
        (element) => new CColor(element.r, element.g, element.b, element.a)
      );
  
      // Set the entire array once
      setSavedColors(loadedColors);
    }
  
    setLoadedLocalStorage(true);
  }, []);

  useEffect(() => {
    // get current url to get color from query string
    // const url = new URL(window.location.href);
    // const params = url.searchParams;
    // const getColor = params.get('color');

    const getColor = localStorage.getItem('color');
    if (getColor) {
      const [r, g, b, a] = getColor.split(',').map((c) => parseInt(c));
      setColor({ r, g, b, a });
    } else {
      const { r, g, b, a } = randomColor();
      setColor({ r, g, b, a });
    }

  }, []);

  const cColor = new CColor(color.r, color.g, color.b, color.a);

  const saveColor = () => {
    setSavedColors([...savedColors, cColor]);
  };

  const shareColor = () => {
    navigator.share({
      title: 'ColorShare',
      text: `Color: ${cColor.toHex()}`,
      url: window.location.href,
    });
  }

  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900`}>
      <div className=" py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 select-none">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🎨 ColorShare</h1>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="p-6 rounded-lg mt-5" >
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

          <SavedColors savedColors={savedColors} />
        </div>
      </div>
      <Footer />
    </div>
  );
}