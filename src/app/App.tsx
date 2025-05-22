import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import CategoriesLayout from './layouts/CategoriesLayout';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
                path="/categories/:category/:id?"
                element={<CategoriesLayout />}
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default App;
