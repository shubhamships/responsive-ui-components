import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BillingForm from "@/components/templates/BillingForm";
import ShippingForm from "@/components/templates/ShippingForm";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";

export default function AddOrder() {
  const navigateTo = useNavigate();
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
  const [check, setCheck] = useState(true);
  //function to set billingForm when entering value in form field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingForm({
      ...billingForm,
      [e.target.id]: e.target.value,
    });
  };
  //function to submit and show the billingForm in console
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(billingForm);
    navigateTo("/add-order2");
  };
  //function to save the shipping state in the form
  const handleState = (value: string) => {
    setBillingForm({
      ...billingForm,
      state: value,
    });
  };
  //function to save the shipping country in the form
  const handleCountry = (value: string) => {
    setBillingForm({
      ...billingForm,
      country: value,
    });
  };
  //function to save the billing state in the form
  const handleBillingState = (value: string) => {
    setBillingForm({
      ...billingForm,
      stateBilling: value,
    });
  };
  //function to save the billing country in the form
  const handleBillingCountry = (value: string) => {
    setBillingForm({
      ...billingForm,
      countryBilling: value,
    });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);

    // If checkbox is checked, copying shipping address to billing address
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <LeftTab />
            </div>
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit}>
                <ShippingForm
                  billingForm={billingForm}
                  handleInputChange={handleInputChange}
                  handleState={handleState}
                  handleCountry={handleCountry}
                />
                <div className="m-4 mb-8">
                  <Label className="text-cyan-600 font-bold">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Billing and shipping address are same.
                  </Label>
                </div>
                {check === false && (
                  <BillingForm
                    billingForm={billingForm}
                    handleInputChange={handleInputChange}
                    handleBillingState={handleBillingState}
                    handleBillingCountry={handleBillingCountry}
                  />
                )}
                <div className="flex flex-col items-center justify-center mt-4 mb-2">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
