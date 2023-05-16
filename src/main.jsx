import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const root = createRoot(document.getElementById("root"));

// react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  //Error als Catch all am Ende
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//initialize apollo client, TODO checken, ob das so richtig ist
const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge62kcq0ive01uifv0t3meo/master",
  cache: new InMemoryCache(),
});
