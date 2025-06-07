import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthStatus from "../../widgets/AuthStatus";
import Navigation from "../../widgets/Navigation";
import { ErrorBoundary } from "../../app/providers";
import { Loader } from "../../shared/ui";

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
