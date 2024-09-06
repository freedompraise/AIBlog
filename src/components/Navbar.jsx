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

  const handleSubscribe = () => {
    scrollToFooter();
  };

  return (
    <header className="h-14 px-4 lg:px-56">
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-blue-500 lg:mr-auto"
            >
              <img
                src="/logo.png"
                alt="Elite Global AI"
                className="h-10 lg:h-12"
              />
            </NavLink>
            <button
              onClick={toggleNav}
              className="md:hidden p-2 ml-2 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-300 z-50"
            >
              <FontAwesomeIcon icon={openNav ? faTimes : faBars} />
            </button>
          </div>

          <nav className="hidden md:flex justify-center flex-1">
            {navList()}
          </nav>
          <div className="flex gap-4">
            <button
              onClick={handleSubscribe}
              className="font-bold font-mono bg-indigo-500 hover:bg-blue-700 py-2 px-4 rounded-md focus:outline-none focus:bg-blue-700"
            >
              Subscribe
            </button>
            <button
              className="font-bold font-mono bg-gray-100 hover:bg-gray-300 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-700"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </button>
          </div>
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
