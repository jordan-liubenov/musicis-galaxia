import { Outlet, Navigate } from "react-router-dom";
import { authenticateUser } from "../../services/auth";

//used for preventing un-authorized users from accessing certain pages
const RouteGuard = () => {
  let authenticate = authenticateUser();
  //if authentication returns false, redirect user to login page
  return authenticate ? <Outlet /> : <Navigate to={"/login"} />;
};

export default RouteGuard;
