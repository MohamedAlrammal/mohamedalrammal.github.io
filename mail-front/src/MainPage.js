import './App.css';
import Inbox from './inbox';
import Compose from './compose'
import ShowEmail from './show-email';
import {useState, useEffect, use} from 'react';
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
    const [name, setName] = useState("From");
    const user = localStorage.getItem('email');
    const [contentArr, setContentArr] = useState(JSON.parse('[]'))
    const [contactArr, setContactArr] = useState(JSON.parse('[]'));
    const [isSearch, setIsSearch] = useState(false);
    
    const [count, setCount] = useState(2);
    //testing data 
    //setContentArr(JSON.parse('[{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024", "type":"received"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}, {"sender":"ahmed", "subject":"yesterday is the day of  the day before", "date":"2-10-2024", "type":"drafts"}]'))
    const [currentPage, setCurrentPage] = useState("inbox");
    const [jsonData, setJsonData] = useState({});

    const [Content, setContent] = useState(<Inbox jsonDataArray={contentArr} currentPage={currentPage} setCurrentPage={setCurrentPage} setJsonData={setJsonData}/>)
    const [isComposeOpen, setIsComposeOpen] = useState(false);

    const handleComposeClick = () => {
      setIsComposeOpen(!isComposeOpen);
    };

    const handleCloseCompose = () => {
      setIsComposeOpen(false);
    };
    const increment = () => {
      if (count < 4) {
        setCount(count + 1);
      }else if(count === 4){
        setCount(1);
      }
    };
    //sending data
    const postData = async (string) => {
      try {
        const response = await axios.post("http://localhost:8080/api/Mail/"+string, `{"guest":"${user}"}`,{
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: false
            });
        //console.log(response.data); // Access the response data
        setContentArr(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/Mail/getContacts", `{"guest":"${user}"}`,{
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: false
            });
        //console.log(response.data); // Access the response data
        setContactArr(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    //changing content  based on the page
     useEffect(() => {
      if (currentPage === 'inbox') {
        //reload all of the josndata in the content array from the backend
        setName("From");
          postData("inbox");
          setContent(
              <Inbox
                  jsonDataArray={contentArr}
                  setCurrentPage={setCurrentPage}
                  setJsonData={setJsonData}
              />
          );
         // console.log("from the app.js"+typeof setJsonData)
      }else if(currentPage === 'drafts'){
        setName("To");
        postData("draft");
        setContent(
          <Draft
              setCurrentPage={setCurrentPage}
              setJsonData={setJsonData}
              jsonDataArray={contentArr}
          />
      );
      }else if(currentPage === 'sent-emails'){
        setName("To");
       if(isSearch === false) {postData("send");}
       console.log(isSearch)
        setContent(
          <Sent
              setJsonData={setJsonData}
              setCurrentPage={setCurrentPage}
              jsonDataArray={contentArr}
          />
      );
      }else if(currentPage === 'trash'){
        postData("trash");
        console.log(contentArr);
        setContent(
          <Trash
              jsonDataArray={contentArr}
              setCurrentPage={setCurrentPage}
          />
      );
      }else if (currentPage === 'show-emails') {
          setContent(<ShowEmail jsonData={jsonData} setCurrentPage={setCurrentPage}/>);
      } else if (currentPage === 'compose') {
          if(jsonData.type !== "Draft"){
              setJsonData({});
          }
          console.log(jsonData);
          setIsComposeOpen(true)
      }else if (currentPage === 'contacts') {
        fetchContacts();
        setContent(<Contacts jsonDataArray={contactArr} setCurrentPage={setCurrentPage} setJsonData={setJsonData}/>);
    }
      // console.log(inboxArr[0])
  }, [contentArr, currentPage]); 
  return (
    <div className='App' style = {{"display":"flex", "justify-content":"center", "align-items":"center"}} >
      <Header/>
      {Content}
      <Navigation setCurrentPage={setCurrentPage} setIsSearch={setIsSearch}/>
      {(currentPage !== "trash" && currentPage !== 'contacts')?<FilterButtons setContentArray = {setContentArr} setCurrentPage={setCurrentPage} jsonData={jsonData} name={name} user={user} setCount={setCount} count={count} increment={increment} setIsSearch={setIsSearch}/>:null}
      <ComposeButton onClick={handleComposeClick} />
      {isComposeOpen && <Compose jsonData={jsonData} setCurrentPage={setCurrentPage} onClose={handleCloseCompose}  setJsonData={setJsonData} user={user}/>}
    
    </div>
  );
}



export default MainPage;
