
import './App.css';
import Inbox_button from './inbox-drafts-page';

function App() {
  return (
    <>
     <Inbox_button jsonData = {{sender: "ahmed", subject: "hello"}}/>
    </>
  );
}

export default App;
