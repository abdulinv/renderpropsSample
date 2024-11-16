import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./RootLayout";
import { PostsMain } from "./PostsMain";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found</p>,
    children: [
      {
        path: "/posts",
        element: <PostsMain />,
      },
      {
        index: true,
        element: <p> This is starting page . You can switch over nav items</p>,
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
