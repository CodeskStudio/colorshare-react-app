// components/ColorCode.jsx
import React from 'react';
import { ClipboardIcon } from 'lucide-react';

export default function ColorCode({ label, value }) {
  // Function to copy color code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      console.log(`${label} copied to clipboard: ${value}`); //todo: replace with toast notification
    }).catch((error) => {
      console.error('Failed to copy:', error); //todo: replace with toast notification
    });
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md p-2">
      <span className="font-medium text-gray-700 dark:text-gray-200">{label}:</span>
      <div className="flex items-center">
        <span className="mr-2 text-gray-700 dark:text-gray-200">{value}</span>
        <button
          onClick={copyToClipboard}
          aria-label={`Copy ${label} code to clipboard`}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <ClipboardIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
