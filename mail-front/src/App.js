import SignIn from './SignIn';
import Register from './Register';
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