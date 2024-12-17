import './compose.css';
import axios from 'axios';
axios.defaults.withCredentials = false;

export default function Compose({jsonData, setCurrentPage, onClose, user}){
  let path = "http://localhost:8080/api/Mail";
  async function handleBack(e){
    
    e.preventDefault();

    const form = e.target.form;
    const formData = new FormData(form);

    const newJsonData = Object.fromEntries(formData.entries());
    delete newJsonData.files
    newJsonData.type = 'Draft'
    newJsonData.priority = 2
    let attachments = []
    if(form.files !== undefined){const files = Array.from(form.files.files);
     attachments = await Promise.all(
        files.map(async (file) => ({
            filename: file.name,
            filetype: file.type,
            filesize: file.size,
            content: await encodeToBase64(file),
        }))
    );}
    newJsonData.attachments = attachments;
    newJsonData.sender = user;
    console.log(newJsonData)
    await axios.post("http://localhost:8080/api/Mail/message", newJsonData,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false
    }).then(response => {console.log('response have been received')})
      .catch(error => {console.error('Full error:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }});
     //newJsonData.attachments = ; //fill it with attachments
     //send this newJsonData to the backend to store it in the drafts ***&&&&****
    
    setCurrentPage('drafts');
    
  }
   async function handleSubmit(e){
     e.preventDefault();

     // Read the form data
     const form = e.target;
     const formData = new FormData(form);
 
    
     const newJsonData = Object.fromEntries(formData.entries());
     newJsonData.type = 'sent'
     newJsonData.priority = 2
    console.log(e.target.elements.files.files)
    const files = Array.from(e.target.elements.files.files);
    newJsonData.attachments = await Promise.all(
       files.map(async (file) => ({
           filename: file.name,
           filetype: file.type,
           filesize: file.size,
           content: await encodeToBase64(file),
       }))
   );
    delete newJsonData.files
    newJsonData.sender = user
    console.log(newJsonData)
    await axios.post("http://localhost:8080/api/Mail/message", newJsonData,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false
    }).then(response => {console.log('response have been received')})
      .catch(error => {console.error('Full error:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request: hello', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }});
     //newJsonData.attachments = ; //fill it with attachments
     //send this newJsonData to the backend to store it in the sent emails ***&&&&****
    setCurrentPage('sent-emails');
  }

  const encodeToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

  return <form method='post' onSubmit={handleSubmit}> <div className="compose-modal">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">New Message</h2>
    <button onClick={(e) => {onClose();handleBack(e);}} className="text-gray-500 hover:text-gray-700">
      back
      <i className="fas fa-times"></i>
    </button>
  </div>
  <div className="mb-4">
    <input
name='receiver'
      type="text"
      placeholder="To"
      value={jsonData.receiver}
    />
  </div>
  <div className="mb-4">
    <input
name='subject'
      type="text"
      placeholder="Subject"
      value={jsonData.subject}
    />
  </div>
  <div className="mb-4">
    <textarea
      placeholder="Message"
name="email"
      value={jsonData.email}
      rows="6"
    ></textarea>
  </div>
  <div className="mb-4">
    <input name = "files" type='file' id='attachButton' multiple />
  </div>
  <div className="flex justify-end">
    <input type = "submit" value="Send"></input>
  </div>
</div>
</form>
}

