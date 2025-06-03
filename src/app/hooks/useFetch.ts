import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type {
    CharactersData,
    LocationData,
    EpisodeData,
} from "../models/models";

interface FetchedElement {
    element: CharactersData | LocationData | EpisodeData;
    loading: boolean;
    error: string;
}

export const useFetch = (category: string, id: string): FetchedElement => {
    const [element, setElement] = useState(
        {} as CharactersData | LocationData | EpisodeData
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchElement(category: string, id: string) {
        try {
            setError("");
            setLoading(true);
            const { data } = await axios.get<
                CharactersData | LocationData | EpisodeData
            >(`https://rickandmortyapi.com/api/${category}/${id}`);
            setElement(data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchElement(category, id);
    }, []);

    return { element, loading, error };
};
