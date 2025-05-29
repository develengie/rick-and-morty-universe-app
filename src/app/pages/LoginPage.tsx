import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Signin from '../ui/Signin/Signin';
import type { User } from '../models/models';

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();

    const from = location.state?.from ?? '/';

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
