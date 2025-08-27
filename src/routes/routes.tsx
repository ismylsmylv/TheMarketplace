import { createBrowserRouter } from "react-router";
import App from "../App";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NewPoster from "../pages/NewPoster";
import Posters from "../pages/Posters";
import Profile from "../pages/Profile";
import Chats from "../pages/Chats";
import Login from "../pages/Login";
import Help from "../pages/Help";
import ResetPassword from "../pages/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/posters/:type/:category",
        element: <Posters />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/new",
        element: <NewPoster />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
