import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navList, mobileNavList } from "./util";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleClick = () => {
    scrollToFooter();
  };

  return (
    <header className="h-28 px-4 lg:px-8">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleNav}
            className="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50"
          >
            <FontAwesomeIcon icon={openNav ? faTimes : faBars} />
          </button>

          <NavLink to="/" className="text-2xl font-bold text-blue-500">
            <img src="/logo.png" alt="Elite Global AI" className="h-10" />
          </NavLink>
          <nav className="hidden md:flex justify-center flex-1">
            {navList()}
          </nav>
          <button
            onClick={handleClick}
            className="font-sans rounded-sm text-white p-1 lg:p-2 bg-blue-700 text-xs mr-4"
          >
            SUBSCRIBE
          </button>
        </div>

        {openNav && (
          <div className="fixed inset-0 z-40">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={toggleNav}
            ></div>
            <nav className="fixed top-0 left-0 w-1/2 h-full bg-white flex flex-col items-start p-4 space-y-2 z-50">
              {mobileNavList()}
            </nav>
          </div>
        )}

        <hr className="border-b border-gray-300 mt-2 h-0" />
      </div>
    </header>
  );
};

export default Navbar;
