import { createContext, use, useState, type ReactNode } from "react";
import type { User } from "../../shared/config";

interface Auth {
    user: User;
    signin: (user: User, callback: () => void) => void;
    signout: (callback: () => void) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<Auth>({} as Auth);

export const useAuth = () => {
    return use(AuthContext);
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>(
        () => JSON.parse(localStorage.getItem("user")!) ?? {}
    );

    const signin = (user: User, callback: () => void) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        callback();
    };

    const signout = (callback: () => void) => {
        setUser({} as User);
        localStorage.removeItem("user");
        callback();
    };

    const value = {
        user,
        signin,
        signout,
    };

    return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
