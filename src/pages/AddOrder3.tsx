import OrderDimensionField from "@/components/elements/OrderDimensionField";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DialogData } from "@/components/elements/DialogData";
import LeftTab3 from "@/components/templates/LeftTab3";
import axios from "axios";
import LeftTab1 from "@/components/templates/LeftTab1";
import LeftTab2 from "@/components/templates/LeftTab2";
export default function AddOrder3() {
  //defining the form schema
  const [oderDimensionForm, setOderDimensionForm] = useState({
    weight: "",
    length: "",
    breadth: "",
    height: "",
  });
  //navigation function
  const navigateTo = useNavigate();
  const { state } = useLocation();

  //defining the select fields for the input units
  const shipDetails = [
    { title: "Weight", unit: "KG" },
    { title: "Length", unit: "CM" },
    { title: "Breadth", unit: "CM" },
    { title: "Height", unit: "CM" },
  ];
  //function to handle form submission data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOderDimensionForm({
      ...oderDimensionForm,
      [e.target.id]: e.target.value,
    });
  };
  //state variable for the dialog box
  const [showDialog, setShowDialog] = useState(false);

  //function for handling the submit dialog box
  const handleSubmitDialog = () => {
    setShowDialog(false);
    navigateTo("/add-order4", {
      state: {
        ...state,
        orderForm: {
          ...state.orderForm,
        },
        oderDimensionForm,
      },
    });
  };

  //modifying data to show in dialog box
  const orderDimensionFormData = Object.entries(oderDimensionForm);
  // function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(oderDimensionForm);
    axiosDataHandle(oderDimensionForm);
    setShowDialog(true);
  };
  const axiosDataHandle = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { data }
      );
      console.log("Form data posted successfully:", response.data);
      setShowDialog(true);
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Failed to submit form data. Please try again.");
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* defining space for left tab to be 1/4 */}
        <div className="lg:col-span-1 lg:overflow-y-auto max-h-[600px]">
          <LeftTab1
            profileDetailsForm={state.profileDetailsForm}
            shipDetailsForm={state.shipDetailsForm}
            billingDetailsForm={state.billingDetailsForm}
          />
          <LeftTab2 orderForm={state.orderForm} />
          <LeftTab3 oderDimensionForm={oderDimensionForm} />
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
                      oderDimensionForm={oderDimensionForm}
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
                  {/* dialog box when form submission is valid */}
                  {showDialog && (
                    <DialogData
                      content={JSON.stringify(orderDimensionFormData)}
                      handleSubmit={handleSubmitDialog}
                      onCancel={() => setShowDialog(false)}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
