import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { useAuth } from "../../app/providers/AuthProvider";
import internalPaths from "../../app/internalPaths";
import categories from "../../app/categories";
import "./Navigation.scss";

const Navigation = () => {
    const auth = useAuth();

    const authNavLinks = [
        { category: categories.characters.name, text: "Characters" },
        { category: categories.location.name, text: "Location" },
        { category: categories.episode.name, text: "Episode" },
    ];

    return (
        <Breadcrumbs className="nav" aria-label="breadcrumb">
            <NavLink className="nav__link" to={internalPaths.main}>
                Main
            </NavLink>
            {!auth.user.email && (
                <NavLink className="nav__link" to={internalPaths.login}>
                    Login
                </NavLink>
            )}
            {auth.user.email &&
                authNavLinks.map((navLink) => (
                    <NavLink
                        className="nav__link"
                        to={internalPaths.category(navLink.category)}
                    >
                        {navLink.text}
                    </NavLink>
                ))}
        </Breadcrumbs>
    );
};

export default Navigation;
