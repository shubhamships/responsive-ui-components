import OrderDimensionField from "@/components/elements/OrderDimensionField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateOrderDimensionField } from "@/redux/actions";
import LeftTab from "@/components/templates/LeftTab";
import NextBackSubmitButton from "@/components/templates/NextBackSubmitButtons";
export default function ShippingDetailsForm() {
  const { orderDimension } = useSelector((state: RootState) => state.addOrder);

  //navigation function
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  // function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderDimension);
    navigateTo("/add-order4");
  };
  const handleInputDimensionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateOrderDimensionField(name, parseInt(value)));
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
        {/* defining space for left tab to be 1/4 */}
        <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
          <LeftTab />
        </div>
        {/* defining space for form tab to be 3/4 */}
        <div className="lg:col-span-3">
          <div className="m-4">
            <p className="font-bold text-cyan-500 text-2xl mb-2">
              Shipment Details
            </p>
            <p className="text-md font-medium mt-3 mb-5">
              If you need more info, please check out
              <a href="#" className="text-cyan-500 text-sm">
                Help Page.
              </a>
            </p>
          </div>
          <div>
            <div className="m-4 px-2">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:gap-3">
                  {/* mapping the input fields for order dimensional input fields */}

                  <OrderDimensionField
                    handleInputChange={handleInputDimensionChange}
                  />
                </div>
                {/* button for form submission */}
                <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col items-center justify-center mt-8 mb-2">
                  <NextBackSubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
