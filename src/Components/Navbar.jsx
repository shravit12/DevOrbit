import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import '../navbarcs.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const blockScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return [
    <nav className="navbar navbar-expand-md text-white fixed-md-top sticky-top" id="Topbar" onWheel={blockScroll}>
      <div className="container">
        <Logo />

        <button
          className="navbar-toggler"
          type="button"
          style={{ color: `white` }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item link-but">
              <Link to="/" className="nav-link glow-link" style={{ color: 'white' }} onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/about" className="nav-link glow-link" style={{ color: 'white' }} onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/projects" className="nav-link glow-link" style={{ color: 'white' }} onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/contact" className="nav-link glow-link" style={{ color: 'white' }} onClick={() => setIsOpen(false)}>Contact</Link>
            </li>

            {/* Login & Signup Buttons */}
            <li className="nav-item ms-3">
              <Link
                to="/login"
                className="btn btn-outline-light btn-sm"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                to="/signup"
                className="btn btn-primary btn-sm"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ]
};

export default Navbar;
