import { Navigate } from 'react-router-dom';
import { getCategoryElementsList } from '../../utils/getCategoryElementsList';
import ElementDetailTable from '../common/tables/ElementDetailTable';
import type { Category } from '../../models/models';

interface ElementDetailPageProps {
    category: Category;
    id: string;
}

const ElementDetailPage = ({
    category,
    id: elementId,
}: ElementDetailPageProps) => {
    const сategoryElementsList = getCategoryElementsList(category);
    const element = сategoryElementsList[category]!.find(
        item => item.id.toString() === elementId.toString()
    );

    if (!element) {
        return <Navigate to="/" />;
    }

    return (
        <div className="page">
            <div className="container">
                <div className="page__inner">
                    <h1 className="page__title">{element.name}</h1>
                    <ElementDetailTable element={element} />
                </div>
            </div>
        </div>
    );
};

export default ElementDetailPage;
