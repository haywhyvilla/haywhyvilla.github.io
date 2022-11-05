import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    contact: (
      <div>
        <h1>Hello World</h1>
        <Link to="contact">About Us</Link>
      </div>
    ),
  },
  {
    path: "contact",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("contact")).render(
  <RouterProvider router={router} />
);
