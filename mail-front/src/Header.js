import React from "react";
import "./Header.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdOutlineHelpOutline, MdOutlineSettings } from "react-icons/md";
import { IoApps } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <FiMenu className="header__icon" />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail Logo"
          className="header__logo"
        />
      </div>

      <div className="header__center">
        <FiSearch className="header__icon" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search mail"
        />
      </div>

      <div className="header__right">
        <MdOutlineHelpOutline className="header__icon" />
        <MdOutlineSettings className="header__icon" />
        <IoApps className="header__icon" />
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Profile"
          className="header__profile"
        />
      </div>
    </header>
  );
};

export default Header;

