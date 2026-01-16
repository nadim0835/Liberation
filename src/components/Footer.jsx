import React, { useState, useEffect } from 'react';
import { FaFlag, FaHeart, FaClock } from 'react-icons/fa';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-red-800 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left - Copyright */}
          <div className="mb-3 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <FaFlag className="text-yellow-400 mr-2" />
              <span className="font-bold">Liberation War Archive</span>
            </div>
            <p className="text-red-200 text-sm mt-1">
              © {new Date().getFullYear()} বাংলাদেশের মুক্তিযুদ্ধের ইতিহাস
            </p>
          </div>

          {/* Right - Time */}
          <div className="flex items-center">
            <FaClock className="text-yellow-400 mr-2" />
            <span className="font-mono">
              {currentTime.toLocaleTimeString('bn-BD', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-4 pt-3 border-t border-red-700">
          <p className="text-red-200 text-sm flex items-center justify-center">
            <FaHeart className="text-red-400 mx-1" /> মুক্তিযুদ্ধের স্মৃতি সংরক্ষণে নিবেদিত
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;