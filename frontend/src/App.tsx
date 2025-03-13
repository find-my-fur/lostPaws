import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Preferences from './pages/Preferences';
import PetPreferences from './pages/PetPreferences';
import Favorite from './pages/Favorites';
import 'tailwindcss';
import Navbar from './components/Navbar';

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
      </Routes>
    </Router>
  );
}

export default App;
