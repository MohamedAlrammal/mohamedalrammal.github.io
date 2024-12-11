import {React, useState} from 'react';
import './FilterButtons.css';
import './Counter.css'
function FilterButtons({setContentArray, currentPage, jsonData}) {
    
    const [count, setCount] = useState(1);
    const Counter = () => {
        const increment = () => {
          if (count < 4) {
            setCount(count + 1);
          }else if(count === 4){
            setCount(1);
          }
        };
      
        return (
          <div className="counter-container">
            <div className="counter-value">{count}</div>
            <button className="increment-button" onClick={increment}>↑</button>
          </div>
        );
      };
    function handleSearch(e, setContentArray, currentPage){
        e.preventDefault();
        const div = e.target;
        const[from, date, hasAttachments, to, priority] = [div.from.value, div.date.value, div.hasAttachments.checked, div.to.value]
        const newJsonData = {from: from, date: date, hasAttachments:hasAttachments, to:to, priority: count}
        //send this newJsonData to the backend and then setContentArray from the result returned from the backend and 
        //give the backend the currentPage to search in it.
        console.log(newJsonData)
    }
    return (
        <form onSubmit={(e) => {handleSearch(e, setContentArray, currentPage)}} className="filter-container">
            <div className="filter-button">
                 From &nbsp;
            <input name = 'from' type='text' placeholder='From' style={{width: "70%"}}/>
            </div>
            <div className="filter-button">
            <input  name = 'date' type='date'/>
            </div>
            <div  className="filter-button">Has attachment <input name = 'hasAttachments'  type='checkbox'/></div>
            <div className="filter-button">
            To &nbsp;
            <input  name = 'to' type='text' placeholder='To' style={{width: "70%"}}/>
            </div>
            <div style={{height:"15px"}}className="filter-button">
            priority &nbsp;
            <Counter />
            </div>
            <input className="filter-button" type='submit' value={"search"} />
        </form>
    );

}


export default FilterButtons;