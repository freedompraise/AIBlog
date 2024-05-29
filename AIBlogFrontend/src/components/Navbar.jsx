import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    <header className="container border-b-32 h-28 border-gray-200 font-DM">
      <div className="container mx-auto py-4 px-1">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-blue-500">
            <img src="/logo.png" alt="Elite Global AI" className="h-10" />
          </NavLink>
          
          <div className='flex justify-end ml-10'>
            <button onClick={handleClick} className='font-sans rounded-sm text-white p-1 bg-blue-700 text-xs mr-4'>
              SUBSCRIBE
            </button> 
          </div>

          <nav className="flex h-58 space-x-4">
            {navList()}
          </nav>
        </div>
        <hr className="border-b border-gray-300 mt-2 h-0 px-4" />
        <div className="container max-width-[400px] justify-center flex flex-grow mt-4 w-full text-white grid grid-cols-4 mx-10 text-2xl">
          <a href='https://www.facebook.com/profile.php?id=61555984266860'>
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
