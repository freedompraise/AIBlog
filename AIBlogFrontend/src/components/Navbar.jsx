import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { getFooterHeight } from '../services/util';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

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

  const navList = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-900" : "text-white")}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "text-blue-900" : "text-white")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/articles"
        className={({ isActive }) => (isActive ? "text-blue-900" : "text-white")}
      >
        Articles
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-blue-900" : "text-white")}
      >
        About
      </NavLink>
    </>
  );

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

          <button
            onClick={toggleNav}
            className="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50"
          >
            <FontAwesomeIcon icon={openNav ? faTimes : faBars} />
          </button>
        </div>

        {openNav && (
          <div className="fixed inset-0 z-40">
            <div className="fixed inset-0 bg-black opacity-50" onClick={toggleNav}></div>
            <nav className="fixed top-0 left-0 w-1/2 h-full bg-white flex flex-col items-start p-4 space-y-2 z-50">
              {navList()}
            </nav>
          </div>
        )}

        <hr className="border-b border-gray-300 mt-2 h-0" />
      </div>
    </header>
  );
};

export default Navbar;
