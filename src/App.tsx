import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddOrder from "@/pages/AddOrder";
import AddOrder2 from "@/pages/AddOrder2";
import AddOrder3 from "./pages/AddOrder3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/add-order", element: <AddOrder /> },
  { path: "/add-order2", element: <AddOrder2 /> },
  { path: "/add-order3", element: <AddOrder3 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
