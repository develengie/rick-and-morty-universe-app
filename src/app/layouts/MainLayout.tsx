import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthStatus from "../components/common/AuthStatus/AuthStatus";
import Navigation from "../ui/Navigation/Navigation";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Loader from "../components/common/Loader/Loader";

const MainLayout = () => {
    return (
        <>
            <AuthStatus />
            <Navigation />
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

export default MainLayout;
