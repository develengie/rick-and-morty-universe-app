import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import type { ReactNode } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user.email) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return children;
};

export default PrivateRoute;
