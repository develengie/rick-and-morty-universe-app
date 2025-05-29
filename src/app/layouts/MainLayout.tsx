import { Outlet } from 'react-router-dom';
import AuthStatus from '../components/common/AuthStatus/AuthStatus';
import Navigation from '../ui/Navigation/Navigation';

const MainLayout = () => {
    return (
        <>
            <AuthStatus />
            <Navigation />
            <Outlet />
        </>
    );
};

export default MainLayout;
