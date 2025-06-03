import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import _ from "lodash";
import { useInfinityScroll } from "../hooks/useInfinityScroll";
import { categories } from "../static/categories";
import { getLastNodeRef } from "../utils/getLastNodeRef";
import Loader from "./common/Loader/Loader";
import ErrorMessage from "./common/ErrorMessage/ErrorMessage";
import type { LocationData } from "../models/models";

interface LocationTableProps {
    createdSortValue: string;
}

const LocationTable = ({ createdSortValue }: LocationTableProps) => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        data: locationData,
        loading,
        error,
        hasMore,
    } = useInfinityScroll(categories.location.name, pageNumber);
    const sortedLocation = _.orderBy(
        locationData,
        ["created"],
        [createdSortValue === "asc" ? "asc" : "desc"]
    ) as LocationData[];
    const location = createdSortValue
        ? sortedLocation
        : (locationData as LocationData[]);

    const changePageNumber = () => {
        setPageNumber((prevState) => prevState + 1);
    };

    const lastNodeRef = getLastNodeRef(loading, hasMore, changePageNumber);

    if (!locationData) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {location.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Dimension</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {location.map((item, index) => {
                            if (location.length - 5 === index + 1) {
                                return (
                                    <tr
                                        key={"location-" + item.id}
                                        ref={lastNodeRef}
                                    >
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.type}</td>
                                        <td>{item.dimension}</td>
                                        <td>{item.created}</td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={"location-" + item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            <Link to={`${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.type}</td>
                                        <td>{item.dimension}</td>
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

export default LocationTable;
