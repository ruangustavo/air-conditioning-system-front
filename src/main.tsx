import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/root";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { AirConditioner } from "./pages/AirConditioner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/air-conditioners",
        element: <AirConditioner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
