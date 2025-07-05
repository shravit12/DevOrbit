import {useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import bgimage from './rm373batch9-035.jpg';




function App() {
     const [activeSection, setActiveSection] = useState(() => {
    return sessionStorage.getItem('activeSection') || 'home';
  });
   
  useEffect(() => {
  window.scrollTo(0, 0);
}, [activeSection]);


    const handleSectionChange = (section) => {
    setActiveSection(section);
    sessionStorage.setItem('activeSection', section);
  };

  return [
    <div className="contain d-flex flex-column min-vh-100" 
    style={{
backgroundImage:`url(${bgimage})` , minHeight: "100vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"}} >
      <Navbar setActiveSection={handleSectionChange} />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" id='Mainbar'>
          {activeSection === 'home' && <Home  setActiveSection={handleSectionChange}  />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        </main>
      </div>
     
    </div>
  ]
}

export default App;
