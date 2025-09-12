import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Actual-Logo.png";
import gsap from "gsap";

const Signinup = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  // refs
  const titleRef = useRef(null);
  const nameFieldRef = useRef(null);
  const underlineRef = useRef(null);
  const passwordLabelRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    // floating animation for all h4s
    gsap.utils.toArray("h4").forEach((h) => {
      gsap.to(h, {
        xPercent: "+=" + gsap.utils.random(-10, 10),
        yPercent: "+=" + gsap.utils.random(-20, 20),
        duration: gsap.utils.random(3, 7),
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  const handleSignIn = () => {
    setIsSignUp(false);
    if (nameFieldRef.current) nameFieldRef.current.style.maxHeight = "0";
    if (titleRef.current) titleRef.current.textContent = "Sign In";
    if (underlineRef.current)
      underlineRef.current.style.transform = "translateX(100%)";
    if (passwordLabelRef.current)
      passwordLabelRef.current.textContent = "Forgot Password?";
  };

  const handleSignUp = () => {
    setIsSignUp(true);
    if (nameFieldRef.current) nameFieldRef.current.style.maxHeight = "60px";
    if (titleRef.current) titleRef.current.textContent = "Sign Up";
    if (underlineRef.current)
      underlineRef.current.style.transform = "translateX(0%)";
    if (passwordLabelRef.current)
      passwordLabelRef.current.textContent = "Password Suggestions";
  };

  const generatePassword = (length = 12) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (isSignUp) {
      const newPassword = generatePassword(12);
      if (passwordInputRef.current) {
        passwordInputRef.current.value = newPassword;
      }
    } else {
      alert("Redirecting to Forgot Password page...");
      window.location.href = "/forgot-password";
    }
  };

  return (
    <div id="container">
      <header className="w-full">
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <Link id="goback-btn" to="/">
            Go Back
          </Link>
        </nav>
      </header>

      {/* floating h4 words */}
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

      {/* login box */}
      <div className="login-div">
        <h1 ref={titleRef} className="title">
          Sign Up
        </h1>
        <div ref={underlineRef} className="underline"></div>

        <form>
          <div className="input-group">
            <div ref={nameFieldRef} className="input-field namefield">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-at"></i>
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                ref={passwordInputRef}
                type="password"
                placeholder="Password"
              />
            </div>

            <p>
              <span ref={passwordLabelRef} className="password">
                Password Suggestions
              </span>{" "}
              <a href="/" onClick={handleLinkClick} id="suggestion-link">
                Click Here!
              </a>
            </p>
          </div>

          <div className="btn-field">
            <button
              type="button"
              className={`signupbtn ${isSignUp ? "" : "disable"}`}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`signinbtn ${!isSignUp ? "" : "disable"}`}
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signinup;
