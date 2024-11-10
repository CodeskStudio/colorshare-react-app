// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-4 mt-auto select-none">
  <div className="container mx-auto text-center">
    <p className="text-sm">&copy; {new Date().getFullYear()} CodeskStudio. All rights reserved.</p>
    <p className="text-xs mt-2">
      Built with
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline underline-offset-2 mx-1"
      >
        React
      </a>
      & 
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:underline underline-offset-2 mx-1"
      >
        Tailwind CSS
      </a>
      |
      <a
        href="https://github.com/CodeskStudio/colorshare"
        className="text-yellow-500 hover:underline underline-offset-2 ml-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </p>
  </div>
</footer>

  );
};

export default Footer;