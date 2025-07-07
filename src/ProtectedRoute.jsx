// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Authcontext"; // Match the file name exactly

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
