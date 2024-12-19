import React, { useState } from 'react';
import './contacts.css';

const Contacts = ({ jsonDataArray, setCurrentPage, setJsonData }) => {
  const [showInputBox, setShowInputBox] = useState(false);
  const user = localStorage.getItem('email');
  const [cards, setCards] = useState(jsonDataArray);
  const [newCardName, setNewCardName] = useState("");
  const [newCardEmails, setNewCardEmails] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Index of the card being edited
  const [editedEmails, setEditedEmails] = useState(""); // Emails being edited

  const handleAddCard = () => {
    if (newCardName && newCardEmails) {
      const emailsArray = newCardEmails.split(",").map(email => email.trim());
      const newJsonContact = { admin: user, name: newCardName, emails: emailsArray };

      fetch("http://localhost:8080/api/Mail/addContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJsonContact),
      })
        .then(response => response.json())
        .then(() => {
          setCards([...cards, newJsonContact]);
          setNewCardName("");
          setNewCardEmails("");
          setShowInputBox(false);
        })
        .catch(error => console.error("Error adding contact:", error));
    }
  };

  const handleDeleteCard = (index) => {
    const cardToDelete = cards[index];
    fetch("http://localhost:8080/api/Mail/decontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardToDelete),
    })
      .then(() => {
        setCards(cards.filter((_, i) => i !== index));
      })
      .catch(error => console.error("Error deleting card:", error));
  };

  const handleCompose = (e, email) => {
    e.preventDefault();
    setCurrentPage('compose');
    setJsonData({ receiver: email });
  };

  const handleEdit = (index) => {
    // Enter edit mode for the specific card
    setEditingIndex(index);
    setEditedEmails(cards[index].emails.join(", ")); // Pre-fill with current emails
  };

  const handleSave = (index) => {
    const updatedEmails = editedEmails.split(",").map(email => email.trim());
    const updatedCard = { ...cards[index], emails: updatedEmails };

    // Update backend
    fetch("http://localhost:8080/api/Mail/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCard),
    })
      .then(response => response.json())
      .then(() => {
        // Update local state
        const updatedCards = [...cards];
        updatedCards[index] = updatedCard;
        setCards(updatedCards);
        setEditingIndex(null); // Exit edit mode
      })
      .catch(error => console.error("Error updating contact:", error));
  };

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
              {editingIndex === index ? (
                <textarea
                  className="edit-emails-textarea"
                  value={editedEmails}
                  onChange={(e) => setEditedEmails(e.target.value)}
                />
              ) : (
                item.emails.map((email, idx) => (
                  <form className="email-item" key={idx} onSubmit={(e) => handleCompose(e, email)}>
                    <input name="email" className="email-text" value={email} readOnly />
                    <input type="submit" className="email-button" value="Compose" />
                  </form>
                ))
              )}
            </div>
            {editingIndex === index ? (
              <button className="save-button" onClick={() => handleSave(index)}>Save</button>
            ) : (
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            )}
            <button className="delet-button" onClick={() => handleDeleteCard(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
