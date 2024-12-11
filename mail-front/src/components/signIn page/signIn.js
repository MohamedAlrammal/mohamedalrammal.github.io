import React from "react";
import './signIn.css';
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Email Ex:m@mail.com" required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget Password?</a>
                </div>

                <button onClick={() => navigate('/mail')} type="submit">Login</button>

                <div className="register">
                    <p>Don't have account? <Link to='/register'>Register Now</Link></p>
                </div>
            </form>
        </div>
    );
};
export default SignIn;