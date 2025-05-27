import { createContext, use, useState, type ReactNode } from 'react';
import type { User } from '../models/models';

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
    const [user, setUser] = useState<User>({} as User);

    const signin = (user: User, callback: () => void) => {
        setUser(user);
        callback();
    };

    const signout = (callback: () => void) => {
        setUser({} as User);
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
