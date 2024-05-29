import React from 'react';
import { NavLink } from 'react-router-dom';
import { getFooterHeight } from '../services/util';

const Navbar = () => {

  const scrollToFooter = () => {
    const footerHeight = getFooterHeight(); 
    const scrollHeight = document.body.scrollHeight - footerHeight; 
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  };  

  const handleClick = () => {
    scrollToFooter();
  };

  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          className={({ isActive }) =>
          ( isActive ? "text-blue-900" : "text-white"
    )}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
        >
          Contact
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
        >
         Articles
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
        >
          About
        </NavLink>
      </>
    );
  };

  return (
    <header className="border-b-2 h-28 font-DM">
      <div className="container mx-auto py-4 px-4 md:px-1">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-blue-500">
            <img src="/logo.png" alt="Elite Global AI" className="h-10" />
          </NavLink>

          <nav className="hidden md:flex h-58 space-x-4">
            {navList()}
          </nav>

          <div className="flex justify-end ml-10">
            <button onClick={handleClick} className="font-sans rounded-sm text-white p-1 bg-blue-700 text-xs mr-4">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <nav className="md:hidden flex flex-col items-center">
          {navList()}
        </nav>

        <hr className="border-b border-gray-300 mt-2 h-0" />
      </div>
    </header>
  );
};

export default Navbar;
