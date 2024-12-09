import React from "react";
import "./Inbox.css";
import { FiMoreVertical } from "react-icons/fi";

const Inbox = ({ jsonDataArray }) => {
  return (
    <div className="email-list">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2 emailSenderHeader">Sender</th>
            <th className="p-2 emailSubjectHeader">Subject</th>
            <th className="p-2 emailDateHeader">Date</th>
            <th className="p-2 moreHeader"></th>
          </tr>
        </thead>
        <tbody>
          {jsonDataArray.map((email, index) => (
            <tr className="border-b emailButton" key={index}>
              <td className="p-2 emailSender">
                <span className="sender-name">{email.sender}</span>
              </td>
              <td className="p-2 emailSubject">{email.subject}</td>
              <td className="p-2 emailDate">{email.date}</td>
              <td className="p-2">
                <button className="more-button">
                  <FiMoreVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inbox;