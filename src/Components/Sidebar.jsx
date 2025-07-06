import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const blockScroll = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

  return [
    
    <div className=" border-end p-3 d-none d-md-block position-fixed vh-100" style={{
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  width: "200px",
  minHeight: "100vh",
      
}}  onWheel={blockScroll}>
    
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link" style={{ color: "#D1D5DB", cursor: "pointer" }}>
            <MdDashboard size={30} /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Settings" className="nav-link" style={{ color: "#D1D5DB", cursor: "pointer" }}>
            <IoSettings size={32} /> Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Help" className="nav-link" style={{ color: "#D1D5DB", cursor: "pointer" }}>
            <MdOutlineHelp size={32} /> Help
          </Link>
        </li>
      </ul>
    </div>
  ]
};

export default Sidebar;
