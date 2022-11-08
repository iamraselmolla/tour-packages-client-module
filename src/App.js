import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Home from './Components/Pages/Home/Home';
import Packages from './Components/Shared/Packages/Packages';
import Blog from './Components/Pages/Blog/Blog';
import AddaPackage from './Components/Pages/AddaPackage/AddaPackage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Terms from './Components/Pages/Terms/Terms';
import Allpackages from './Components/Shared/Packages/Allpackages';
import PackageDetails from './Components/Shared/Packages/PackageDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => {
            return fetch('http://localhost:5000/home')
          }
        },
        {
          path: '/packages',
          element: <Allpackages></Allpackages>,
          loader: () => {
            return fetch('http://localhost:5000/packages')
          }
        },
        {
          path: '/packages/:id',
          element: <PackageDetails></PackageDetails>,
          loader: ({params}) => {
            return fetch(`http://localhost:5000/packages/${params.id}`)
          }
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
        {
          path: '/terms-conditions',
          element:<Terms></Terms>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
