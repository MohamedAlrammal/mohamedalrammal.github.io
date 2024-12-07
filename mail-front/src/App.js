import './App.css';
import Inbox from './inbox';
import Compose from './compose'

function App() {

  // return(
  //   <><Compose /></>
  // );
  const arr = [JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed dsjfdskfhdkjshfkjsdhfdskhfjsd", "subject":"today is the day of  today today is the day of  today today is the day of  today today is the day of  today", "date":"00-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of  today", "date":"2-10-2024"}')]
  return (
    <div className='App' style = {{"display":"flex", "justify-content":"center", "align-items":"center"}} >
    <Inbox jsonDataArray = {arr}/>
    </div>
  );
}

export default App;
