import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import "./Login.css";

const Login = ({ handleCloseLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      window.location.href = "/ask";
    } catch (error) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleCloseLogin}
      contentLabel="Login Modal"
      className="login-modal"
    >
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default Login;
