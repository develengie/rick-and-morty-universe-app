import { useParams } from 'react-router-dom';
import PrivateRoute from '../components/common/PrivateRoute';
import ElementDetailPage from '../components/pages/ElementDetailPage';
import CategoryPage from '../components/pages/CategoryPage';
import LoginPage from '../components/pages/LoginPage';
import type { Category } from '../types/types';

interface Params {
    category?: Category;
    id?: string;
}

const CategoriesLayout = () => {
    const { category, id } = useParams() as Params;

    return (
        <>
            {category ? (
                id ? (
                    <PrivateRoute>
                        <ElementDetailPage category={category} id={id} />
                    </PrivateRoute>
                ) : (
                    <PrivateRoute>
                        <CategoryPage category={category} />
                    </PrivateRoute>
                )
            ) : (
                <LoginPage />
            )}
        </>
    );
};

export default CategoriesLayout;
