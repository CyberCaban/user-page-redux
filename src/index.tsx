import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { Paths } from "../paths";
import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
import Home from "./pages/home";
import Cart from "./pages/cart";
import store from "./store";

// const Home = lazy(() => import("./pages/home"));
// const Cart = lazy(() => import("./pages/cart"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

// const router = createBrowserRouter([
//   { path: Paths.home, element: <Home /> },
//   { path: Paths.login, element: <Login /> },
//   { path: Paths.register, element: <Register /> },
//   { path: Paths.cart, element: <Cart /> },
// ]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    {/* <Suspense fallback={<>Loading</>}> */}
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </Provider>
    {/* </Suspense> */}
  </Router>
);
