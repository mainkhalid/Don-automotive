
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md px-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="w-10 h-10" />
          <p className="text-lg font-bold hidden md:block">Don Automotive</p>
        </Link>

        {/* Dropdown Toggle for Small Screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={assets.drop_down} alt="Menu" className="w-6 h-6" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:gap-6 md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center`}
        >
          <li className={`py-2 md:py-0 ${isActive('/') ? 'text-orange-500' : ''}`}>
            <Link
              to="/"
              className={`hover:text-orange-500 ${
                isActive('/') ? 'font-bold' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className={`py-2 md:py-0 ${isActive('/suvs') ? 'text-orange-500' : ''}`}>
            <Link
              to="/suvs"
              className={`hover:text-orange-500 ${
                isActive('/suvs') ? 'font-bold' : ''
              }`}
            >
              SUVs
            </Link>
          </li>
          <li className={`py-2 md:py-0 ${isActive('/hybrids') ? 'text-orange-500' : ''}`}>
            <Link
              to="/hybrids"
              className={`hover:text-orange-500 ${
                isActive('/hybrids') ? 'font-bold' : ''
              }`}
            >
              Hybrids
            </Link>
          </li>
          <li className={`py-2 md:py-0 ${isActive('/minivan') ? 'text-orange-500' : ''}`}>
            <Link
              to="/sports"
              className={`hover:text-orange-500 ${
                isActive('/sports') ? 'font-bold' : ''
              }`}
            >
              sporty
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
