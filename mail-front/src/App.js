import Header from './Header';
import Navigation from './Navigation';
import Inbox from './inbox';

function App() {
  const arr = [
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}'),
    JSON.parse('{"sender":"ahmed", "subject":"today is the day of today", "date":"2-10-2024"}')
  ];

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Navigation />
        <div className="inbox-container">
          <Inbox jsonDataArray={arr} />
        </div>
      </div>
    </div>
  );
}

export default App;
