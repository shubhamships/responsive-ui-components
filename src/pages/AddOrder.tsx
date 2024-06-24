import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { DialogData } from "@/components/elements/DialogData";
import BuyerShippingDetailsForm from "@/components/templates/BuyerShippingDetailsForm";
import BuyerBillingDetailsForm from "@/components/templates/BuyerBillingDetailsForm";

export default function AddOrder() {
  //navigation function
  const navigateTo = useNavigate();
  //defining form schema
  const [billingForm, setBillingForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    alternatePhone: "",
    email: "",
    country: "",
    address1: "",
    landmark: "",
    address2: "",
    houseNumber: "",
    street: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
    address1Billing: "",
    landmarkBilling: "",
    address2Billing: "",
    pincodeBilling: "",
    cityBilling: "",
    stateBilling: "",
    countryBilling: "",
  });
  //defining variables for checkbox and show dialog
  const [check, setCheck] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  //function for updating form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingForm({
      ...billingForm,
      [e.target.name]: e.target.value,
    });
  };
  //modifying the form data for dialog box
  const billingFormData = Object.entries(billingForm);
  //function for handling form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(billingForm);
    setShowDialog(true);
  };
  //function for handling submit dialog box and navigating to other page
  const handleSubmitDialog = () => {
    setShowDialog(false);
    navigateTo("/add-order2");
  };
  //validating condition to auto fill values if checkbox is checked
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    if (e.target.checked) {
      setBillingForm({
        ...billingForm,
        address1Billing: billingForm.address1,
        landmarkBilling: billingForm.landmark,
        address2Billing: billingForm.address2,
        pincodeBilling: billingForm.pincode,
        cityBilling: billingForm.city,
        stateBilling: billingForm.state,
        countryBilling: billingForm.country,
      });
    }
  };
  return (
    <>
      <main className="p-4">
        <div className="m-4 px-2">
          {/* defining space for left tab to be 1/4 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <LeftTab />
            </div>
            {/* defining space for form tab to be 3/4 */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit}>
                {/* buyer shipping details form */}
                <BuyerShippingDetailsForm
                  billingForm={billingForm}
                  handleInputChange={handleInputChange}
                  setBillingForm={setBillingForm}
                />
                {/* checkbox field for checking if shipping and billing address are same */}
                <div className="m-4 mb-8">
                  <Label className="text-cyan-600 font-bold">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                      id="checkbox"
                    />
                    Billing and shipping address are same.
                  </Label>
                </div>
                {/* if the checkbox is not checked, then rendering buyer billing details form */}
                {check === false && (
                  <BuyerBillingDetailsForm
                    billingForm={billingForm}
                    handleInputChange={handleInputChange}
                    setBillingForm={setBillingForm}
                  />
                )}
                {/* form submit button */}
                <div className="flex flex-col items-center justify-center mt-4 mb-2">
                  <button
                    type="submit"
                    className="bg bg-blue-600 p-2 text-white rounded"
                  >
                    Continue
                  </button>
                </div>
                {/* if the form submission is valid, then opening the dialog box */}
                {showDialog && (
                  <DialogData
                    content={JSON.stringify(billingFormData)}
                    handleSubmit={handleSubmitDialog}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
