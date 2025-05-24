import { categories } from '../static/categories';
import charactersMock from '../mock/characters.json';
import locationMock from '../mock/location.json';
import episodeMock from '../mock/episode.json';
import type {
    CharactersData,
    LocationData,
    EpisodeData,
} from '../models/models';
import type { Category } from '../types/types';

interface CategoryElementsList {
    characters: CharactersData[] | undefined;
    location: LocationData[] | undefined;
    episode: EpisodeData[] | undefined;
}

export const getCategoryElementsList = (
    category: Category
): CategoryElementsList => {
    let characters;
    let location;
    let episode;

    switch (category) {
        case categories.characters:
            characters = charactersMock as CharactersData[];
            break;

        case categories.location:
            location = locationMock as LocationData[];
            break;

        case categories.episode:
            episode = episodeMock as EpisodeData[];
            break;
    }

    return {
        characters,
        location,
        episode,
    };
};
