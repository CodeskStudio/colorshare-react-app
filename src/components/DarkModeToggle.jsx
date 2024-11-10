// components/DarkModeToggle.jsx
import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', !darkMode);
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}