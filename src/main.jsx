import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Error from "./pages/Error";
import TeamsMember from "./pages/TeamsMember";
import { ReactLenis } from "lenis/react";
import Sahid from "./components/TemsDetails/Sahid";
import Joyant from "./components/TemsDetails/Joyant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/teams",
        element: <TeamsMember />,
      },
      {
        path: "/sahid",
        element: <Sahid />,
      },
      {
        path: "/joyant",
        element: <Joyant />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>
);
