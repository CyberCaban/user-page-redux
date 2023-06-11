import { App } from "./App";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paths } from "../paths";

const router = createBrowserRouter([
  { path: Paths.home, element: <App /> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register /> },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
