import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BuyerDetailsForm from "@/pages/BuyerDetailsForm";
import OrderItemDetailsForm from "@/pages/OrderItemDetailsForm";
import ShippingDetailsForm from "./pages/ShippingDetailsForm";
import ShippingPartnerDetailsForm from "./pages/ShippingPartnerDetailsForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/add-order", element: <BuyerDetailsForm /> }, // Buyer Details Form
  { path: "/add-order2", element: <OrderItemDetailsForm /> }, //Order Details
  { path: "/add-order3", element: <ShippingDetailsForm /> }, // Shipment Details
  { path: "/add-order4", element: <ShippingPartnerDetailsForm /> }, // Shipping Partner Form
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
