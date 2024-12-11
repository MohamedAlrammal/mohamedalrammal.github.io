import Header from './Header';
import React, {useState } from 'react';
import Navigation from './Navigation';
import Inbox from './inbox';
import ComposeButton from './ComposeButton';
import ComposeModal from './ComposeModal';
import FilterButtons from './FilterButtons';

function MainPage() {
    const [isComposeOpen, setIsComposeOpen] = useState(false);
  
    const handleComposeClick = () => {
      setIsComposeOpen(!isComposeOpen);
    };
  
    const handleCloseCompose = () => {
      setIsComposeOpen(false);
    };
  
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
      <div>
          <FilterButtons />
        </div>
        <div>
          <Inbox jsonDataArray={arr} />
      </div>
  </div>
          <div className="relative">
        <ComposeButton onClick={handleComposeClick} />
        {isComposeOpen && <ComposeModal onClose={handleCloseCompose} />}
        
      </div>
      </div>
    );
  }
  
  export default MainPage;