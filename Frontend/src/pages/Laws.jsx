import React from "react";
import Logo from "../assets/Actual-Logo.png";

const Laws = () => {
  return (
    <>
      <div id="traffic">
        <div id="traffic-heading">
          <a href="./index.html">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <h1>Traffic</h1>
          <a id="goback-btn" href="./categories.html">
            Categories
          </a>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search for laws..."
            id="search-bar"
          />
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
