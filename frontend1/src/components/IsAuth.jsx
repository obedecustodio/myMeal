import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const IsAuth = () => {
    const { isAuth } = useAuth();
    const location = useLocation();

    return (
        !isAuth ?  <Outlet /> : <Navigate to="/" state={{ from: location}} replace /> 
    )
}

export default IsAuth;