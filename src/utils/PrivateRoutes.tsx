import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
    if(token){
      return <Outlet />; 
    }
    return <Navigate to="/"/>;
 };
export default PrivateRoute;
