import './App.css';
import Inbox from './inbox';
import Compose from './compose'
import ShowEmail from './show-email';
import {useState, useEffect} from 'react';
import Draft from './draft';
import Sent from './sentEmails';
import Trash from './trash';
import Header from './Header';
import Navigation from './Navigation';
import FilterButtons from './FilterButtons';
import ComposeButton from './ComposeButton';
import Contacts from './contacts'
import axios from 'axios';

function MainPage() {
  /*
  There are 4 states for the current page :
  1. inbox
  2. drafts
  3. show-emails
  4. compose
  5. trash
  6. sent-emails
  7. signIn
  */
  // return(
  //   <><Compose /></>
  // );
  //inboxArr
    const user = "YoussefKhamis@gmail.com"
    const [contentArr, setContentArr] = useState(JSON.parse('[]'))
    const [contactArr, setContactArr] = useState(JSON.parse('[]'));
    //testing data 
    //setContentArr(JSON.parse('[{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024", "type":"received"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}]'))
    const [currentPage, setCurrentPage] = useState("sent-emails");
    const [jsonData, setJsonData] = useState({});

    const [Content, setContent] = useState(<Inbox jsonDataArray={contentArr} currentPage={currentPage} setCurrentPage={setCurrentPage} setJsonData={setJsonData}/>)
    const [isComposeOpen, setIsComposeOpen] = useState(false);

    const handleComposeClick = () => {
      setIsComposeOpen(!isComposeOpen);
    };

    const handleCloseCompose = () => {
      setIsComposeOpen(false);
    };
    

    //changing content  based on the page
    useEffect(() => {
      if (currentPage === 'inbox') {
        //reload all of the josndata in the content array from the backend
         axios.post("http://localhost:8080/api/Mail/inbox", `{"guest":"${user}"}`,{
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false
        }).then((response) => {console.log(response.data);setContentArr(response.data);})
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

          setContent(
              <Inbox
                  jsonDataArray={contentArr}
                  setCurrentPage={setCurrentPage}
                  setJsonData={setJsonData}
              />
          );
         // console.log("from the app.js"+typeof setJsonData)
      }else if(currentPage === 'drafts'){
        axios.post("http://localhost:8080/api/Mail/draft", `{"guest":"${user}"}`,{
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false
        }).then((response) => {console.log(response.data);setContentArr(response.data);})
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
        setContent(
          <Draft
              jsonDataArray={contentArr}
              setCurrentPage={setCurrentPage}
              setJsonData={setJsonData}
          />
      );
      }else if(currentPage === 'sent-emails'){
        axios.post("http://localhost:8080/api/Mail/send", `{"guest":"${user}"}`,{
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false
        }).then((response) => {console.log(response.data);setContentArr(response.data);})
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
        setContent(
          <Sent
              setJsonData={setJsonData}
              setCurrentPage={setCurrentPage}
              jsonDataArray={contentArr}
          />
      );
      }else if(currentPage === 'trash'){
        setContent(
          <Trash
              jsonDataArray={contentArr}
              setCurrentPage={setCurrentPage}
          />
      );
      }else if (currentPage === 'show-emails') {
          setContent(<ShowEmail jsonData={jsonData} setCurrentPage={setCurrentPage}/>);
      } else if (currentPage === 'compose') {
          setIsComposeOpen(true)
      }else if (currentPage === 'contacts') {
        setContent(<Contacts jsonDataArray={JSON.parse('[{"name":"Ahmed", "emails":["email@email.com"]}, {"name":"Ahmed", "emails":["email@email.com"]}, {"name":"Ahmed", "emails":["email@email.com"]}, {"name":"Ahmed", "emails":["email@email.com"]}, {"name":"Ahmed", "emails":["email@email.com"]}]')} setCurrentPage={setCurrentPage} setJsonData={setJsonData}/>);
    }
      // console.log(inboxArr[0])
  }, [currentPage]); 
  return (
    <div className='App' style = {{"display":"flex", "justify-content":"center", "align-items":"center"}} >
      <Header/>
      {Content}
      <Navigation setCurrentPage={setCurrentPage}/>
      <FilterButtons setContentArray = {setContentArr} setCurrentPage={setCurrentPage} jsonData={jsonData}/>
      <ComposeButton onClick={handleComposeClick} />
      {isComposeOpen && <Compose jsonData={jsonData} setCurrentPage={setCurrentPage} onClose={handleCloseCompose}  user={user}/>}
    
    </div>
  );
}

export default MainPage;
