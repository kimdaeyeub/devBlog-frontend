import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import AddPost from "./routes/AddPost";
import Profile from "./routes/Profile";
import EditPost from "./routes/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <Detail />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
      {
        path: "/post/:id/edit",
        element: <EditPost />,
      },
    ],
  },
]);

export default router;
