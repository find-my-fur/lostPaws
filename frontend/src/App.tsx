import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Preferences from './pages/Preferences';
import PetPreferences from './pages/PetPreferences';
import Favorite from './pages/Favorites';
import 'tailwindcss';
import Navbar from './components/Navbar';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/PetPreferences' element={<PetPreferences />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
