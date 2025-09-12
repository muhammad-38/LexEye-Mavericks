import React from "react";
import Logo from "../assets/Actual-Logo.png";
import { Link } from "react-router";

const Laws = () => {
  return (
    <>
      <div id="traffic">
        <div id="traffic-heading">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <h1>Traffic</h1>
          <Link id="goback-btn" to="/categories">
            Categories
          </Link>
        </div>

        <div>
          <input type="text" placeholder="Search for laws..." id="search-bar" />
        </div>

        <div id="traffic-content">
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>

          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>

          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>

          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>

          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>

          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laws;
