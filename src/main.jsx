import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

// React Router : npm i react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import page
import Home from './App.jsx'
import MyProfiles from './Components/MyProfiles.jsx';
import Userpage from './Components/Userpage';
import Adminpage from './Components/Adminpage';



const router = createBrowserRouter([  
  {
    path: '/',
    element:   
    <>
      <Home />
    </>
  },
  {
    path: '/Myprofiles',
    element:   
    <>
      <MyProfiles />
    </>    
  },
  {
    path: '/Userpage',
    element:   
    <>
      <Userpage />
    </>    
    },
    {
      path: '/Adminpage',
      element:   
      <>
        <Adminpage />
      </>    
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
)
