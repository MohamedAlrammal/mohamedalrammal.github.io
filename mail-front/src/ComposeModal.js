import React, { useState } from 'react';
import "./compose.css";
const ComposeModal = ({ onClose }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [folder, setFolder] = useState('');

  const handleSend = () => {
    // Handle send logic here
    console.log({ to, subject, body, folder });
    onClose();
  };

  const handleFolderChange = (event) => {
    const folderPath = event.target.files[0].webkitRelativePath.split('/')[0];
    setFolder(folderPath);
  };

  return (
    <div className="compose-modal">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">New Message</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="6"
        ></textarea>
      </div>
      <div className="mb-4">
        <input
          type="file"
          webkitdirectory="true"
          directory="true"
          onChange={handleFolderChange}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ComposeModal;