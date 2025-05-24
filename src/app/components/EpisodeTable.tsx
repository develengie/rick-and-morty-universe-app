import { Link } from 'react-router-dom';
import type { EpisodeData } from '../models/models';

type Episode = {
    episode: EpisodeData[];
};

const EpisodeTable = ({ episode }: Episode) => {
    return (
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
                {episode.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.air_date}</td>
                        <td>{item.episode}</td>
                        <td>{item.created}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EpisodeTable;
