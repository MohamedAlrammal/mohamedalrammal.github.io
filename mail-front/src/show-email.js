import './App.css';

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
  
  return <div>
         <button onClick={() => {handleBackButton()}}>back</button>
         <h3>{jsonData.subject}</h3>
          <p>{jsonData.email}</p>
          <h4>Attachments:</h4>
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