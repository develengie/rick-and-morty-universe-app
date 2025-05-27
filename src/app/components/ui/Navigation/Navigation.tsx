import { NavLink } from 'react-router-dom';
import { internalPaths } from '../../../static/internalPaths';
import { categories } from '../../../static/categories';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <NavLink className="nav__link" to={internalPaths.main}>
                        Main
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink className="nav__link" to={internalPaths.login}>
                        Login
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink
                        className="nav__link"
                        to={internalPaths.category(categories.characters)}
                    >
                        Characters
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink
                        className="nav__link"
                        to={internalPaths.category(categories.location)}
                    >
                        Location
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink
                        className="nav__link"
                        to={internalPaths.category(categories.episode)}
                    >
                        Episode
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
