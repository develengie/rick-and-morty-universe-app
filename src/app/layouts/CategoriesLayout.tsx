import { lazy } from "react";
import { useParams } from "react-router-dom";
import { PrivateRoute } from "../providers";
import type { Category } from "../../shared/config";

interface Params {
    category?: Category;
    id?: string;
}

const ElementDetailPage = lazy(() => import("../../pages/ElementDetailPage"));
const CategoryPage = lazy(() => import("../../pages/CategoryPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

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
