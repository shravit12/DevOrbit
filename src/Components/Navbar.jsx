import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo.jsx';
import '../navbarcs.css'

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const blockScroll = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

  return [
    <nav className="navbar navbar-expand-md text-white fixed-md-top sticky-top" id ="Topbar" onWheel={blockScroll} >
      <div className="container">
       <Logo  setActiveSection={setActiveSection} ></Logo>

        <button
          className="navbar-toggler"
          type="button" style={{color:`white`}}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item link-but">
              <a className="nav-link glow-link "  onClick={() => {setActiveSection('home');  setIsOpen(false);}}  style={{color: `white`}}>Home</a>
            </li>
            <li className="nav-item link-but">
              <a className="nav-link glow-link" onClick={() => {setActiveSection('about');  setIsOpen(false);}}  style={{color: `white`}}>About</a>
            </li>
            <li className="nav-item link-but">
              <a className="nav-link glow-link" onClick={() => {setActiveSection('projects');  setIsOpen(false);}}  style={{color: `white`}}>Projects</a>
            </li>
            <li className="nav-item link-but">
              <a className="nav-link glow-link" onClick={() => {setActiveSection('contact');  setIsOpen(false);}} style={{color: `white`}}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ]
};

export default Navbar;
