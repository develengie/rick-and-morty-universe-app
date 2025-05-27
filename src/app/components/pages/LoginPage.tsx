import Signin from '../ui/Signin/Signin';
import type { User } from '../../models/models';

const LoginPage = () => {
    const handleSubmit = (user: User) => {
        console.log(user);
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
