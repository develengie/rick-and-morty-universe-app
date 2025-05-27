import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import CategoriesLayout from './layouts/CategoriesLayout';

const App = () => {
    return (
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
    );
};

export default App;
