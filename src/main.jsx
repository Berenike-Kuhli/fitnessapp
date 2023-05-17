import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const root = createRoot(document.getElementById("root"));

// react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // Error als Catch all am Ende
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
]);

// initialize apollo client, TODO checken, ob das so richtig ist
// const client = new ApolloClient({
//   uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge62kcq0ive01uifv0t3meo/master",
//   cache: new InMemoryCache(),
// });

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
