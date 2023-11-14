import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import WrapComponent from "./components/wrapComponent/WrapComponent";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";
import Profil from "./pages/profil/Profil";
import AlbumPage from "./pages/album/AlbumPage";
import ListPage from "./pages/list/ListPage";
import ArtistPage from "./pages/artist/ArtistPage";

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
    path: "Artists/:id",
    element: <ArtistPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <WrapComponent>
          <RouterProvider router={router} />
        </WrapComponent>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
