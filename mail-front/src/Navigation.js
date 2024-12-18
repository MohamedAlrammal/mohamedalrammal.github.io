import React from "react";
import "./Navigation.css";

import { FiInbox, FiSend, FiUser, FiFileText, FiTrash2 } from "react-icons/fi";
const Navigation = ({setCurrentPage, setIsSearch}) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"  onClick={() => {setIsSearch(false);setCurrentPage('inbox')}}>
          <FiInbox className="navigation__icon" />
          <span>Inbox</span>
        </li>
        <li className="navigation__item" onClick={() => {setIsSearch(false);setCurrentPage('sent-emails')}}>
          <FiSend className="navigation__icon" />
          <span>Sent</span>
        </li>
        <li className="navigation__item" onClick={() => {setIsSearch(false);setCurrentPage('contacts')}}>
          <FiUser className="navigation__icon" />
          <span>Contact</span>
        </li>
        <li className="navigation__item" onClick={() => {setIsSearch(false);setCurrentPage('drafts')}}>
          <FiFileText className="navigation__icon" />
          <span>Draft</span>
        </li>
        <li className="navigation__item" onClick={() => {setIsSearch(false);setCurrentPage('trash')}}>
          <FiTrash2 className="navigation__icon" />
          <span>Trash</span>
        </li>
      </ul>
    </nav>
  );
  };
  
  export default Navigation;