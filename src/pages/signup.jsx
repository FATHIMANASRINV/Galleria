import React, { useState,useEffect } from 'react';
import LoginLayout from '../layouts/login';
import { BASE_URL } from './api/config';
import { SITE_NAME } from './api/config';
import usePackages from '../hooks/packages';


const Signup = () => {
    useEffect(() => {
        document.title = 'Signup | ' + SITE_NAME;
    }, []);
    const { packages, loading } = usePackages();

    const [sponsor_name, setsponsorname] = useState('');
    const [first_name, setfirstname] = useState('');
    const [last_name, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [errors, setErrors] = useState({});
    const [agree, setAgree] = useState(false);
    const [package_id, setPackageid] = useState('');

    const handleSignup = async (e) => {
        setErrors({});

        const buttonName = e.target.name;   
        const buttonValue = e.target.value; 
        try {
            const response = await fetch(BASE_URL + 'home/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sponsor_name, package_id, first_name, last_name, email, password, cpassword, [buttonName]: buttonValue })
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
                }
            }
        } catch (error) {
            alert('Something went wrong');
            console.error(error);
        }
    };

    return (
        <LoginLayout>
            <h4 className="text-center font-medium mb-4">Sign up</h4>
            <div className="grid grid-cols-12 gap-3 mb-3">
                <div className="col-span-12 sm:col-span-12">
                    <input type="text" className="form-control" placeholder="Sponsor Name" value={sponsor_name} onChange={(e) => setsponsorname(e.target.value)} />
                    {errors.sponsor_name && (
                        <p className="text-danger text-red-600 text-sm mt-1">{errors.sponsor_name}</p>
                    )}
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <input type="text" className="form-control" placeholder="First Name" value={first_name} onChange={(e) => setfirstname(e.target.value)} />
                    {errors.first_name && (
                        <p className="text-danger text-red-600 text-sm mt-1">{errors.first_name}</p>
                    )}
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <input type="text" className="form-control" placeholder="Last Name"  value={last_name} onChange={(e) => setlastname(e.target.value)}/>
                    {errors.last_name && (
                        <p className="text-danger text-red-600 text-sm mt-1">{errors.last_name}</p>
                    )}
                </div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={(e) => setemail(e.target.value)} />
                {errors.email && (
                    <p className="text-danger text-red-600 text-sm mt-1">{errors.email}</p>
                )}
            </div>
            <div className="mb-3">
                <select
                    className="form-control"
                    value={package_id}
                    onChange={e => setPackageid(e.target.value)}
                    disabled={loading}
                >
                    <option value="">-- Select Package --</option>
                    {loading
                        ? <option>Loading packages…</option>
                        : packages.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>
                                {pkg.text}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                {errors.password && (
                    <p className="text-danger text-red-600 text-sm mt-1">{errors.password}</p>
                )}
            </div>
            <div className="mb-4">
                <input type="password" className="form-control" placeholder="Confirm Password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                {errors.cpassword && (
                    <p className="text-danger text-red-600 text-sm mt-1">{errors.cpassword}</p>
                )}
            </div>
            <div className="flex mt-1 justify-between items-center flex-wrap">
                <div className="form-check">
                    <input className="form-check-input input-primary" type="checkbox" id="customCheckc1"  checked={agree}
                        onChange={(e) => setAgree(e.target.checked)} />
                    <label className="form-check-label text-muted" for="customCheckc1">I agree to all the Terms &amp; Condition</label>
                </div>
            </div>
            <div className="mt-4 text-center">
                <button type="button" className="btn btn-primary mx-auto shadow-2xl" name="register"
                    value="free_join"
                    onClick={(e) => handleSignup(e)}>Sign up</button>
            </div>
            <div className="flex justify-between items-end flex-wrap mt-4">
                <h6 className="font-medium mb-0">Already have an Account?</h6>
                <a href="login-v1.html" className="text-primary-500">Login</a>
            </div>
        </LoginLayout>
    );
};

export default Signup; 