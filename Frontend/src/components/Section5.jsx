import React from "react";
import Protest from "../assets/Protest.jpg";
import Traffic from "../assets/Traffic-Police.jpg";
import Crime from "../assets/Crime.jpg";
const Section5 = () => {
  return (
    <>
      <div id="section5">
        <h2 className="heading">Top Categories</h2>
        <div className="product-section">
          <div className="product">
            <img src={Protest} alt="" />
            <div className="name">
              <h3>The Constitution of Pakistan, 1973</h3>
            </div>
          </div>
          <div className="product">
            <img src={Traffic} alt="" />
            <div className="name">
              <h3>Pakistan Penal Code, 1860</h3>
            </div>
          </div>
          <div className="product">
            <img src={Crime} alt="" />
            <div className="name">
              <h3>Code of Criminal Procedure, 1898</h3>
            </div>
          </div>
        </div>
        <button>
          <a href="./pages/Categories.jsx">Go To Categories</a>
        </button>
      </div>
    </>
  );
};

export default Section5;
