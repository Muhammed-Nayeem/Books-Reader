import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarContext from "../../Context/Context";
import Navbar from "../Navbar/Navbar";
import { BoltIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-300 py-2">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center">
          {/* logo area */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <BoltIcon className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold pl-1 text-gray-800">BooksReader</span>
            </Link>
          </div>

          {/* menu area */}
          <NavbarContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
            <Navbar />
          </NavbarContext.Provider>
        </div>
      </div>
    </header>
  );
};

export default Header;
