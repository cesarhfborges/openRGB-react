import {createContext, PropsWithChildren, useCallback, useContext, useMemo, useState,} from 'react';

type AuthContextData = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({
                                 children,
                             }: PropsWithChildren) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = useCallback(() => {
        setAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        setAuthenticated(false);
    }, []);

    const value = useMemo(
        () => ({
            isAuthenticated,
            login,
            logout,
        }),
        [isAuthenticated, login, logout]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth must be used inside AuthProvider'
        );
    }

    return context;
}