import _ from "lodash";
import { categories } from "../../static/categories";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import type {
    CharactersData,
    LocationData,
    EpisodeData,
} from "../../models/models";

interface ElementDetailTableProps {
    element: CharactersData | LocationData | EpisodeData;
    loading: boolean;
    error: string;
    category: string;
}

const ElementDetailTable = ({
    element,
    loading,
    error,
    category,
}: ElementDetailTableProps) => {
    const getElement = () => {
        switch (category) {
            case categories.characters.name:
                return _.omit(element, [
                    "origin",
                    "location",
                    "episode",
                    "url",
                ]);

            case categories.location.name:
                return _.omit(element, ["residents", "url"]);

            case categories.episode.name:
                return _.omit(element, ["characters", "url"]);
        }
    };

    return (
        <>
            {Object.keys(element).length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(getElement()!).map((item) => (
                                <th key={item}>
                                    {item === "id"
                                        ? item.toUpperCase()
                                        : item.charAt(0).toUpperCase() +
                                          item.slice(1)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.values(getElement()!).map((item) => (
                                <td key={item}>
                                    {typeof item === "string" &&
                                    item.startsWith("https://") ? (
                                        <img src={item} alt="" />
                                    ) : (
                                        <>{item ? item : "-"}</>
                                    )}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            )}
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
        </>
    );
};

export default ElementDetailTable;
