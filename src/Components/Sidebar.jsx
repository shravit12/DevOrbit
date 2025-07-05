import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
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
        <li className="nav-item"><a className="nav-link" href="#"style={{color:`#D1D5DB`}}><MdDashboard size={30} /> Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#"style={{color:`#D1D5DB`}}><IoSettings size={32}/>  Settings</a></li>
        <li className="nav-item"><a className="nav-link" href="#"style={{color:`#D1D5DB`}}><MdOutlineHelp size={32}/>  Help</a></li>
      </ul>
    </div>
  ]
};

export default Sidebar;
