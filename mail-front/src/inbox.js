import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from './DropdownButton';
import axios from 'axios';
axios.defaults.withCredentials = false;
/** 
 * @param jsonDataArray contains the json data for emails
 */

//setJsonData is used to handle data outside the inbox component
export default function Inbox({jsonDataArray, setCurrentPage, setJsonData, jsonData}){

  const inboxList = jsonDataArray.map(inbox => <Inbox_button 
    jsonData={{...inbox}}
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

function Inbox_button({jsonData, setCurrentPage, setJsonData}){
      return <>
        <tr className="border-b emailButton" onClick={() => {handleEmailButton(setJsonData,setCurrentPage, jsonData);}}>
              <td className="p-2 emailSender">
                <span className="sender-name" >{jsonData.sender}</span>
              </td>
              <td className="p-2 emailSubject">{jsonData.subject}</td>
              <td className="p-2 emailDate">{jsonData.date}</td>
              <div onClick={(e) => {e.stopPropagation();setJsonData({...jsonData, isDeleted:true});handleTrashButton(jsonData,setCurrentPage)}}><FontAwesomeIcon icon={faTrash} /></div>
              <td className="p-2">
                <DropdownButton jsonData={jsonData} setJsonData={setJsonData}/>
              </td>
            </tr>
      </>
}

function handleEmailButton(setJsonData, setCurrentPage, jsonData){
      console.log(typeof setJsonData)
      setJsonData(jsonData);
      setCurrentPage('show-emails');
}

function handleTrashButton(jsonData, setCurrentPage){
    //sends the json data of the trash email to the backend to delete it from the inbox and put it in the trash
    
    setCurrentPage('trash');
    setCurrentPage('inbox');
}