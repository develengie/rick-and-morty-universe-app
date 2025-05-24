import { useParams } from 'react-router-dom';
import ElementDetailPage from '../components/pages/ElementDetailPage';
import CategoryPage from '../components/pages/CategoryPage';
import MainPage from '../components/pages/MainPage';
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
                    <ElementDetailPage category={category} id={id} />
                ) : (
                    <CategoryPage category={category} />
                )
            ) : (
                <MainPage />
            )}
        </>
    );
};

export default CategoriesLayout;
