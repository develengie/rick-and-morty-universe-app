import { Navigate, useSearchParams } from 'react-router-dom';
import { getCategoryElementsList } from '../../utils/getCategoryElementsList';
import Select from '../ui/Select/Select';
import CharactersTable from '../common/tables/CharactersTable';
import LocationTable from '../common/tables/LocationTable';
import EpisodeTable from '../common/tables/EpisodeTable';
import type { ChangeEvent } from 'react';
import type { Category } from '../../models/models';

interface CategoryPageProps {
    category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
    const { characters, location, episode } = getCategoryElementsList(category);
    const [createdSort, setCreatedSort] = useSearchParams({ order: '' });
    const createdSortValue = createdSort.get('order')!;

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCreatedSort({ order: event.target.value });
    };

    if (!characters && !location && !episode) {
        return <Navigate to="/" />;
    }

    return (
        <div className="page">
            <div className="container">
                <div className="page__inner">
                    <h1 className="page__title">
                        Data from the {category} category
                    </h1>
                    <Select
                        name="createdSort"
                        value={createdSortValue ? createdSortValue : ''}
                        onChange={handleChange}
                        defaultOption="Сортировать категории..."
                        options={[
                            { label: 'по возрастанию даты', value: 'asc' },
                            { label: 'по убыванию даты', value: 'desc' },
                        ]}
                    />
                    {characters && <CharactersTable characters={characters} />}
                    {location && <LocationTable location={location} />}
                    {episode && <EpisodeTable episode={episode} />}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
