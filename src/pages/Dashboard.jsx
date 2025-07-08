import useIsMobile from "../hooks/useIsMobile";
import { useAuth } from "../context/Authcontext";
import Settings from "./Settings";
import Help from "./Help";


const Dashboard = () => {
   const isMobile = useIsMobile();
  const { currentUser } = useAuth();
  return [
     <div className="container py-4">
      {/* Main Dashboard Section */}
      <section className="mb-5">
        <h2>👋 Welcome {currentUser?.displayName || "User"}</h2>
        <p>This is your main dashboard content.</p>
      </section>

      {/* Only show these in mobile view */}
      {isMobile && (
        <>
          <section className="mb-5">
            <Settings />
          </section>

          <section>
            <Help />
          </section>
        </>
      )}
    </div>
  ]
};

export default Dashboard;
