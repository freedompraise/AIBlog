import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
          className={({ isActive }) =>
          ( isActive ? "text-blue-900" : ""
    )}
          onClick = {toggleNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : ""
    )}
          onClick = {toggleNav}
        >
          Contact
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : ""
    )}
          onClick = {toggleNav}
        >
         Articles
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : ""
    )}
          onClick = {toggleNav}
        >
          About
        </NavLink>
      </>
    );
  };

  return (
    <header className="container border-b-32 h-32 text-black border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-1">
        <div className="flex items-center justify-between">
            {/* Home button on left for small screens */}
            <NavLink
              to="/"
              className="left-0 text-white top-0 p-4 md:hidden"
              aria-label="Home"
            >
              <FontAwesomeIcon icon={faDoorOpen} size="2x" />
            </NavLink>
            <div className='flex justify-end'>
            <button
              onClick={toggleNav}
              className={`block md:hidden p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50 top-4 right-4 ${openNav? 'text-black' : 'text-white'}`}

            >
              <FontAwesomeIcon icon={openNav ? faTimes : faBars} size="2x" />
            </button>           
          </div>
          <nav onClick={toggleNav} className="md:flex h-58 space-x-4 hidden">
            {navList()}
          </nav>
        </div>
        <div
          className={`
            inset-0 fixed top-50 left-0 w-1/2 h-screen bg-gray-800 bg-opacity-75 transition-all duration-300
            ${openNav ? 'block' : 'hidden'}
          `}
        >
          <div className="container bg-white w-1/2 right-0 mx-auto fixed flex h-full">
          <ul className="flex flex-col space-y-2 px-2 mt-20 text-left">
            {navList()}
          </ul>
        </div>
        </div>
        <hr className="border-b border-gray-300 mt-2 mt h-0 px-4" />
        <div className="container max-width-[400px] justify-center flex flex-grow mt-4 w-full text-white grid grid-cols-4 mx-10 text-2xl">
          <a href='https://www.facebook.com/profile.php?id=61555984266860' >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://x.com/EliteglobalAI?t=gqPw7vEh43XQNoIXYuz_VA&s=09'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://www.instagram.com/eliteglobalai_?igsh=MWdpcm96Y202M3U3OQ=='>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com/company/elite-global-ai/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
            </div>
      </div>
    </header>
  );
};

export default Navbar;
