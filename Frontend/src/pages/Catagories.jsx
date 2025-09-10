import React from 'react'
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <>
    <div id="traffic">
        <div id="traffic-heading">
          <a href="./index.html"><img src="./images/Actual-Logo.png" alt="" class="logo" /></a>
            <h1>Categories</h1>
            <Link id="goback-btn" to='/'>Go Back</Link>
        </div>
        <div>
            <input type="text" placeholder="Search for categories..." id="search-bar"/>
        </div>
        <div id="traffic-content">
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/Traffic-Police.jpg" alt="" />
                    <div class="categories-name"><h3>TRAFFIC LAWS</h3></div>
                </a> 
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/Crime.jpg" alt="" />
                    <div class="categories-name"><h3>CRIMINAL LAWS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/Protest.jpg" alt="" />
                    <div class="categories-name"><h3>HUMAN RIGHTS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/narcotics.webp" alt="" />
                    <div class="categories-name"><h3>NARCOTICS LAWS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/property.web.webp" alt="" />
                    <div class="categories-name"><h3>PROPERTY LAWS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/labour.webp" alt="" />
                    <div class="categories-name"><h3>LABOUR LAWS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/cyber.webp" alt="" />
                    <div class="categories-name"><h3>CYBER LAWS</h3></div>
                </a>
            </div>
            <div class="categories">
                <a href="./traffic.html">
                    <img src="./images/family.webp" alt="" />
                    <div class="categories-name"><h3>FAMILY LAWS</h3></div>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Catagories