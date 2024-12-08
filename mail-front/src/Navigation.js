import React from "react";
import "./Navigation.css";

import { FiInbox, FiSend, FiUser, FiFileText, FiTrash2 } from "react-icons/fi";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <FiInbox className="navigation__icon" />
          <span>Inbox</span>
        </li>
        <li className="navigation__item">
          <FiSend className="navigation__icon" />
          <span>Sent</span>
        </li>
        <li className="navigation__item">
          <FiUser className="navigation__icon" />
          <span>Contact</span>
        </li>
        <li className="navigation__item">
          <FiFileText className="navigation__icon" />
          <span>Draft</span>
        </li>
        <li className="navigation__item">
          <FiTrash2 className="navigation__icon" />
          <span>Trash</span>
        </li>
      </ul>
    </nav>
  );
  };
  
  export default Navigation;