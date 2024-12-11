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

function App() {
  /*
  There are 4 states for the current page :
  1. inbox
  2. drafts
  3. show-emails
  4. compose
  5. trash
  6. sent-emails

  */
  // return(
  //   <><Compose /></>
  // );
  //inboxArr
    const [contentArr, setContentArr] = useState(JSON.parse('[{"sender":"Ahmed", "receiver":"hamada", "email":"hello", "type":"drafts", "subject":"hello my friend"},{"sender":"Ahmed", "receiver":"hamada", "email":"hello", "type":"received", "subject":"hello my friend"}]'))
    const [contactArr, setContactArr] = useState(JSON.parse('[]'));
    //testing data 
    //setContentArr(JSON.parse('[{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024", "type":"received"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}]'))
    const [currentPage, setCurrentPage] = useState("contacts");
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
          setContent(
              <Inbox
                  jsonDataArray={contentArr}
                  setCurrentPage={setCurrentPage}
                  setJsonData={setJsonData}
              />
          );
         // console.log("from the app.js"+typeof setJsonData)
      }else if(currentPage === 'drafts'){
        setContent(
          <Draft
              jsonDataArray={contentArr}
              setCurrentPage={setCurrentPage}
              setJsonData={setJsonData}
          />
      );
      }else if(currentPage === 'sent-emails'){
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
      {isComposeOpen && <Compose jsonData={jsonData} setCurrentPage={setCurrentPage} onClose={handleCloseCompose} />}
    
    </div>
  );
}

export default App;
