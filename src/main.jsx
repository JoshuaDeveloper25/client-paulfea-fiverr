// --> Common and important imports from react
import React from "react";
import ReactDOM from "react-dom/client";

// --> React Router Dom Imports and also styles from css
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PublicRoutes } from "./auth/PublicRoutes";
import { UserProvider } from "./context";
import "./index.css";

// --> Pages from application
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import About from "./pages/About/About";
import Solutions from "./pages/Solutions.jsx/Solutions";
import News from "./pages/News/News";

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
        element: <PublicRoutes />,
        children: [
          {
            path: "/signup",
            element: <SignUp />,
          },

          {
            path: "/login",
            element: <LogIn />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/pricing",
        element: <Pricing />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/solutions",
        element: <Solutions />,
      },

      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </QueryClientProvider>
);
