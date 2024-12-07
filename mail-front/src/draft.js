import './App.css';

/**
 * @param jsonDataArray contains the json data for emails
 */
export default function Draft({jsonDataArray}){
  const inboxList = jsonDataArray.map(inbox => <Inbox_button jsonData={{sender:inbox.sender, subject:inbox.subject, date:inbox.date}}/>);
  return <div className='inboxPage'>
          {inboxList}
  </div>
}

function Draft_button({jsonData}){
      return <>
        <div className='emailButton' onClick={undefined}> 
         <div className = "priorityButton"></div>
         <span className='emailSender'>{jsonData.sender}</span>  
         <span className='emailSubject'>{jsonData.subject}</span>
         <span className='emailDate'>{jsonData.date}</span>  
         </div>
      </>
}