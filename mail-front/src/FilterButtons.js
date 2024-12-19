import {React, useEffect, useState} from 'react';
import './FilterButtons.css';
import './Counter.css'
import axios from 'axios';
function FilterButtons({setContentArray, currentPage, jsonData, name, setCurrentPage, user, count, increment, setIsSearch}) {
    //http://localhost:8080/api/Mail/search
    
    const Counter = ({onClick}) => {
        
      
        return (
          <div className="counter-container">
            <div className="counter-value">{count}</div>
            <button className="increment-button" onClick={onClick}>↑</button>
          </div>
        );
      };

      const postData = async (string, jsonData) => {
        try {
          const response = await axios.post("http://localhost:8080/api/Mail/"+string, jsonData,{
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: false
              });
          //console.log(response.data); // Access the response data
          setContentArray(response.data)
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      };

    function handleSearch(e, setContentArray, currentPage){
        setIsSearch(true)
        e.preventDefault();
        const div = e.target;
        let[theName, date, hasAttachments, priority] = [div.name.value, div.date.value, div.hasAttachments.checked, count]
        let newJsonData = {};
        if(name === 'To'){
          newJsonData = {"receiver":theName, "sender":user, "priority":priority, "type":"sent", "date":date, "attachment":hasAttachments, "priority":count/*email:null*/}
        }else{
          newJsonData = {"receiver":user, "sender":theName, "priority":priority, "type":"received", "date":date, "attachment":hasAttachments, "priority":count/*email:null*/  
          }
        }
        if(date === ""){delete newJsonData.date;}
        //send this newJsonData to the backend and then setContentArray from the result returned from the backend and 
        //give the backend the currentPage to search in it.
        for(let key in newJsonData){
          if(newJsonData.hasOwnProperty(key) && newJsonData[key] === ""){
            delete newJsonData[key];
          }
        }

        if(newJsonData.priority === 0){
          delete newJsonData.priority;
        }

        postData("search", newJsonData);
        console.log(newJsonData)
    }
    return (
        <form onSubmit={(e) => {handleSearch(e, setContentArray, currentPage)}} className="filter-container">
            <div className="filter-button">
            {name} &nbsp;
            <input name = "name" type='text' placeholder={name} style={{width: "70%"}}/>
            </div>
            <div className="filter-button">
            <input  name = 'date' type='date'/>
            </div>
            <div  className="filter-button">Has attachment <input name = 'hasAttachments'  type='checkbox'/></div>
            <div style={{height:"15px"}}className="filter-button">
            priority &nbsp;
            <Counter onClick={() => {increment()}}/>
            </div>
            <input className="search-button" type='submit' value={"search"} />
        </form>
    );

}


export default FilterButtons;