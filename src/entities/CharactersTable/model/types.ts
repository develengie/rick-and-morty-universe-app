import type { Gender, Species, Status } from "../../../shared/config";

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
