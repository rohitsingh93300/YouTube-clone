import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import SearchResult from './components/SearchResult.jsx';
import Feed from './components/Feed.jsx';
import VideoDetails from './components/VideoDetails.jsx';
import { AppContext } from './context/ContextApi.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: "searchResult/:searchQuery",
        element: <SearchResult />,
      },
      {
        path: "video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>

   <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>,
)
