import React, { useState } from "react";

import Nav from "../../sections/Nav/Nav";
import Hero from "../../sections/Hero/Hero";
import Features from "../../sections/Features/Features";
import Pricing from "../../sections/Pricing/Pricing";
import Footer from "../../sections/Footer/Footer";
import Login from "../../components/Login/Login";
import Signup from "../../components/Singup/Singup";
import ContactUs from "../../sections/ContactUs/ContactUs";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <Nav
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />
      <Hero handleSignupClick={handleSignupClick} />
      <Features />
      <Pricing />
      <ContactUs />
      <Footer />
      {showSignup && <Signup handleCloseSingup={handleCloseSignup} />}
      {showLogin && <Login handleCloseLogin={handleCloseLogin} />}
    </div>
  );
};

export default LandingPage;
