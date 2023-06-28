import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features-section">
      <div className="features-container">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3 className="feature-title">Instant Content Generation</h3>
            <p className="feature-description">
              Generate text and images automatically, saving time and effort in
              creating engaging blog posts or articles.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-mobile-alt"></i>
            <h3 className="feature-title">Rich Media Integration</h3>
            <p className="feature-description">
              Easily incorporate multimedia elements like videos, infographics,
              and charts into your content to enhance its visual appeal and
              effectiveness.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-cogs"></i>
            <h3 className="feature-title">Collaboration and Feedback</h3>
            <p className="feature-description">
              Enable seamless collaboration with other writers, allowing for
              real-time feedback, suggestions, and revisions to improve the
              quality of your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
