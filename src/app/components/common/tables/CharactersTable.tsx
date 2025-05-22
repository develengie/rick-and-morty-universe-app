import { Link } from 'react-router-dom';
import type { CharactersData } from '../../../models/models';

type Characters = {
    characters: CharactersData[];
};

const CharactersTable = ({ characters }: Characters) => {
    return (
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
                {characters.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.status}</td>
                        <td>{item.species}</td>
                        <td>{item.type ? item.type : '-'}</td>
                        <td>{item.gender}</td>
                        <td>
                            <img src={item.image} alt="" />
                        </td>
                        <td>{item.created}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CharactersTable;
