// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">ANU Young Ballers</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/admin" className="text-white hover:underline">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;