import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import _ from "lodash";
import { useInfinityScroll } from "../../../shared/hooks";
import categories from "../../../app/categories";
import { getLastNodeRef } from "../../../shared/lib";
import { Loader } from "../../../shared/ui";
import { ErrorMessage } from "../../../shared/ui";
import type { EpisodeData } from "../model/types";

interface EpisodeTableProps {
    createdSortValue: string;
}

const EpisodeTable = ({ createdSortValue }: EpisodeTableProps) => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        data: episodeData,
        loading,
        error,
        hasMore,
    } = useInfinityScroll(categories.episode.name, pageNumber);
    const sortedEpisode = _.orderBy(
        episodeData,
        ["created"],
        [createdSortValue === "asc" ? "asc" : "desc"]
    ) as EpisodeData[];
    const episode = createdSortValue
        ? sortedEpisode
        : (episodeData as EpisodeData[]);

    const changePageNumber = () => {
        setPageNumber((prevState) => prevState + 1);
    };

    const lastNodeRef = getLastNodeRef(loading, hasMore, changePageNumber);

    if (!episodeData) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {episode.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Air date</th>
                            <th>Episode</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episode.map((item, index) => {
                            if (episode.length - 5 === index + 1) {
                                return (
                                    <tr
                                        key={"episode-" + item.id}
                                        ref={lastNodeRef}
                                    >
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.air_date}</td>
                                        <td>{item.episode}</td>
                                        <td>{item.created}</td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={"episode-" + item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.air_date}</td>
                                        <td>{item.episode}</td>
                                        <td>{item.created}</td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            )}
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
        </>
    );
};

export default EpisodeTable;
