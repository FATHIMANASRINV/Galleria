import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context'; 

const Logout = () => {
    const { logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    return null; 
};

export default Logout;
