// components/SavedColors.jsx
import React from 'react';
import { ChevronDownIcon, TrashIcon } from 'lucide-react';
import { Menu } from '@headlessui/react';
import toast from 'react-hot-toast';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success(<span><strong>{text}</strong> copied to clipboard!</span>);
  }).catch((error) => {
    toast.error('Failed to copy to clipboard');
    console.error('Failed to copy:', error);
  });
};

export default function SavedColors({ savedColors, deleteAllColors, deleteSpecificColor, loadColor }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Saved Colors</h2>
        <button
          onClick={deleteAllColors}
          className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 ${savedColors.length < 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={savedColors.length < 1}
          aria-label="Delete all saved colors"
        >
          <TrashIcon className="h-4 w-4 mr-2" />
          Delete All
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {savedColors.length > 0 ? (
          savedColors.map((savedColor, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-20 rounded-md shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out hover:shadow-lg"
                style={{ backgroundColor: savedColor.toString("hex") }}
                onClick={() => loadColor(savedColor)}
                aria-label={`Load saved color ${savedColor.toString("hex")}`}
              ></div>
              
              <Menu as="div" className="absolute bottom-2 right-2">
                <Menu.Button
                  className="bg-gray-600 dark:bg-gray-700 rounded-full p-2 shadow-md"
                  aria-label="Options"
                >
                  <ChevronDownIcon className="h-4 w-4 text-white dark:text-gray-300" aria-hidden="true" />
                </Menu.Button>
                
                <Menu.Items className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-gray-100 dark:bg-gray-600' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                        onClick={() => copyToClipboard(savedColor.toString("hex"))}
                        aria-label="Copy HEX color code"
                      >
                        Copy HEX
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-gray-100 dark:bg-gray-600' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                        onClick={() => copyToClipboard(savedColor.toString("rgb"))}
                        aria-label="Copy RGB color code"
                      >
                        Copy RGB
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-gray-100 dark:bg-gray-600' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                        onClick={() => copyToClipboard(savedColor.toString("hsl"))}
                        aria-label="Copy HSL color code"
                      >
                        Copy HSL
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-gray-100 dark:bg-gray-600' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                        onClick={() => deleteSpecificColor(index)}
                        aria-label="Delete this color"
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          ))
        ) : (
          Array.from({ length: 7 }, (_, index) => (
            <div key={index} className="w-full h-20 rounded-md shadow-md flex items-center justify-center bg-gray-700 text-gray-500">
              {index + 1}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
