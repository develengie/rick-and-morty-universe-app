import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthStatus from "../components/common/AuthStatus/AuthStatus";
import Navigation from "../ui/Navigation/Navigation";
import Loader from "../components/common/Loader/Loader";

const MainLayout = () => {
    return (
        <>
            <AuthStatus />
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MainLayout;
