// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto select-none">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} CodeskStudio. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="React website"
            className="text-blue-500 hover:underline underline-offset-2 mx-1"
          >
            React
          </a>
          &amp;
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tailwind CSS website"
            className="text-green-500 hover:underline underline-offset-2 mx-1"
          >
            Tailwind CSS
          </a>
          |
          <a
            href="https://github.com/CodeskStudio/colorshare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ColorShare GitHub repository"
            className="text-yellow-500 hover:underline underline-offset-2 ml-1"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;