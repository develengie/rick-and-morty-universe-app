import { useParams } from 'react-router-dom';
import ElementDetailPage from '../components/pages/ElementDetailPage';
import CategoryPage from '../components/pages/CategoryPage';
import MainPage from '../components/pages/MainPage';

const CategoriesLayout = () => {
    const { category, id } = useParams();

    return (
        <>
            {category ? (
                id ? (
                    <ElementDetailPage />
                ) : (
                    <CategoryPage />
                )
            ) : (
                <MainPage />
            )}
        </>
    );
};

export default CategoriesLayout;
