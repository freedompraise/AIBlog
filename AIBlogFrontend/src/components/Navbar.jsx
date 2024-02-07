import React from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {
    faXTwitter,
    faGithub,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center h-28 bg-gray-800">
        <article className="flex mx-auto flex-row p-4">
        <div className="mr-32">
        {/* Home page icon */}
        <Link to="/" className="" >
        <FontAwesomeIcon icon={faHome} size="2x"/>
        </Link>
        </div>
        
        {/* Navigation links */}
        <div className=" sm:hidden lg:block space-x-8 mx-16">
          <Link to="/#link1">Home</Link>
          <Link to="/#link2">Contact</Link>
          <Link to="/#link3">Articles</Link>
          <Link to="/#link4">About</Link>
        </div>

        <div className="ml-32 space-x-8">
            <Link to="/" >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link to="/" >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link to="/" >
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </Link>
        </div>
        </article>
        

      {/* Navigation dropdown for small screens
      <button className="lg:hidden text-white focus:outline-none">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 01 1-1h12a1 1 0 11 0 2H4a1 1 0 01-1-1zM6 9a1 1 0 01 1-1h8a1 1 0 11 0 2H7a1 1 0 01-1-1zM9 13a1 1 0 01 1-1h4a1 1 0 11 0 2h-5a1 1 0 01-1-1z"
          />
        </svg>
      </button> */}
    </nav>
  );
};

export default Navbar;
