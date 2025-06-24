import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user_type, setUsertype] = useState(localStorage.getItem('user_type') || null); 

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        setUsertype(localStorage.getItem('user_type'));
    }, []);

    const login = (token, user_type) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user_type', user_type);
        setToken(token);
        setUsertype(user_type);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_type');
        setToken(null);
        setUsertype(null);
    };

    return (
        <UserContext.Provider value={{ token, user_type, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => useContext(UserContext);