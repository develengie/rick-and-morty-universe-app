import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import MainLayout from "./layouts/MainLayout";
import CategoriesLayout from "./layouts/CategoriesLayout";

const MainPage = lazy(() => import("./pages/MainPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/categories/:category/:id?"
                        element={<CategoriesLayout />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
