import React, { useState } from "react";
import Logo from "../assets/Actual-Logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5"; // close icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <Link id="goback-btn" to="/signinup">
            Get Started
          </Link>
          <RxHamburgerMenu
            id="hamburger"
            onClick={() => setIsOpen(true)}
          />
        </nav>

        <div id="slider" className={isOpen ? "open" : ""}>
          <IoClose
            id="slider-closer"
            onClick={() => setIsOpen(false)}
          />
          <div id="slider-links">
            <Link to="/signinup" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
            <Link to="/signinup" onClick={() => setIsOpen(false)}>
              BookMarks
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
