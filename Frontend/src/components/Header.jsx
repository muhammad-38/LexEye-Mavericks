import React from "react";
import Logo from "../assets/Actual-Logo.png";
const Header = () => {
  return (
    <>
      <header className="w-full">
        <nav>
          <a href="">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <a href=".pages/signinup.jsx" id="goback-btn">
            Get Started
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
