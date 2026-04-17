import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './Layout/Mainlayout';
import Timeline from './pages/timeline/timeline';
import Errorpage from './pages/Errorpage/Errorpage';
import Navbar from './components/Navbar/Navbar';
import Stats from './pages/Stats/Stats';
import Homepage from './components/Homepage/Homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
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
    <RouterProvider router={router} />
  </StrictMode>,
)
