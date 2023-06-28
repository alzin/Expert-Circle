import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const scrollTo = (section_id) => {
    const section = document.getElementById(section_id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
            alt="Logo"
          />
          <h3 className="footer-title">Articlo</h3>
        </div>
        <div className="footer-links">
          <ul className="footer-nav">
            <li>
              <Link onClick={() => scrollTo("home-section")}>Home</Link>
            </li>
            <li>
              <Link onClick={() => scrollTo("features-section")}>Features</Link>
            </li>
            <li>
              <Link onClick={() => scrollTo("pricing-section")}>Pricing</Link>
            </li>
            <li>
              <Link onClick={() => scrollTo("contact-section")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Articlo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
