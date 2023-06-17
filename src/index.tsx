import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paths } from "../paths";
import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
import store from "./store";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

const router = createBrowserRouter([
	{ path: Paths.home, element: <Home /> },
	{ path: Paths.login, element: <Login /> },
	{ path: Paths.register, element: <Register /> },
	{ path: Paths.cart, element: <Cart /> },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Suspense fallback={<>Loading</>}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</Suspense>
);
