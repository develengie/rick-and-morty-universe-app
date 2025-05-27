import type { Gender, Species, Status } from '../types/types';

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

export interface SigninData {
    email: string;
    password: string;
}
