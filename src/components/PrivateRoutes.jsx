import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {

    const user = null
    return user ? <Outlet/> : <Navigate to="/Login" />;

    
}

export default PrivateRoutes