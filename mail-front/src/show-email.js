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
    link.href = `data:${attachment.fileType};base64,${attachment.fileContent}`;
    link.download = attachment.fileName;
    link.click();
};
  if(jsonData.attachment === undefined){
    jsonData.attachment = null;
  }
  
  return <div className='page'>
         <button className='back' onClick={() => {handleBackButton()}}>back</button>
         <p className='subject'>TO: <strong>{jsonData.sender}</strong></p>
         <p className='subject'>From: <strong>{jsonData.receiver}</strong></p>
         <h1 className='subject'>{jsonData.subject}</h1>
          <p className='email'>{jsonData.email}</p>
          <h4 className='attachments'>Attachments:</h4>
          <ul>
          {jsonData.attachment !== null ? (
    jsonData.attachment.map((attachment, index) => (
        <li key={index}>
            {attachment.fileName} ({(attachment.fileSize / 1024).toFixed(2)} KB)
            <button onClick={() => downloadAttachment(attachment)}>
                Download
            </button>
        </li>
    ))
) : null}

            </ul>
  </div>
}