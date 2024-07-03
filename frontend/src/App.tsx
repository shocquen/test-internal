import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import Index from "./pages/index";
import Confirmation from "./pages/confirmation";
import Email from "./pages/forms/email";
import Otp from "./pages/forms/otp";
import Signup from "./pages/forms/signup";
import Recap from "./pages/recap";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/confirmation",
		element: <Confirmation />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/email",
		element: <Email />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/otp",
		element: <Otp />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/signup",
		element: <Signup />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/recap",
		element: <Recap />,
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
