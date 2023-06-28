import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="pricing-plan">Basic</h3>
            <p className="pricing-price">FREE</p>
            <ul className="pricing-features">
              <li>
                <span></span>
                Access to the core features of the platform, including automated
                text and image generation.
              </li>
              <li>
                <span></span>
                Limited monthly usage quota for content generation.
              </li>
              <li>
                <span></span>
                Basic customer support.
              </li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-plan">Pro</h3>
            <p className="pricing-price">FREE</p>
            <ul className="pricing-features">
              <li>
                <span></span>
                Unlock advanced features and functionalities for enhanced
                content creation.
              </li>
              <li>
                <span></span>
                Increased monthly usage quota for content generation.
              </li>
              <li>
                <span></span>
                Priority customer support for faster assistance.
              </li>
              <li>
                <span></span>
                Access to premium templates and design options.
              </li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-plan">Premium</h3>
            <p className="pricing-price">FREE</p>
            <ul className="pricing-features">
              <li>
                <span></span>
                Full access to all platform features and tools, providing the
                ultimate content creation experience.
              </li>
              <li>
                <span></span>
                Unlimited monthly usage quota for content generation.
              </li>
              <li>
                <span></span>
                Premium customer support with dedicated account manager.
              </li>
              <li>
                <span></span>
                Exclusive access to premium resources, such as advanced AI
                algorithms and cutting-edge image libraries.
              </li>
              <li>
                <span></span>
                Early access to new features and updates.
              </li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
