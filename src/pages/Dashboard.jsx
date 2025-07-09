import { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { useAuth } from "../context/Authcontext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";

const Dashboard = () => {
   const isMobile = useIsMobile();
  const { currentUser } = useAuth();
   const { currentUser } = useAuth();
  const [stats, setStats] = useState({
    projectCount: 0,
    projectsCompleted: 0,
    projectsInProgress: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!currentUser) return;

      const docRef = doc(db, 'users', currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStats(docSnap.data());
      }
    };

    fetchStats();
  }, [currentUser]);
   
  return [
     <div className="container py-4 text-white">
      {/* Main Dashboard Section */}
      <section className="mb-5">
        <h2>👋 Welcome {currentUser?.displayName || "User"}</h2>
        <p>This is your main dashboard content.</p>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white p-4 shadow">
            <h5>Total Projects</h5>
            <p className="fs-4">{stats.projectCount}</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white p-4 shadow">
            <h5>Completed Projects</h5>
            <p className="fs-4">{stats.projectsCompleted}</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white p-4 shadow">
            <h5>In Progress</h5>
            <p className="fs-4">{stats.projectsInProgress}</p>
          </div>
        </div>
      </div>
    </div>
    
      </section>

   
     <div className="card bg-dark text-white p-4 mt-4">
  <h4 className="mb-3">Quick Links</h4>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-dark">
     
        <Link to="/Settings" className="btn btn-outline-info btn-lg w-100 text-start" >
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
