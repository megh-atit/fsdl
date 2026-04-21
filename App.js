import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav">
        <h2 className="logo">MyApp</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;