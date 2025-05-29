import { Navigate, useSearchParams } from 'react-router-dom';
import _ from 'lodash';
import { getCategoryElementsList } from '../utils/getCategoryElementsList';
import Select from '../ui/Select/Select';
import CharactersTable from '../components/CharactersTable';
import LocationTable from '../components/LocationTable';
import EpisodeTable from '../components/EpisodeTable';
import type { ChangeEvent } from 'react';
import type { Category } from '../types/types';

interface CategoryPageProps {
    category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
    const { characters, location, episode } = getCategoryElementsList(category);
    const [createdSort, setCreatedSort] = useSearchParams({ order: '' });
    const createdSortValue = createdSort.get('order')!;
    const sortedCharacters = _.orderBy(
        characters,
        ['created'],
        [createdSortValue === 'asc' ? 'asc' : 'desc']
    );
    const sortedLocation = _.orderBy(
        location,
        ['created'],
        [createdSortValue === 'asc' ? 'asc' : 'desc']
    );
    const sortedEpisode = _.orderBy(
        episode,
        ['created'],
        [createdSortValue === 'asc' ? 'asc' : 'desc']
    );

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
                    {characters && (
                        <CharactersTable
                            characters={
                                createdSortValue ? sortedCharacters : characters
                            }
                        />
                    )}
                    {location && (
                        <LocationTable
                            location={
                                createdSortValue ? sortedLocation : location
                            }
                        />
                    )}
                    {episode && (
                        <EpisodeTable
                            episode={createdSortValue ? sortedEpisode : episode}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
