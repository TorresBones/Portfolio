import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import home from "./components/home";
import projects from "./components/projects";
import resume from "./components/resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <About />,
      },
      {
        index: true,
        path: "/About",
        element: <About />,
      },
      {
        path: "/projects",
        element: <projects />
      },
      {
        path: "/resume",
        element: <resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
