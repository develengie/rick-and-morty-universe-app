import { useSearchParams } from "react-router-dom";
import categories from "../../app/categories";
import { Select } from "../../shared/ui";
import CharactersTable from "../../entities/CharactersTable";
import LocationTable from "../../entities/LocationTable";
import EpisodeTable from "../../entities/EpisodeTable";
import type { ChangeEvent } from "react";
import type { Category } from "../../shared/config";

interface CategoryPageProps {
    category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
    const [createdSort, setCreatedSort] = useSearchParams({ order: "" });
    const createdSortValue = createdSort.get("order")!;

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCreatedSort({ order: event.target.value });
    };

    return (
        <div className="page">
            <div className="container">
                <div className="page__inner">
                    <h1 className="page__title">
                        Data from the {category} category
                    </h1>
                    <Select
                        name="createdSort"
                        value={createdSortValue ? createdSortValue : ""}
                        onChange={handleChange}
                        defaultOption="Сортировать категории..."
                        options={[
                            { label: "по возрастанию даты", value: "asc" },
                            { label: "по убыванию даты", value: "desc" },
                        ]}
                    />
                    {category === categories.characters.name && (
                        <CharactersTable createdSortValue={createdSortValue} />
                    )}
                    {category === categories.location.name && (
                        <LocationTable createdSortValue={createdSortValue} />
                    )}
                    {category === categories.episode.name && (
                        <EpisodeTable createdSortValue={createdSortValue} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
