import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Details from "../pages/Details";

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
      }
    ]
  }
]);
