import React from "react";
import Logo from "../assets/Actual-Logo.png"; // adjust path if needed

const Signinup = () => {
  return (
    <>
      <div id="container">
        <header className="w-full">
          <nav>
            <a href="index.html">
              <img src={Logo} alt="Logo" className="logo" />
            </a>
            <a href="index.html" id="goback-btn">Go Back</a>
          </nav>
        </header>

        <h4 id="login-h1">Verdict</h4>
        <h4 id="login-h2">Plaintiff</h4>
        <h4 id="login-h3">Jurisdiction</h4>
        <h4 id="login-h4">Defendant</h4>
        <h4 id="login-h5">Precedent</h4>
        <h4 id="login-h6">Statute</h4>
        <h4 id="login-h7">Tort</h4>
        <h4 id="login-h8">Liability</h4>
        <h4 id="login-h9">Arbitration</h4>
        <h4 id="login-h10">Mediation</h4>
        <h4 id="login-h11">Habeas Corpus</h4>
        <h4 id="login-h12">Subpoena</h4>
        <h4 id="login-h13">Indictment</h4>
        <h4 id="login-h14">Due Process</h4>
        <h4 id="login-h15">Affidavit</h4>
        <h4 id="login-h16">Injunction</h4>
        <h4 id="login-h17">Discovery</h4>
        <h4 id="login-h18">Deposition</h4>
        <h4 id="login-h19">Litigation</h4>
        <h4 id="login-h20">Contract</h4>

        <div className="login-div">
          <h1 className="title">Sign Up</h1>
          <div className="underline"></div>
          <form>
            <div className="input-group">
              <div className="input-field namefield">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-at"></i>
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p>
                <span className="password">Password Suggestions </span>
                <a href="#" id="suggestion-link"> Click Here!</a>
              </p>
            </div>
            <div className="btn-field">
              <button type="button" className="signupbtn">Sign Up</button>
              <button type="button" className="disable signinbtn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signinup;
