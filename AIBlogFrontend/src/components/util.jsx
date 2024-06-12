import { NavLink } from "react-router-dom";

export const navList = () => (
  <div className="flex space-x-4">
    {[
      { to: "/", name: "Home" },
      { to: "/contact", name: "Contact" },
      { to: "/articles", name: "Articles" },
      { to: "/about", name: "About" },
    ].map((navItem, index) => (
      <div key={index}>
        <NavLink
          to={navItem.to}
          activeClassName="text-blue-500 font-bold"
          className="text-black"
        >
          {navItem.name}
        </NavLink>
      </div>
    ))}
  </div>
);

export const mobileNavList = () => (
  <div className="mt-16 flex flex-col space-y-4">
    {[
      { to: "/", name: "Home" },
      { to: "/contact", name: "Contact" },
      { to: "/articles", name: "Articles" },
      { to: "/about", name: "About" },
    ].map((navItem, index) => (
      <div key={index}>
        <NavLink
          to={navItem.to}
          activeClassName="text-blue-500 font-bold"
          className="text-black"
        >
          {navItem.name}
        </NavLink>
      </div>
    ))}
  </div>
);

const getFooterHeight = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    return footerElement.offsetHeight;
  } else {
    return 0;
  }
};

export const scrollToFooter = () => {
  const footerHeight = getFooterHeight();
  const scrollHeight = document.body.scrollHeight - footerHeight;
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth",
  });
};
