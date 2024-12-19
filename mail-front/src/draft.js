import './inbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FiMoreVertical } from "react-icons/fi";
import DropdownButton from './DropdownButton';
import axios from 'axios';
import { useState } from 'react';
/**
 * @param jsonDataArray contains the json data for emails
 */
export default function Draft({jsonDataArray, setCurrentPage, setJsonData}){
  const [sortBy,setSortBy] = useState("date");
  const [currentPage, setCurrentPageState] = useState(1); // Current page
  const itemsPerPage = 7; // Number of emails per page

  // Calculate total pages
  const totalPages = Math.ceil(jsonDataArray.length / itemsPerPage);

  const handleSortingDate = () =>{
    setSortBy("date");
    localStorage.setItem('sortingBy',sortBy);
  };

  const handleSortingPriority = () =>{
    setSortBy("priority");
    localStorage.setItem('sortingBy',sortBy);
  };

  // Get emails for the current page
  const paginatedEmails = jsonDataArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPageState(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPageState(currentPage - 1);
  };
  const inboxList = paginatedEmails.map(inbox => 
  <Draft_button jsonData={{...inbox}}
                setCurrentPage={setCurrentPage}
                setJsonData={setJsonData}
  />);
  return <div className="email-list">
    <button className='sort-date' onClick={handleSortingDate}>Sorting by date</button>
    <button className='sort-priority' onClick={handleSortingPriority}>Sorting by priority</button>
  <table className="w-full text-left">
    <thead>
      <tr>
        <th className="p-2 emailSenderHeader">receiver</th>
        <th className="p-2 emailSubjectHeader">Subject</th>
        <th className="p-2 emailDateHeader">Date</th>
        <th className="p-2 moreHeader"></th>
      </tr>
    </thead>
    <tbody>
      {inboxList}
    </tbody>
  </table>
  {/* Pagination Controls */}
  <div className="pagination-controls">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
</div>
}

function Draft_button({jsonData, setCurrentPage, setJsonData}){
  // const [key, setKey] = useState(0);

  // const handleRefresh = () => {
  //   setKey((prev) => prev + 1); // Update key to re-mount component
  // };

  const postData = async (string, jsonData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/Mail/"+string, jsonData,{
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: false
          });
          console.log("response received")
    } catch (error) {
      console.error(error);
    }
  };
  function handleTrashButton(jsonData, setCurrentPage){
    //sends the json data of the trash email to the backend to delete it from the inbox and put it in the trash
    postData('delete', jsonData)
    setCurrentPage("drafts");
    setCurrentPage("inbox");
    setCurrentPage("drafts");
}


      return <>
        <tr className="border-b emailButton" onClick={() => {handleEmailButton(setJsonData,setCurrentPage, jsonData);}} /*key={key}*/>
              <td className="p-2 emailSender">
                <span className="sender-name" >{jsonData.receiver}</span>
              </td>
              <td className="p-2 emailSubject">{jsonData.subject}</td>
              <td className="p-2 emailDate">{jsonData.date}</td>
              <div onClick={(e) => {e.stopPropagation();const jsonNew = {...jsonData, delete:true};console.log(jsonNew);handleTrashButton(jsonNew,setCurrentPage);/*handleRefresh();*/}}><FontAwesomeIcon icon={faTrash} /></div>
              <td className="p-2">
              </td>
            </tr>
      </>
}

function handleEmailButton(setJsonData, setCurrentPage, jsonData){
      setJsonData(jsonData);
      setCurrentPage('compose');
}