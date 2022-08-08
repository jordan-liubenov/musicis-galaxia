import { Navigate, Outlet } from "react-router-dom";
import { checkIfLoggedIn } from "../../utils/loginUtil";

//prevents an already logged-in user from accessing the Register and Login views
const UserGuard = () => {
  const isLoggedIn = checkIfLoggedIn();
  return !isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
};

export default UserGuard;
