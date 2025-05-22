type Status = 'Alive' | 'unknown' | 'Dead';
type Species = 'Human' | 'Alien';
type Gender = 'Male' | 'Female' | 'unknown';

export interface CharactersData {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type?: string;
    gender: Gender;
    image: string;
    created: string;
}

export interface LocationData {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
}

export interface EpisodeData {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
}

export type Category = 'characters' | 'location' | 'episode';
