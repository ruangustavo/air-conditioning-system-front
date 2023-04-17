import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AirConditioner } from "./pages/AirConditioner";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { Root } from "./pages/root";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { defaultTheme } from "./styles/themes/default";

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
