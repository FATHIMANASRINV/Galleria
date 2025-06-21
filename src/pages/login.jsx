import React, { useState, useEffect } from 'react';
import LoginLayout from '../layouts/login';
import { BASE_URL } from './api/config';
import { SITE_NAME } from './api/config';
import { Link } from 'react-router-dom';

const Login = () => {

    useEffect(() => {
        document.title = 'Login | '+ SITE_NAME;
    }, []);


    const [user_name, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const handleLogin = async () => {
        setErrors({});
        try {
            const response = await fetch(BASE_URL+'auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_name, password })
            });
            const result = await response.json();
            console.log(response);
            if (response.success) {
                localStorage.setItem('token', result.token);
                window.location.href = '/dashboard';
            } else {
                if (result.error_msg) {
                    setErrors(result.error_msg); 
                } else {
                    alert(result.message || 'Login failed');
                }            }
        } catch (error) {
            alert('Something went wrong');
            console.error(error);
        }
    };
    return (
        <LoginLayout>
            <h4 className="text-center font-medium mb-4">Login</h4>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="User Name" value={user_name} onChange={(e) => setusername(e.target.value)} />
                {errors.user_name && (
                    <p className="text-danger text-red-600 text-sm mt-1">{errors.user_name}</p>
                )}
            </div>
            <div className="mb-4">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && (
                    <p className="text-danger text-red-600 text-sm mt-1">{errors.password}</p>
                )}
            </div>
            <div className="flex mt-1 justify-between items-center flex-wrap">
                <div className="form-check">
                    <input className="form-check-input input-primary" type="checkbox" id="remember" />
                    <label className="form-check-label text-muted" htmlFor="remember">Remember me?</label>
                </div>
                <a href="/forgot-password" className="text-primary-500">Forgot Password?</a>
            </div>
            <div className="mt-4 text-center">
                <button type="button" className="btn btn-primary mx-auto shadow-2xl" onClick={handleLogin}>Login</button>
            </div>
            <div className="flex justify-between items-end flex-wrap mt-4">
                <h6 className="font-medium mb-0">Don't have an Account?</h6>
                <Link to="/signup" className="text-primary-500">Create Account</Link>
            </div>
        </LoginLayout>
    );
};

export default Login; 