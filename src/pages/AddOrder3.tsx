import OrderDimensionField from "@/components/elements/OrderDimensionField";
import { useNavigate } from "react-router-dom";
import LeftTab3 from "@/components/templates/LeftTab3";
import axios from "axios";
import LeftTab1 from "@/components/templates/LeftTab1";
import LeftTab2 from "@/components/templates/LeftTab2";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateOrderDimensionField } from "@/redux/actions";
export default function AddOrder3() {
  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  const billingDetailsForm = useSelector(
    (state: RootState) => state.billDetails
  );
  const orderForm = useSelector((state: RootState) => state.orderDetails);
  const orderDimensionForm = useSelector(
    (state: RootState) => state.orderDimensionDetails
  );
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
    console.log(orderDimensionForm);
    axiosDataHandle(orderDimensionForm);
    navigateTo("/add-order4");
  };
  const axiosDataHandle = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { data }
      );
      console.log("Form data posted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Failed to submit form data. Please try again.");
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
        {/* defining space for left tab to be 1/4 */}
        <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
          <LeftTab1
            profileDetailsForm={profileDetailsForm}
            shipDetailsForm={shipDetailsForm}
            billingDetailsForm={billingDetailsForm}
          />
          <LeftTab2 orderForm={orderForm} />
          <LeftTab3 oderDimensionForm={orderDimensionForm} />
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
                      oderDimensionForm={orderDimensionForm}
                      handleInputChange={handleInputChange}
                      title={item.title}
                      unit={item.unit}
                    />
                  ))}
                </div>
                {/* button for form submission */}
                <div className="flex flex-col items-center justify-center mt-8 mb-2">
                  <button
                    type="submit"
                    className="bg bg-blue-600 p-2 text-white rounded"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
