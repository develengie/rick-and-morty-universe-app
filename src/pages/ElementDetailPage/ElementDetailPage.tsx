import { Navigate } from "react-router-dom";
import { useFetchElement } from "../../shared/hooks";
import ElementDetailTable from "../../widgets/ElementDetailTable";
import type { Category } from "../../shared/config";

interface ElementDetailPageProps {
    category: Category;
    id: string;
}

const ElementDetailPage = ({
    category,
    id: elementId,
}: ElementDetailPageProps) => {
    const { element, loading, error } = useFetchElement(category, elementId);

    if (!element) {
        return <Navigate to="/" />;
    }

    return (
        <div className="page">
            <div className="container">
                <div className="page__inner">
                    {Object.keys(element).length > 0 && (
                        <h1 className="page__title">{element.name}</h1>
                    )}
                    <ElementDetailTable
                        element={element}
                        loading={loading}
                        error={error}
                        category={category}
                    />
                </div>
            </div>
        </div>
    );
};

export default ElementDetailPage;
