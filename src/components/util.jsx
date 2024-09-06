import { NavLink, useLocation } from "react-router-dom";
import { supabase } from "../services/supabaseClient";

export const navList = () => {
  const location = useLocation();

  return (
    <div className="flex space-x-4">
      {[
        { to: "/", name: "Home" },
        { to: "/contact", name: "Contact" },
        { to: "/about", name: "About" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={`${
            location.pathname === item.to ||
            location.pathname.startsWith(item.to + "/")
              ? "text-blue-500"
              : "text-black"
          }`}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export const mobileNavList = () => {
  const location = useLocation();

  return (
    <div className="mt-16 flex flex-col space-y-4">
      {[
        { to: "/", name: "Home" },
        { to: "/contact", name: "Contact" },
        { to: "/about", name: "About" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={`${
            location.pathname === item.to ||
            location.pathname.startsWith(item.to + "/")
              ? "text-blue-500 font-bold"
              : "text-black"
          }`}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

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

export const subscribeUser = async (email) => {
  try {
    const { data, error } = await supabase
      .from("Subscribers")
      .insert([{ email }]);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};
