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
  //initial values for the array object for item details
  const shippingFormInitialValue = {
    id: 1,
    address1: "",
    landmark: "",
    address2: "",
    houseNumber: "",
    street: "",
    locality: "",
    pincode: "",
    city: "",
    country: "",
    state: "",
  };
  const billingFormInitialValue = {
    id: 1,
    address1Billing: "",
    landmarkBilling: "",
    address2Billing: "",
    pincodeBilling: "",
    cityBilling: "",
  };
  const profileInitialValue = {
    id: 1,
    firstName: "",
    lastName: "",
    phone: "",
    alternatePhone: "",
    email: "",
  };
  //defining form schema
  const [billingForm, setBillingForm] = useState({
    profileDetails: [profileInitialValue],
    shippingDetails: [shippingFormInitialValue],
    billingDetails: [billingFormInitialValue],
  });
  //defining variables for checkbox and show dialog
  const [check, setCheck] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

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
  //function to update the shippingDetails
  const handleChangeShippingDetails = (index, event) => {
    const { name, value } = event.target;
    const list = [...billingForm.shippingDetails];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setBillingForm((prev) => ({
      ...prev,
      shippingDetails: list,
    }));
  };
  //function to update the billingDetails
  const handleChangeBillingDetails = (index, event) => {
    const { name, value } = event.target;
    const list = [...billingForm.billingDetails];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setBillingForm((prev) => ({
      ...prev,
      billingDetails: list,
    }));
  };
  //function to update the profileDetails
  const handleChangeProfileDetails = (index, event) => {
    const { name, value } = event.target;
    const list = [...billingForm.profileDetails];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setBillingForm((prev) => ({
      ...prev,
      profileDetails: list,
    }));
  };

  const handleCheckboxChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);

    if (isChecked) {
      setBillingForm((prev) => ({
        ...prev,
        billingDetails: [
          {
            ...prev.billingDetails[0],
            address1Billing: prev.shippingDetails[0].address1,
            landmarkBilling: prev.shippingDetails[0].landmark,
            address2Billing: prev.shippingDetails[0].address2,
            pincodeBilling: prev.shippingDetails[0].pincode,
            cityBilling: prev.shippingDetails[0].city,
            stateBilling: prev.shippingDetails[0].state,
            countryBilling: prev.shippingDetails[0].country,
          },
        ],
      }));
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
                  handleChangeShippingDetails={handleChangeShippingDetails}
                  handleChangeProfileDetails={handleChangeProfileDetails}
                  setBillingForm={setBillingForm}
                />
                {/* checkbox field for checking if shipping and billing address are same */}
                <div className="m-4 mb-8">
                  <Label className="text-cyan-600 font-bold">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={handleCheckboxChangeCheck}
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
                    handleChangeBillingDetails={handleChangeBillingDetails}
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
                    onCancel={() => setShowDialog(false)}
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
