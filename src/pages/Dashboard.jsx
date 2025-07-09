import { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { useAuth } from "../context/Authcontext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";

const Dashboard = () => {
   const isMobile = useIsMobile();
  const { currentUser } = useAuth();
   const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const ref = collection(db, "users", currentUser.uid, "projects");
      const snap = await getDocs(ref);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    };
 if (currentUser) fetchProjects();
  }, [currentUser]);

  const total = projects.length;
  const completed = projects.filter(p => p.status === "Completed").length;
  const inProgress = total - completed;
   
  return [
     <div className="container py-4 text-white">
      {/* Main Dashboard Section */}
      <section className="mb-5">
        <h2>👋 Welcome {currentUser?.displayName || "User"}</h2>
        <p>This is your main dashboard content.</p>
         
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card bg-dark text-white p-3">
            <h4>Total Projects</h4>
            <p>{total}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <h4>Completed</h4>
            <p>{completed}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-dark p-3">
            <h4>In Progress</h4>
            <p>{inProgress}</p>
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
