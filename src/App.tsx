import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddOrder from "./pages/AddOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/add-order", element: <AddOrder /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
