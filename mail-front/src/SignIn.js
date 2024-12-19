import React from "react";
import './SignIn.css';
import { useState } from "react";
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [mail, setmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/Mail/sign', {
                mail,
                password,
            });
            
            console.log(response.data);

            if (response.data=="yes") {
                localStorage.setItem('email', mail);
                alert('Sign-in successful!');
                navigate('/mail');
                // Store token or redirect as needed
            } else {
                setError(response.data || 'Invalid credentials');
            }
        } catch (err) {
            setError(err.response?.data || 'Server error. Please try again later.');
        }
    };


    return(
        <div className="wrapper">
            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <div className="input-box">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Email Ex:m@mail.com" value={mail} onChange={(e) => setmail(e.target.value)} required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget Password?</a>
                </div>

                <button  type="submit">Login</button>
                {error && <p>{error}</p>}
                <div className="register">
                    <p>Don't have account? <Link to='/register'>Register Now</Link></p>
                </div>
            </form>
        </div>
    );
};
export default SignIn;