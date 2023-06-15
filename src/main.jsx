import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AllPrograms from "./pages/AllPrograms";
import ProgramDetails from "./pages/ProgramDetails";
import Sandbox from "./pages/Sandbox";

const root = createRoot(document.getElementById("root"));

// react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/programs",
    element: <AllPrograms />,
  },
  // ID reicht, weil nur eine ID im Programm
  {
    path: "/program-details/:id",
    element: <ProgramDetails />,
  },

  {
    path: "/sandbox",
    element: <Sandbox />,
  },

  // Error als Catch all am Ende
  {
    path: "*",
    errorElement: <ErrorPage />,
  },
]);

// initialize apollo client
const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge62kcq0ive01uifv0t3meo/master",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
