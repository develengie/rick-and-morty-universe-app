import { Navigate } from 'react-router-dom';
import { getCategoryElementsList } from '../../utils/getCategoryElementsList';
import CharactersTable from '../common/tables/CharactersTable';
import LocationTable from '../common/tables/LocationTable';
import EpisodeTable from '../common/tables/EpisodeTable';
import type { Category } from '../../models/models';

interface CategoryPageProps {
    category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
    const { characters, location, episode } = getCategoryElementsList(category);

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
                    {characters && <CharactersTable characters={characters} />}
                    {location && <LocationTable location={location} />}
                    {episode && <EpisodeTable episode={episode} />}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
