import React from 'react'
import { Link } from "react-router-dom";

// Import images
import Logo from "../assets/Actual-Logo.png";
import TrafficPolice from "../assets/Traffic-Police.jpg";
import Crime from "../assets/Crime.jpg";
import Protest from "../assets/Protest.jpg";
import Narcotics from "../assets/narcotics.webp";
import Property from "../assets/property.web.webp";
import Labour from "../assets/labour.webp";
import Cyber from "../assets/cyber.webp";
import Family from "../assets/family.webp";



const Catagories = () => {
  return (
    <>
      <div id="traffic">
        <div id="traffic-heading">
          <a href="./index.html">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <h1>Categories</h1>
          <Link id="goback-btn" to='/'>Go Back</Link>
        </div>

        <div>
          <input type="text" placeholder="Search for categories..." id="search-bar" />
        </div>

        <div id="traffic-content">
          <div className="categories">
            <a href="./traffic.html">
              <img src={TrafficPolice} alt="Traffic Police" />
              <div className="categories-name"><h3>TRAFFIC LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Crime} alt="Crime" />
              <div className="categories-name"><h3>CRIMINAL LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Protest} alt="Protest" />
              <div className="categories-name"><h3>HUMAN RIGHTS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Narcotics} alt="Narcotics" />
              <div className="categories-name"><h3>NARCOTICS LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Property} alt="Property" />
              <div className="categories-name"><h3>PROPERTY LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Labour} alt="Labour" />
              <div className="categories-name"><h3>LABOUR LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Cyber} alt="Cyber" />
              <div className="categories-name"><h3>CYBER LAWS</h3></div>
            </a>
          </div>

          <div className="categories">
            <a href="./traffic.html">
              <img src={Family} alt="Family" />
              <div className="categories-name"><h3>FAMILY LAWS</h3></div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catagories;
