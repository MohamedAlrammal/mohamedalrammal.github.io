import React, { useState } from 'react';
import './DropdownButton.css';
import { FiMoreVertical } from "react-icons/fi";

const DropdownButton = ({name, jsonData}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const options = ['1', '2', '3', '4'];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  function handlePriority(e){
    const newJsonData = {...jsonData, priority:e.target.value}
    console.log(newJsonData)
    //sends to the backend the json to delete the old one and replace it by this new one
  }
  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={(e) => {e.stopPropagation();toggleDropdown();}}>
      <FiMoreVertical />
      </button>
      {isDropdownVisible && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li  value={option} onClick={(e) => {e.stopPropagation();setIsDropdownVisible(false);handlePriority(e);}}key={index} className="dropdown-item">
            {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
