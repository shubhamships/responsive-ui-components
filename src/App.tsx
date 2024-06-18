import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/add-order", element: <h3>Add Order</h3> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
