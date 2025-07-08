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
  const { currentUser } = useAuth();
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

  // 🔤 Fallback Initial Letter
  const renderProfileIcon = () => {
    if (currentUser?.photoURL) {
      return (
        <img
          src={currentUser.photoURL}
          alt="profile"
          className="rounded-circle"
          width="35"
          height="35"
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      );
    } else {
      const fallbackLetter =
        currentUser?.displayName?.[0] ||
        currentUser?.email?.[0] ||
        "U";

      return (
        <div
          className="rounded-circle bg-light text-dark d-flex align-items-center justify-content-center"
          style={{
            width: "35px",
            height: "35px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {fallbackLetter.toUpperCase()}
        </div>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-md text-white fixed-md-top sticky-top" id="Topbar" onWheel={blockScroll}>
      <div className="container">
        <Logo />

       

        {/* Collapse Menu */}
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''} text-white`}>
  <ul className="navbar-nav align-items-center">
            <li className="nav-item link-but">
              <Link to="/" className="nav-link glow-link" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/about" className="nav-link glow-link" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/projects" className="nav-link glow-link" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item link-but">
              <Link to="/contact" className="nav-link glow-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons OUTSIDE Toggle */}
        <div className="d-flex ms-3 align-items-right gap-2">
          {!currentUser ? (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                {renderProfileIcon()}
              </Link>
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
      
          )}
        </div>
         {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          style={{ color: 'white' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
