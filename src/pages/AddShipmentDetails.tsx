import OrderDimensionField from "@/components/elements/OrderDimensionField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateOrderDimensionField } from "@/redux/actions";
import LeftTabOne from "@/components/templates/LeftTabOne";
import LeftTabTwo from "@/components/templates/LeftTabTwo";
import LeftTabThree from "@/components/templates/LeftTabThree";
export default function AddShipmentDetails() {
  const { orderDimension } = useSelector((state: RootState) => state.addOrder);

  //navigation function
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  //defining the select fields for the input units
  const shipDetails = [
    { title: "Weight", unit: "KG" },
    { title: "Length", unit: "CM" },
    { title: "Breadth", unit: "CM" },
    { title: "Height", unit: "CM" },
  ];
  //function to handle form submission data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOrderDimensionField(e.target.id, e.target.value));
  };
  // function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderDimension);
    navigateTo("/add-order4");
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
        {/* defining space for left tab to be 1/4 */}
        <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
          <LeftTabOne />
          <LeftTabTwo />
          <LeftTabThree />
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
                  {shipDetails.map((item, index) => (
                    <OrderDimensionField
                      key={index}
                      oderDimensionForm={orderDimension}
                      handleInputChange={handleInputChange}
                      title={item.title}
                      unit={item.unit}
                    />
                  ))}
                </div>
                {/* button for form submission */}
                <div className="flex lg:flex-row lg:gap-10 flex-col items-center justify-center mt-8 mb-2">
                  <div>
                    <button
                      type="submit"
                      className="bg bg-blue-600 p-2 text-white rounded"
                      onClick={() => history.go(-1)}
                    >
                      Back
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg bg-blue-600 p-2 text-white rounded"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
