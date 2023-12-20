import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx';
import Banner from './components/Banner/Banner.jsx';
import JobCategory from './components/JobCategory/JobCategory.jsx';
import Root from './components/Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path : "/",
        element : <Home />
        
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
