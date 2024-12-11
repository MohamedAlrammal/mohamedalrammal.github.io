import './App.css';
import SignIn from './components/signIn page/signIn';
import Register from './components/Register Page/Register';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainPage from './MainPage';

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>,
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/mail",
      element:<MainPage/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
