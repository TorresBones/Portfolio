import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";


import About from "./pages/About.jsx";
import Resume from "./pages/resume.jsx";
import Error from "./pages/Error.jsx";
import Projects from "./pages/projects.js";

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
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);