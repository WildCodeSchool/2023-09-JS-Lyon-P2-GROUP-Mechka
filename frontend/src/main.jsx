import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WrapComponent from "./components/wrapComponent/WrapComponent";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";
import Profil from "./pages/profil/Profil";
import AlbumPage from "./pages/album/AlbumPage";
import ListPage from "./pages/list/ListPage";
import Shows from "./components/Shows/Shows";
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
    path: "/shows/:id",
    element: <Shows />,
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
        <FavoritesProvider>
          <WrapComponent>
            <RouterProvider router={router} />
          </WrapComponent>
        </FavoritesProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
