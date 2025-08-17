import { useState } from "react";
import { useRoutes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import "./App.css";
import DetailView from "./pages/DetailView";
import Layout from "./pages/Layout";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ShowCreators />,
        },

        {
          path: "/details/:id",
          element: <DetailView />,
        },

        {
          path: "ViewCreator",
          element: <ViewCreator />,
        },

        {
          path: "AddCreator",
          element: <AddCreator />,
        },

        {
          path: "EditCreator/:id",
          element: <EditCreator />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
