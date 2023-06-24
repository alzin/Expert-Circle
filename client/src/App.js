import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import ArticleContainer from "./components/ArticleContainer/ArticleContainer.jsx";
import Login from "./components/Login/Login.jsx";
import Singup from "./components/Singup/Singup.jsx";

function Navigation() {
  const location = useLocation();
  const showNavigation = location.pathname !== "/";

  return (
    <>
      {showNavigation && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
