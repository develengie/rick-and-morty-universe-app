import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import type { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const auth = useAuth();

    if (!auth.user.email) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
