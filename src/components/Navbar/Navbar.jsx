import React, { useContext } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import NavbarContext from "../../Context/Context";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useContext(NavbarContext);

  return (
    <nav>
      <ul className={`md:flex right-0 w-full absolute md:static duration-500 ${isMenuOpen ? "top-10" : "-top-40"} bg-gray-300 py-3 px-5 md:px-0`}>
        <li className="md:ml-8">
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li className="md:ml-8">
          <ActiveLink to="/books">Books</ActiveLink>
        </li>
        <li className="md:ml-8">
          <ActiveLink to="/about">About</ActiveLink>
        </li>
      </ul>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <span>
          {isMenuOpen === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-700 cursor-pointer" />
          ) : (
            <Bars3BottomRightIcon className="h-6 w-6 text-blue-700 cursor-pointer" />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
