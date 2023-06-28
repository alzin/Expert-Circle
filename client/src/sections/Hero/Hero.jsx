import React from "react";
import "./Hero.css";

const Hero = ({ handleSignupClick }) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome to Our AI Blogging Platform</h1>
      <p className="hero-description">
        Write, Generate, and Share Blogs with Ease
      </p>
      <button className="hero-button" onClick={handleSignupClick}>
        Get Started
      </button>
    </div>
  );
};

export default Hero;
