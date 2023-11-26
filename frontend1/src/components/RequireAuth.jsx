import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();

    let isAuth = localStorage.getItem('isAuth')


    return (
        isAuth === 'true'? <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )
}

export default RequireAuth;