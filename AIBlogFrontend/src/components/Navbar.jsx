import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openNewsletter, setOpenNewsletter] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const toggleNewsletter = () => {
    setOpenNewsletter(!openNewsletter);
  };

  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          className={({ isActive }) =>
          ( isActive ? "text-blue-900" : "text-white"
    )}
          onClick = {toggleNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
          onClick = {toggleNav}
        >
          Contact
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
          onClick = {toggleNav}
        >
         Articles
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ( isActive ? "text-blue-900" : "text-white"
    )}
          onClick = {toggleNav}
        >
          About
        </NavLink>
      </>
    );
  };

  return (
    <header className="container border-b-32 h-28 border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-1">
        <div className="flex items-center justify-between">
            {/* Home button on left for small screens */}
            <button
              onClick={toggleNav}
              className={`block md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50 top-4 right-4 ${openNav? 'text-white' : 'text-black'}`}

            >
              <FontAwesomeIcon icon={openNav ? faTimes : faBars} />
            </button>  

            <NavLink to="/" className="text-2xl font-bold text-blue-500">
            <img src="/logo.png" alt="Elite Global AI" className="h-10" />
            </NavLink>
            
            <div className='flex justify-end ml-10'>
           <button onClick={toggleNewsletter} className='font-sans text-white p-1 bg-blue-700 text-xs mr-4'> SUBSCRIBE
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
