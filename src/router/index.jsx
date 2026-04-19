import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import ErrorPage from  "../pages/ErrorPage"
import ParentLevel from "../pages/ParentLevel";


import { postRoutes } from "./posts.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      postRoutes,
      {
        path: "level",
        element: <ParentLevel />
      },

      {
        path: "*", 
        element: <ErrorPage />
      }
    ],
  },
]);

export default router;
