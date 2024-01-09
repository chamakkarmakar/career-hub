import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import SearchJobs from './components/FilteredSearchJobs/SearchJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path: "/search",
        element: <SearchJobs />,
        loader: ()=>fetch("/jobs.json")
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: ()=>fetch("/jobs.json")
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: ()=>fetch("/jobs.json")
      }
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
