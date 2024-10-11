import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header.jsx';
import { Toaster } from './components/ui/sonner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create-trip",
    element: <CreateTrip/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Toaster position="top-right" richColors />
    <RouterProvider router={router} />
  </StrictMode>,
)
