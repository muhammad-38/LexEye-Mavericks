import React from "react";
import Logo from "../assets/Actual-Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="w-full">
        <nav>
          <Link to='/'>
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <Link id="goback-btn" to='/signinup'>Get Started</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
