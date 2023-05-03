import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App/App";
import ErrorPage from "./error-page";
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const router = createBrowserRouter ([
{
path: "/",
element: <App />,
errorElement: <ErrorPage />,
},
]);

// TODO router und App-Aufruf sind jetzt doppelt, welches muss raus...?
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
