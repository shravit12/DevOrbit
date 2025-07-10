import {  Routes, Route } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import './App.css';

import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Setting.jsx";
import Help from "./pages/Help.jsx";
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/Authcontext';

function App() {
const bgimage = "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?q=80&w=448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* Background Image Layer */}
{/*         <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
             bottom: 0,
            width: "100%",
            height: "100dvh",
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        /> */}

        {/* Foreground App */}
        <div className="contain d-flex flex-column min-vh-100"   style={{ minHeight: "100dvh" }}>
          <Navbar />
          <div className="d-flex flex-grow-1">
            <Sidebar />
            <div
              style={{
                marginLeft: isSidebarVisible && windowWidth >= 768 ? '200px' : '0',
                padding: '20px',
                width: '100%',
                transition: 'margin-left 0.3s ease',
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
   
      );
}

export default App;
