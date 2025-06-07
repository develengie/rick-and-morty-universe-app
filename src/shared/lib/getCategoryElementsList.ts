import categories from "../../app/categories";
import api from "../../shared/api";
import type { CharactersData } from "../../entities/CharactersTable/model/types";
import type { LocationData } from "../../entities/LocationTable/model/types";
import type { EpisodeData } from "../../entities/EpisodeTable/model/types";
import type { Category } from "../../shared/config";

interface CategoryElementsList {
    character: CharactersData[] | undefined;
    location: LocationData[] | undefined;
    episode: EpisodeData[] | undefined;
}

export const getCategoryElementsList = (
    category: Category
): CategoryElementsList => {
    let character;
    let location;
    let episode;

    switch (category) {
        case categories.characters.name:
            character = api.charactersMock as CharactersData[];
            break;

        case categories.location.name:
            location = api.locationMock as LocationData[];
            break;

        case categories.episode.name:
            episode = api.episodeMock as EpisodeData[];
            break;
    }

    return {
        character,
        location,
        episode,
    };
};
