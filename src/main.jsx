import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./route/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
  </StrictMode>,
);
