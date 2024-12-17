import './show-emails.css';

/** 
 * @param jsonDataArray contains the json data for emails
 */
export default function ShowEmail({jsonData, setCurrentPage}){

  //console.log(jsonData)
  function handleBackButton(){
    if(jsonData.type === 'sent'){
      setCurrentPage('sent-emails')
    }else{
      setCurrentPage('inbox')
    }
  }

  const downloadAttachment = (attachment) => {
    const link = document.createElement("a");
    link.href = `data:${attachment.filetype};base64,${attachment.content}`;
    link.download = attachment.filename;
    link.click();
};
  if(jsonData.attachments === undefined){
    jsonData.attachments = [];
  }
  
  return <div className='page'>
         <button className='back' onClick={() => {handleBackButton()}}>Back</button>
         <div className='sender'>
          from: <strong>{jsonData.sender}</strong>
         </div>
         <div className='receiver'>
          To: <strong>{jsonData.receiver}</strong>
          </div>
          <div className='subject'>
          Subject: <strong>{jsonData.subject}</strong>
          </div>
          <p className='email'>{jsonData.email}</p>
          <h4 className='attachments'>Attachments:</h4>
          <ul>
                {jsonData.attachments.map((attachment, index) => (
                    <li key={index}>
                        {attachment.filename} ({(attachment.filesize / 1024).toFixed(2)} KB)
                        <button onClick={() => downloadAttachment(attachment)}>
                            Download
                        </button>
                    </li>
                ))}
            </ul>
  </div>
}