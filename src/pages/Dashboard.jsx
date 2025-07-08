import useIsMobile from "../hooks/useIsMobile";
import { useAuth } from "../context/Authcontext";
import Settings from "./Setting";
import Help from "./Help";


const Dashboard = () => {
   const isMobile = useIsMobile();
  const { currentUser } = useAuth();
  return [
     <div className="container py-4 text-white">
      {/* Main Dashboard Section */}
      <section className="mb-5">
        <h2>👋 Welcome {currentUser?.displayName || "User"}</h2>
        <p>This is your main dashboard content.</p>
      </section>

   
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/settings" className="text-info">Go to Settings</a>
          </li>
          
          <li>
            <a href="/help" className="text-info">Help </a>
          </li>
        </ul>
      </div>
    </div>
  ]
};

export default Dashboard;
