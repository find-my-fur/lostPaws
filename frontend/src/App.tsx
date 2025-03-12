import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import "tailwindcss";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
}

export default App;
