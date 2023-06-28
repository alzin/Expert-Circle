import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact-section">
      <div class="contact-section">
        <div class="contact-image"></div>
        <div class="contact-details">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss more...</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
