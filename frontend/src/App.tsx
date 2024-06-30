import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import Index from "./pages/index";
import Confirmation from "./pages/confirmation";
import OldIndex from "./pages/oldIndex";

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
		path: "/old",
		element: <OldIndex />,
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
