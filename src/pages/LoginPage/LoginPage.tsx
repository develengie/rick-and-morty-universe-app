import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../app/providers/AuthProvider";
import Signin from "../../features/Signin";
import type { User } from "../../shared/config";

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();

    const from = location.state?.from ?? "/";

    const handleSubmit = (user: User) => {
        auth.signin(user, () => {
            navigate(from);
        });
    };

    if (auth.user.email) {
        return <Navigate to={from} />;
    }

    return (
        <div className="page">
            <div className="container">
                <h1 className="page__title">Login</h1>
                <Signin onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default LoginPage;
