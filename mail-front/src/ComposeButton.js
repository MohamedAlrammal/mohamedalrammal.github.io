import React from 'react';
import "./compose.css";
const ComposeButton = ({ onClick }) => {
  return (
    <div className="compose-button-container">
      <button
        className="compose-button"
        onClick={onClick}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          alt="Gmail logo"
          className="mr-2"
          width="20"
          height="20"
        />
        <span>Compose</span>
      </button>
    </div>
  );
};

export default ComposeButton;