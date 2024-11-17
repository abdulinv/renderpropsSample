import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./RootLayout";
import { PostsMain } from "./PostsMain";
import Login from "./Login";
import { withProtected } from "./hoc/withProtectedRoutes";
import { protectedLoader } from "./utils/auth";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const ProtectedPosts = withProtected(PostsMain);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found</p>,
    children: [
      {
        path: "/posts",
        element: <ProtectedPosts />,
      },
      {
        index: true,
        element: <p> This is starting page . You can switch over nav items</p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
