import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import './AuthStatus.scss';

const AuthStatus = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSignout = () => {
        auth.signout(() => {
            navigate('/login');
        });
    };

    if (!auth.user.email) {
        return (
            <div className="auth-status  auth-status--error">
                You are not logged in.
            </div>
        );
    }

    return (
        <div className="auth-status">
            <div className="auth-status__email">
                Welcome, {auth.user.email}!
            </div>
            <span
                className="auth-status__signout"
                onClick={handleSignout}
                role="button"
            >
                Signout
            </span>
        </div>
    );
};

export default AuthStatus;
