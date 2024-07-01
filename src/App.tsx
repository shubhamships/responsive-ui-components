import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddOrderItemDetails from "@/pages/AddOrderItemDetails";
import AddProfileAddress from "@/pages/AddProfileAddress";
import AddShipmentDetails from "@/pages/AddShipmentDetails";
import AddShippingPartner from "@/pages/AddShippingPartner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/add-order", element: <AddProfileAddress /> },
  { path: "/add-order2", element: <AddOrderItemDetails /> },
  { path: "/add-order3", element: <AddShipmentDetails /> },
  { path: "/add-order4", element: <AddShippingPartner /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
