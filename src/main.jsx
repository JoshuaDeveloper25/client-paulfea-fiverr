// --> Common and important imports from react
import React from "react";
import ReactDOM from "react-dom/client";

// --> React Router Dom Imports and also styles from css
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// --> Pages from application
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Contact from "./pages/Contact/Contact";

// Paths of all webpages from application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
