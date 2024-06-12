// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
    );

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    useEffect(() => {
        const storedAuthState = JSON.parse(localStorage.getItem('isAuthenticated'));
        if (storedAuthState) {
            setIsAuthenticated(storedAuthState);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
