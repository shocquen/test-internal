import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import Index from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
