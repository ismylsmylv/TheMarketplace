import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import Promos from "../pages/Promos";
import NewPromo from "../pages/NewPromo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/promos",
        element: <Promos />
      },
      {
        path: "/new",
        element: <NewPromo />
      }
    ]
  }
]);
