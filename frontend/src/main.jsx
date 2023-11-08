import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Favorite from "./pages/favorite/Favorite";
import Profil from "./pages/profil/Profil";
import AlbumPage from "./pages/album/AlbumPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
