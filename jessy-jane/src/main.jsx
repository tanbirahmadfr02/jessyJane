import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Banner from './components/Banner/Banner.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/banner",
    element: <Banner/>
  },
  {
    path: "/testimonial",
    element: <Testimonial/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
