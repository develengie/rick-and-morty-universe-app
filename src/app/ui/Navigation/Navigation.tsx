import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { internalPaths } from "../../static/internalPaths";
import { categories } from "../../static/categories";
import "./Navigation.scss";

const Navigation = () => {
    const auth = useAuth();

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <NavLink className="nav__link" to={internalPaths.main}>
                        Main
                    </NavLink>
                </li>
                {!auth.user.email && (
                    <li className="nav__list-item">
                        <NavLink className="nav__link" to={internalPaths.login}>
                            Login
                        </NavLink>
                    </li>
                )}
                {auth.user.email && (
                    <>
                        <li className="nav__list-item">
                            <NavLink
                                className="nav__link"
                                to={internalPaths.category(
                                    categories.characters.name
                                )}
                            >
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav__list-item">
                            <NavLink
                                className="nav__link"
                                to={internalPaths.category(
                                    categories.location.name
                                )}
                            >
                                Location
                            </NavLink>
                        </li>
                        <li className="nav__list-item">
                            <NavLink
                                className="nav__link"
                                to={internalPaths.category(
                                    categories.episode.name
                                )}
                            >
                                Episode
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
