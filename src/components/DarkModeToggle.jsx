// components/DarkModeToggle.jsx
import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  // Toggle function for dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode)
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" /> // Icon hidden from screen readers
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
