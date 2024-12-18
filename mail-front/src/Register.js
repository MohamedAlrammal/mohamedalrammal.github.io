import React from "react";
import './Register.css';
import { useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link , useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/Mail/request', {
                firstName,
                lastName,
                email,
                password,
                rePassword,
            });
            
            console.log(response.data);

            if (response.data=="Ok") {
                localStorage.setItem('email', email);
                alert('Sign-Up successful!');
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
            <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <MdDriveFileRenameOutline className="icon"/>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="input-box">
                    <MdDriveFileRenameOutline className="icon"/>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="input-box">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Email Ex:m@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Re-enter Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button  type="submit">Sign Up</button>
                {error && <p>{error}</p>}

                <div className="register">
                    <p>Already have account <Link to="/">LogIn </Link></p>
                </div>
            </form>
        </div>
    );
};
export default Register;