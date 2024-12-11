import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';

/** 
 * @param jsonDataArray contains the json data for emails
 */

//setJsonData is used to handle data outside the inbox component
export default function Trash({jsonDataArray, setCurrentPage}){

  const inboxList = jsonDataArray.map(inbox => <Trash_button 
    jsonData={{sender:inbox.sender, subject:inbox.subject, date:inbox.date, receiver:inbox.receiver, type:inbox.type, email:inbox.email}}
    setCurrentPage = {setCurrentPage}
    />);
    //console.log("FROM INBOX COMP" + typeof setJsonData)
  return <div className="email-list">
  <table className="w-full text-left">
    <thead>
      <tr>
        <th className="p-2 emailSenderHeader">Sender(Receiver)</th>
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

function Trash_button({jsonData, setCurrentPage}){
      return <>
        <tr className="border-b emailButton" >
              <td className="p-2 emailSender">
                <span className="sender-name" >{(jsonData.type === 'received')?jsonData.sender:"("+jsonData.receiver+")"}</span>
              </td>
              <td className="p-2 emailSubject">{jsonData.subject}</td>
              <td className="p-2 emailDate">{jsonData.date}</td>
              <div onClick={(e) => {e.stopPropagation();handleRestore(jsonData,setCurrentPage)}}><FontAwesomeIcon icon={faTrashRestore} /></div>
              <td className="p-2">
              </td>
            </tr>
      </>
}

function handleRestore(jsonData, setCurrentPage){
      //send this jsonData to the backend to remove it from the trash and restore it to its original place
      setCurrentPage('dummy')
      setCurrentPage('trash')
}