import './App.css';

/**
 * 
 * @param inboxOrDraft tells function whether it is inbox or draft
 * @param jsonDataArray contains the json data for emails
 *  
 */
function Inbox({inboxOrDraft, jsonDataArray}){
  return <div className='inboxPage'>

  </div>
}

export default function Inbox_button({jsonData}){
      return <>
        <div className='emailButton'> 
         <img src='C:\Users\bente\OneDrive\Desktop\CSE reports\prog2 Labs\lab4 mail app\mail-front\src\threedots.png'/>
         <span className='emailSender'>{jsonData.sender}</span>  
         <span className='emailSubject'>{jsonData.subject}</span> 
         
         </div>
      </>
}