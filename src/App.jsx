import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Setting.jsx';
import Help from './pages/Help.jsx';

import bgimage from './rm373batch9-035.jpg';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Scroll to top on route change (runs once on mount)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-hide sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [
    <div
      className="contain d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <Navbar toggleSidebar={() => setIsSidebarVisible((prev) => !prev)} />

      <div className="d-flex flex-grow-1">
        {isSidebarVisible && <Sidebar isVisible={isSidebarVisible} />}
        
        <div
          style={{
            marginLeft:
              isSidebarVisible && window.innerWidth >= 768 ? '200px' : '0px',
            transition: 'margin-left 0.3s ease',
            padding: '20px',
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </div>
  ]
}

export default App;
