import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import BlogIndex from "./pages/blog/BlogIndex.tsx";
import BlogShow from "./pages/blog/BlogShow.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/blog",
    element: (
      <App>
        <BlogIndex />
      </App>
    ),
  },
  {
    path: "/blog/:postName",
    element: (
      <App>
        <BlogShow />
      </App>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
