import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Home from './Components/Pages/Home/Home';
import Packages from './Components/Pages/Packages/Packages';
import Blog from './Components/Pages/Blog/Blog';
import AddaPackage from './Components/Pages/AddaPackage/AddaPackage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/packages',
          element: <Packages></Packages>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/add-a-package',
          element: <AddaPackage></AddaPackage>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
