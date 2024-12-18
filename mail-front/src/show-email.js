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
         <button className='back' onClick={() => {handleBackButton()}}>back</button>
         <h1 className='subject'>{jsonData.subject}</h1>
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