import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFileAlt, FaMicrophone, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-white text-red-700 rounded-lg flex items-center justify-center font-bold text-xl">
              লা
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold">Liberation War Archive</h1>
              <p className="text-xs text-red-200">বাংলাদেশের মুক্তিযুদ্ধের ইতিহাস</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center hover:text-red-200">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/documents" className="flex items-center hover:text-red-200">
              <FaFileAlt className="mr-2" /> Documents
            </Link>
            <Link to="/interviews" className="flex items-center hover:text-red-200">
              <FaMicrophone className="mr-2" /> Interviews
            </Link>
            <Link to="/gallery" className="flex items-center hover:text-red-200">
              <FaImages className="mr-2" /> Gallery
            </Link>
            <Link to="/contact" className="flex items-center hover:text-red-200">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-red-800 border-t">
            <Link to="/" className="flex items-center py-4 px-6 hover:bg-red-900" onClick={() => setMenuOpen(false)}>
              <FaHome className="mr-3" /> Home
            </Link>
            <Link to="/documents" className="flex items-center py-4 px-6 hover:bg-red-900" onClick={() => setMenuOpen(false)}>
              <FaFileAlt className="mr-3" /> Documents
            </Link>
            <Link to="/interviews" className="flex items-center py-4 px-6 hover:bg-red-900" onClick={() => setMenuOpen(false)}>
              <FaMicrophone className="mr-3" /> Interviews
            </Link>
            <Link to="/gallery" className="flex items-center py-4 px-6 hover:bg-red-900" onClick={() => setMenuOpen(false)}>
              <FaImages className="mr-3" /> Gallery
            </Link>
            <Link to="/contact" className="flex items-center py-4 px-6 hover:bg-red-900" onClick={() => setMenuOpen(false)}>
              <FaEnvelope className="mr-3" /> Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;