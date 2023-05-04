import React from "react";
import { createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/error-page";
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter ([
{
path: "/",
element: <Home />,
},


//Error als Catchall am Ende
{
  path: "/",
  errorElement: <ErrorPage />,
}
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
