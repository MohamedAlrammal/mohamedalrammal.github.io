import React from "react";
import './Register.css';
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <MdDriveFileRenameOutline className="icon"/>
                    <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-box">
                    <MdDriveFileRenameOutline className="icon"/>
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className="input-box">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Email Ex:m@mail.com" required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="input-box">
                    <TbLockPassword className="icon"/> 
                    <input type="password" placeholder="Re-enter Password" required />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button type="submit">Sign Up</button>

                <div className="register">
                    <p>Already have account <Link to="/">LogIn </Link></p>
                </div>
            </form>
        </div>
    );
};
export default Register;