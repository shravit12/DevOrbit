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

   
     <div className="card bg-dark text-white p-4 mt-4">
  <h4 className="mb-3">Quick Links</h4>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark">
     
        <Link to="/setting" className="btn btn-outline-info btn-lg w-100 text-start" >
            ⚙️ Setting
          </Link>
    </li>
    <li className="list-group-item bg-dark">
      
            <Link to="/help" className="btn btn-outline-info btn-lg w-100 text-start" >
            ❓ Help Center
          </Link>
       
    </li>
  </ul>
</div>

    </div>
  ]
};

export default Dashboard;
