import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'; // Import 'Routes'
import './App.css';
import './AppTwo.css';
import './ContactMe.css'
import Arrow from './component/MainPage.jsx';
import Profiles from './component/Profiles.jsx';
import ContactMe from './component/ContactMe.jsx';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <Router>
    <div className={`container ${isActive ? 'active' : ''}`}>
      <Routes>
        <Route path="/" element={<Arrow toggleMenu={toggleMenu} />} />
        <Route path="/my-profiles" element={<Profiles />} />
        <Route path="/contact-me" element={<ContactMe/>} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
    
