import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/omada.svg";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Οργάνωση",
    link: "/#",
  },
  {
    id: 2,
    name: "Δράσεις",
    link: "/#about",
  },
  {
    id: 3,
    name: "Α' Βοήθειες",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Αυτοπροστασία",
    link: "/#autoprostasia",
  },
  {
    id: 5,
    name: "Υποστηρικτές",
    link: "/#supporters",
  },

];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            target="_blank"
            href=""
            className="flex items-center gap-3"
          >
            <img src={Logo} alt="" className="w-20" />
            <h1 className="font-sans font-bold text-2xl ">OM.A.K</h1>


          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block z-10 block cursor-pointer px-3 py-1.5 text-xs mix-blend-difference md:px-5 md:py-3 md:text-base">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Eπικοινωνία</button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
