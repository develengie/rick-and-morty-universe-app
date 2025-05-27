import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import Signin from '../ui/Signin/Signin';
import type { User } from '../../models/models';

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = (user: User) => {
        auth.signin(user, () => {
            navigate('/');
        });
    };

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
