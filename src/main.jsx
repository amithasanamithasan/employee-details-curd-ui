import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Users from './components/users/Users.jsx';
import Updateuser from './components/users/Updateuser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App> ,
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=> fetch('http://localhost:5000/user')
  },
  {
    path:'/update/:id',
    element:<Updateuser></Updateuser>,
    loader:({params})=> fetch(`http://localhost:5000/user/${params.id}`)

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
