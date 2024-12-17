import React, { useState } from "react";
import "./Header.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [userIcon,setUserIcon]=useState(false);
  const user =localStorage.getItem('email');
  const handleUserIcon = () => {
    setUserIcon(!userIcon);
  };
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail Logo"
          className="header__logo"
        />
      </div>

      <div className="header__right">
        <button className="user-Icon" onClick={handleUserIcon}><img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Profile"
          className="header__profile"
        /></button>
        {userIcon && <div className="userInfo">
          <h1>{user}</h1>
          <button className="log-out" onClick={() => navigate('/')}>Log Out</button>
          </div>}
        
      </div>
    </header>
  );
};

export default Header;