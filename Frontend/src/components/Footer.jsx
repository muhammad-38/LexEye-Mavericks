import React from "react";
import Logo from "../assets/Actual-Logo.png";
import Insta from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <a href="index.html">
        <img src={Logo} alt="Logo" className="logo" />
      </a>
      <div className="social">
        <a href="#">
          <img src={Insta} alt="Instagram" />
        </a>
        <a href="#">
          <img src={Facebook} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
