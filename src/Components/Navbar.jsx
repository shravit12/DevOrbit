import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/Authcontext";
import Logo from './Logo.jsx';
import '../navbarcs.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // ✅ Get logged-in user from context
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  const blockScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };


  return (
 <nav className="navbar navbar-expand-md text-white sticky-top" id="Topbar" onWheel={blockScroll}>
  <div className="container d-flex justify-content-between align-items-center">

    {/* Left: Logo */}
    <div className="d-flex align-items-center">
      <Logo />
    </div>

    {/* Center: Nav Links (collapsible) */}
    <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}>
      <ul className="navbar-nav text-center">
        <li className="nav-item link-but">
          <Link to="/" className="nav-link glow-link text-white" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="nav-item link-but">
          <Link to="/about" className="nav-link glow-link text-white" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className="nav-item link-but">
          <Link to="/projects" className="nav-link glow-link text-white" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li className="nav-item link-but">
          <Link to="/contact" className="nav-link glow-link text-white" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </div>

    {/* Right: Auth Buttons + Toggle */}
    <div className="d-flex align-items-center">
      {/* Auth Buttons */}
      {!currentUser ? (
        <>
          <Link to="/login" className="btn btn-outline-light btn-sm me-2" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="btn btn-primary btn-sm me-3" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </>
      ) : (
        <button className="btn btn-danger btn-sm me-3" onClick={() => { handleLogout(); setIsOpen(false); }}>
          Logout
        </button>
      )}

      {/* Toggle Button - RIGHT aligned */}
      <button
        className="navbar-toggler"
        type="button"
        style={{ color: `white` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

  </div>
</nav>

  );
};

export default Navbar;
