import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
/** 
 * @param jsonDataArray contains the json data for emails
 */

//setJsonData is used to handle data outside the inbox component
export default function Trash({jsonDataArray, setCurrentPage, setContentArray}){

  const inboxList = jsonDataArray.map(inbox => <Trash_button 
    jsonData={{sender:inbox.sender, subject:inbox.subject, date:inbox.date, receiver:inbox.receiver, type:inbox.type, email:inbox.email}}
    setCurrentPage = {setCurrentPage} setContentArray={setContentArray}
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

function Trash_button({jsonData, setCurrentPage, setContentArray}){
  const postData = async (string, jsonData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/Mail/"+string, jsonData,{
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: false
          });
      //console.log(response.data); // Access the response data
      setContentArray(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  function handleRestore(jsonData, setCurrentPage){
    //send this jsonData to the backend to remove it from the trash and restore it to its original place
    let newJson = {deleteMail:{...jsonData, delete:false}, person:{guest:localStorage.getItem("email")}};
    postData("restore", newJson);
    
    setCurrentPage("trash")
    setCurrentPage('dummy')
    setCurrentPage('trash')
  }
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