import type {
    CharactersData,
    LocationData,
    EpisodeData,
} from '../../models/models';

type Element = {
    element: CharactersData | LocationData | EpisodeData;
};

const ElementDetailTable = ({ element }: Element) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(element).map(item => (
                        <th key={item}>
                            {item === 'id'
                                ? item.toUpperCase()
                                : item.charAt(0).toUpperCase() + item.slice(1)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.values(element).map(item => (
                        <td key={item}>
                            {typeof item === 'string' &&
                            item.startsWith('https://') ? (
                                <img src={item} alt="" />
                            ) : (
                                <>{item ? item : '-'}</>
                            )}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export default ElementDetailTable;
