import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";
import Profil from "./pages/profil/Profil";
import AlbumPage from "./pages/album/AlbumPage";
import ListPage from "./pages/list/ListPage";
import Shows from "./components/Shows/Shows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "albums/:id",
    element: <AlbumPage />,
  },
  {
    path: "/shows/:id",
    element: <Shows />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
