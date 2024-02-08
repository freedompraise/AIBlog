import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
         Articles
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-900" : ""
          }
        >
          About
        </NavLink>
      </>
    );
  };

  return (
    <header className="bg-gray-800 border-b-32 h-28 text-black border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            {/* Home button on left for small screens */}
            <NavLink
              to="/"
              className="fixed left-0 text-white top-0 p-4 md:hidden"
              aria-label="Home"
            >
              <FontAwesomeIcon icon={faHome} size="3x" />
            </NavLink>
            <button
              onClick={toggleNav}
              className={`block md:hidden p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50 absolute top-4 right-4 ${openNav? 'text-black' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={openNav ? faTimes : faBars} size="2x" />
            </button>
          </div>
          <nav className="md:flex h-58 space-x-4 hidden">
            {navList()}
          </nav>
        </div>
        <div
          className={`
            inset-0 fixed top-50 left-0 w-full h-screen bg-gray-800 bg-opacity-75 transition-all duration-300
            ${openNav ? 'block' : 'hidden'}
          `}
        >
          <div className="container bg-white mx-auto fixed ml-96 flex h-full">
          <ul className="flex flex-col space-y-4 px-4 mt-20 text-left">
            {navList()}
          </ul>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
