import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainContainer from "./pages/MainContainer/MainContainer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ask" element={<MainContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
