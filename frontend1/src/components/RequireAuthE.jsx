import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuthE = () => {
    const  isAuthE = localStorage.getItem('isAuthE');
    const location = useLocation();

    return (
        isAuthE == 'true' ? <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )
}

export default RequireAuthE;