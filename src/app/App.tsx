import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/ui/Navigation/Navigation';
import MainPage from './components/pages/MainPage';
import CategoriesLayout from './layouts/CategoriesLayout';

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route
                    path="/categories/:category/:id?"
                    element={<CategoriesLayout />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;
