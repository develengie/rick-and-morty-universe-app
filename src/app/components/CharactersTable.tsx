import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import _ from "lodash";
import { useInfinityScroll } from "../hooks/useInfinityScroll";
import { categories } from "../static/categories";
import { getLastNodeRef } from "../utils/getLastNodeRef";
import Loader from "./common/Loader/Loader";
import ErrorMessage from "./common/ErrorMessage/ErrorMessage";
import type { CharactersData } from "../models/models";

interface CharactersTableProps {
    createdSortValue: string;
}

const CharactersTable = ({ createdSortValue }: CharactersTableProps) => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        data: charactersData,
        loading,
        error,
        hasMore,
    } = useInfinityScroll(categories.characters.name, pageNumber);
    const sortedCharacters = _.orderBy(
        charactersData,
        ["created"],
        [createdSortValue === "asc" ? "asc" : "desc"]
    ) as CharactersData[];
    const characters = createdSortValue
        ? sortedCharacters
        : (charactersData as CharactersData[]);

    const changePageNumber = () => {
        setPageNumber((prevState) => prevState + 1);
    };

    const lastNodeRef = getLastNodeRef(loading, hasMore, changePageNumber);

    if (!charactersData) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {characters.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Species</th>
                            <th>Type</th>
                            <th>Gender</th>
                            <th>Image</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map((item, index) => {
                            if (characters.length - 5 === index + 1) {
                                return (
                                    <tr
                                        key={"character-" + item.id}
                                        ref={lastNodeRef}
                                    >
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.status}</td>
                                        <td>{item.species}</td>
                                        <td>{item.type ? item.type : "-"}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <img src={item.image} alt="" />
                                        </td>
                                        <td>{item.created}</td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={"character-" + item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.status}</td>
                                        <td>{item.species}</td>
                                        <td>{item.type ? item.type : "-"}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <img src={item.image} alt="" />
                                        </td>
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

export default CharactersTable;
