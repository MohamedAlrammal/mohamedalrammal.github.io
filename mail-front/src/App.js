import './App.css';
import SignIn from './components/signIn page/signIn';
import Register from './components/Register Page/Register';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Compose from './components/compose/compose';

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
      path:"/page",
      element:<Compose/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
