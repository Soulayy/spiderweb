import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Componement/Home";
import PageError from "./Componement/PageError/PageError";
import Destination from "./Componement/Destination/Destination";
import Crew from "./Componement/Crew/Crew"
import Technology from "./Componement/Technology/Technology"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <PageError></PageError>,
  },
  {
    path: "/destination/:id",
    element: <Destination></Destination>,
  },
  {
    path: "/crew/:ic",
    element: <Crew></Crew>,
  },
  {
    path: "/technology/:it",
    element: <Technology></Technology>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)