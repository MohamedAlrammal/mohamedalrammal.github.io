// React Component
import React, { useState } from 'react';
import './contacts.css';

  const Contacts = ({ jsonDataArray,setCurrentPage,setJsonData }) => {
  const [showInputBox, setShowInputBox] = useState(false);
  const user = localStorage.getItem('email');
  const [cards, setCards] = useState(jsonDataArray);
  const [newCardName, setNewCardName] = useState("");
  const [newCardEmails, setNewCardEmails] = useState("");

  const handleAddCard = () => {
    if (newCardName && newCardEmails) {
      const emailsArray = newCardEmails.split(",").map(email => email.trim());
      setCards([...cards, {  admin:user , name: newCardName, emails: emailsArray }]);
      const newJsonContact = { admin:user , name: newCardName, emails:emailsArray};
      setNewCardName("");
      setNewCardEmails("");
      setShowInputBox(false);
      //send the newJsonContact to the backend to add it to the contacts file

      fetch("http://localhost:8080/api/Mail/addContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJsonContact),
      })
      .then(response => response.json())
      .then(data => console.log("Contact added:", data))
      .catch(error => console.error("Error:", error));
    }
  };
  function handleCompose(e){
    e.preventDefault();
    setCurrentPage('compose')
    const newJsonData = {receiver: e.target.elements.email.value}
    setJsonData(newJsonData)
  }

  return (
    <div className="card-container">
      <button className="add-card-button" onClick={() => setShowInputBox(!showInputBox)}>
        Add New Card
      </button>

      {showInputBox && (
        <div className="input-boxx">
          <input
            type="text"
            placeholder="Enter name"
            className="input-field"
            value={newCardName}
            onChange={(e) => setNewCardName(e.target.value)}
          />
          <textarea
            placeholder="Enter emails separated by commas"
            className="textarea-field"
            value={newCardEmails}
            onChange={(e) => setNewCardEmails(e.target.value)}
          ></textarea>
          <button className="submit-button" onClick={handleAddCard}>Submit</button>
        </div>
      )}

      <div className="card-scroll">
        {cards.map((item, index) => (
          <div className="card" key={index}>
            <h3 className="card-name">{item.name}</h3>
            <div className="email-group">
              {item.emails.map((email, idx) => (
                <form className="email-item" key={idx} onSubmit={(e) => {handleCompose(e)}}>
                  <input name='email'className="email-text" value={email} readOnly/>
                  <input type='submit' className="email-button" value="Compose" />
                </form>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  };

export default Contacts;
