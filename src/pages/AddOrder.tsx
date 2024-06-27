import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuyerShippingDetailsForm from "@/components/templates/BuyerShippingDetailsForm";
import BuyerBillingDetailsForm from "@/components/templates/BuyerBillingDetailsForm";
import LeftTab1 from "@/components/templates/LeftTab1";

export default function AddOrder() {
  //navigation function
  const navigateTo = useNavigate();
  //defining form schema - TIP - can separate the complex data values in one simple useState
  const [billingDetailsForm, setBillingDetailsForm] = useState({
    id: 1,
    address1Billing: "",
    landmarkBilling: "",
    address2Billing: "",
    pincodeBilling: "",
    cityBilling: "",
    houseBilling: "",
    streetBilling: "",
    localityBilling: "",
  });
  const [profileDetailsForm, setProfileDetailsForm] = useState({
    id: 1,
    firstName: "",
    lastName: "",
    phone: "",
    alternatePhone: "",
    email: "",
  });
  const [shipDetailsForm, setShipDetailsForm] = useState({
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
  });
  //defining variables for checkbox and show dialog
  const [check, setCheck] = useState(true);
  // function for handling form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Profile Details",
      profileDetailsForm,
      "Billing Details",
      billingDetailsForm,
      "Shipping Details",
      shipDetailsForm
    );
    navigateTo("/add-order2", {
      state: {
        profileDetailsForm,
        shipDetailsForm,
        billingDetailsForm,
      },
    });
  };
  const handleInputProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileDetailsForm({
      ...profileDetailsForm,
      [name]: value,
    });
  };
  const handleInputShipDetailsChange = (e) => {
    const { name, value } = e.target;
    setShipDetailsForm({
      ...shipDetailsForm,
      [name]: value,
    });
  };
  const handleInputBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetailsForm({
      ...billingDetailsForm,
      [name]: value,
    });
  };

  const handleCheckboxChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);

    if (isChecked) {
      setBillingDetailsForm((prev) => ({
        ...prev,
        address1Billing: shipDetailsForm.address1,
        landmarkBilling: shipDetailsForm.landmark,
        address2Billing: shipDetailsForm.address2,
        pincodeBilling: shipDetailsForm.pincode,
        cityBilling: shipDetailsForm.city,
        stateBilling: shipDetailsForm.state,
        countryBilling: shipDetailsForm.country,
        houseBilling: shipDetailsForm.houseNumber,
        localityBilling: shipDetailsForm.locality,
        streetBilling: shipDetailsForm.street,
      }));
    }
  };
  return (
    <>
      <main className="p-4">
        <div className="m-4 px-2">
          {/* defining space for left tab to be 1/4 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1 lg:overflow-y-auto max-h-[600px]">
              <LeftTab1
                profileDetailsForm={profileDetailsForm}
                shipDetailsForm={shipDetailsForm}
                billingDetailsForm={billingDetailsForm}
              />
            </div>
            {/* defining space for form tab to be 3/4 */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} method="post">
                {/* buyer shipping details form */}
                <BuyerShippingDetailsForm
                  profileDetailsForm={profileDetailsForm}
                  shipDetailsForm={shipDetailsForm}
                  handleChangeShippingDetails={handleInputShipDetailsChange}
                  handleChangeProfileDetails={handleInputProfileChange}
                  setShipDetailsForm={setShipDetailsForm}
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
                    billingDetailsForm={billingDetailsForm}
                    handleInputBillingDetailsChange={
                      handleInputBillingDetailsChange
                    }
                    setBillingDetailsForm={setBillingDetailsForm}
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
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
