import { useEffect, useState } from "react";
import axios from "axios";
import type {
    CharactersData,
    LocationData,
    EpisodeData,
} from "../models/models";

type UseInfinityScroll = (
    category: string,
    pageNumber: number
) => {
    data: CharactersData[] | LocationData[] | EpisodeData[];
    loading: boolean;
    error: string;
    hasMore: boolean;
};

export const useInfinityScroll: UseInfinityScroll = (category, pageNumber) => {
    const [data, setData] = useState<
        CharactersData[] | LocationData[] | EpisodeData[]
    >([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        let cancel: () => void;

        setError("");
        setLoading(true);

        axios({
            url: `https://rickandmortyapi.com/api/${category}`,
            params: {
                page: pageNumber,
            },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setData((prevState) => {
                    return [...new Set([...prevState, ...res.data.results])];
                });
                setHasMore(res.data.results.length > 0);
                setLoading(false);
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    return;
                }

                setLoading(false);
                setError(error.message);
            });

        return () => cancel();
    }, [category, pageNumber]);

    return {
        data,
        loading,
        error,
        hasMore,
    };
};
