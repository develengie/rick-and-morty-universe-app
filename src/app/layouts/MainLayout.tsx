import { Outlet } from 'react-router-dom';
import Navigation from '../components/ui/Navigation/Navigation';

const MainLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default MainLayout;
