import { Link } from 'react-router-dom';
import type { LocationData } from '../models/models';

type Location = {
    location: LocationData[];
};

const LocationTable = ({ location }: Location) => {
    return (
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
                {location.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.type}</td>
                        <td>{item.dimension}</td>
                        <td>{item.created}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LocationTable;
