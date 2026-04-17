import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './Layout/Mainlayout';
import Timeline from './pages/Timeline/Timeline';
import Errorpage from './pages/Errorpage/Errorpage';
import Navbar from './components/Navbar/Navbar';
import Stats from './pages/Stats/Stats';
import Homepage from './components/Homepage/Homepage';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import FriendTimeline from './components/Context/FriendContext';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
          loader: () => fetch("../public/friendsData.json")

      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails></FriendDetails>,
        loader: () => fetch("/public/friendsData.json")
      }
    ],
    errorElement: <div>
      <Navbar />
      <Errorpage />
    </div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendTimeline>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </FriendTimeline>

  </StrictMode>,
)
