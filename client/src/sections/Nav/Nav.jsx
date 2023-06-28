import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = ({ handleLoginClick, handleSignupClick }) => {
  const scrollTo = (section_id) => {
    const section = document.getElementById(section_id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home-section">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Articlo</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link onClick={() => scrollTo("features-section")}>Features</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo("pricing-section")}>Pricing</Link>
          </li>
          <li>
            <Link onClick={() => scrollTo("contact-section")}>Contact Us</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
          <button className="signup-button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
