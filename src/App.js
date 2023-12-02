import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,HashRouter} from 'react-router-dom'; // Import 'Routes'
import Arrow from './MainPage.jsx';
import Profiles from './Profiles.jsx';
import ContactMe from './ContactMe.jsx';


const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <HashRouter>
    <div className={`container ${isActive ? 'active' : ''}`}>
      <Routes>
        <Route path="/" element={<Arrow toggleMenu={toggleMenu} />} />
        <Route path="/my-profiles" element={<Profiles />} />
        <Route path="/contact-me" element={<ContactMe/>} />
      </Routes>
    </div>
  </HashRouter>
  );
};

export default App;
    
