import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/LostPawsLogo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-teal-500 p-4  fixed top-0 left-0 w-full p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">

  {/* Logo */}
  <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Lost Paws Logo" className="h-20" /> 
          </Link>
        </div>

        {/* Nav links */}
        <div>
          <Link to="/home" className="text-white px-4">Home</Link> 
          <Link to="/" className="text-white px-4">Login/Sign</Link> 
          <Link to="/about" className="text-white px-4">About</Link>
          <Link to="/contact" className="text-white px-4">Contact</Link>
          <Link to="/favorites" className="text-white px-4">Favorites</Link>
          <Link to="/PetPreferences" className="text-white px-4">Preferences</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
