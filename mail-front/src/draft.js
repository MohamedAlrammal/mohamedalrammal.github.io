import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FiMoreVertical } from "react-icons/fi";
import DropdownButton from './DropdownButton';

/**
 * @param jsonDataArray contains the json data for emails
 */
export default function Draft({jsonDataArray, setCurrentPage, setJsonData}){
  const inboxList = jsonDataArray.map(inbox => 
  <Draft_button jsonData={{...inbox}}
                setCurrentPage={setCurrentPage}
                setJsonData={setJsonData}
  />);
  return <div className="email-list">
  <table className="w-full text-left">
    <thead>
      <tr>
        <th className="p-2 emailSenderHeader">receiver</th>
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

function Draft_button({jsonData, setCurrentPage, setJsonData}){
      return <>
        <tr className="border-b emailButton" onClick={() => {handleEmailButton(setJsonData,setCurrentPage, jsonData);}}>
              <td className="p-2 emailSender">
                <span className="sender-name" >{jsonData.receiver}</span>
              </td>
              <td className="p-2 emailSubject">{jsonData.subject}</td>
              <td className="p-2 emailDate">{jsonData.date}</td>
              <div onClick={(e) => {e.stopPropagation();handleTrashButton(jsonData,setCurrentPage)}}><FontAwesomeIcon icon={faTrash} /></div>
              <td className="p-2">
              <DropdownButton jsonData={jsonData} setJsonData={setJsonData}/>
              </td>
            </tr>
      </>
}

function handleEmailButton(setJsonData, setCurrentPage, jsonData){
      setJsonData(jsonData);
      setCurrentPage('compose');
}

function handleTrashButton(jsonData,setCurrentPage){
      //sends the json data of the trash email to the backend to delete it from the drafts and put it in the trash
      setCurrentPage('trash');
      setCurrentPage('drafts');
    }