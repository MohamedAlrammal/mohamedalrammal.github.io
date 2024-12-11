import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FiMoreVertical } from "react-icons/fi";

/** 
 * @param jsonDataArray contains the json data for emails
 */

//setJsonData is used to handle data outside the inbox component
export default function Sent({jsonDataArray, setCurrentPage, setJsonData}){

  const inboxList = jsonDataArray.map(inbox => <Sent_button 
    jsonData={{sender:inbox.sender, subject:inbox.subject, date:inbox.date, receiver:inbox.receiver, type:inbox.type, email:inbox.email}}
    setCurrentPage={setCurrentPage}
    setJsonData={setJsonData}
    />);
    
    //console.log("FROM INBOX COMP" + typeof setJsonData)
    
  return <div className="email-list">
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
      {inboxList}
    </tbody>
  </table>
</div>
}

function Sent_button({jsonData, setCurrentPage, setJsonData}){
      return <>
        <tr className="border-b emailButton" onClick={() => {handleEmailButton(setJsonData,setCurrentPage, jsonData);}}>
              <td className="p-2 emailSender">
                <span className="sender-name" >{jsonData.sender}</span>
              </td>
              <td className="p-2 emailSubject">{jsonData.subject}</td>
              <td className="p-2 emailDate">{jsonData.date}</td>
              <td className="p-2">
              <div onClick={(e) => {e.stopPropagation();handleTrashButton(jsonData,setCurrentPage)}}><FontAwesomeIcon icon={faTrash} /></div>
                <button className="more-button">
                  <FiMoreVertical />
                </button>
              </td>
            </tr>
      </>
}

function handleEmailButton(setJsonData, setCurrentPage, jsonData){
      console.log(typeof setJsonData)
      setJsonData(jsonData);
      setCurrentPage('show-emails');
      console.log(jsonData)
}

function handleTrashButton(jsonData,setCurrentPage){
  //sends the json data of the trash email to the backend to delete it from the sent emails and put it in the trash
  setCurrentPage('trash');
  setCurrentPage('sent-emails');
}

function handlePriority(setJsonData){
  //handle the priority in the backend change the priority of this json to whatever needed

}