import React from "react";
import Protest from "../assets/Protest.jpg";
import Traffic from "../assets/Traffic-Police.jpg";
import Crime from "../assets/Crime.jpg";

const Section4 = () => {
  return (
    <>
      <div id="section4">
        <img src={Protest} alt="" srcset="" className="img1 radius" />
        <img src={Traffic} alt="" srcset="" className="img2 radius" />
        <img src={Crime} alt="" srcset="" className="img3 radius" />
      </div>
    </>
  );
};

export default Section4;
