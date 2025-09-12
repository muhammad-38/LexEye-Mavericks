import React from "react";
import Balance from "../assets/logo.png";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Middle from "../components/Middle";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
import useLandingAnimations from "../Hooks/useLandingAnimations"; // 👈 import the GSAP hook

function Home() {
  // 👇 run all your GSAP animations when this page loads
  useLandingAnimations();

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main" className="w-full">
            <img src={Balance} alt="Headphone" id="headphone" />
            <Section1 />
            <Section2 />
            <Middle />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>
          <Section6 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
