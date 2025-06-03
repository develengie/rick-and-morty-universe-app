import { Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ElementDetailTable from "../components/common/ElementDetailTable";
import type { Category } from "../types/types";

interface ElementDetailPageProps {
    category: Category;
    id: string;
}

const ElementDetailPage = ({
    category,
    id: elementId,
}: ElementDetailPageProps) => {
    const { element, loading, error } = useFetch(category, elementId);

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
