import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BillingForm from "@/pages/BillingForm";
import ShippingForm from "@/pages/ShippingForm";

export default function AddOrder() {
  const [formData, setFormData] = useState({
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
  const [check, setCheck] = useState(false);
  //function to set formData when entering value in form field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  //function to submit and show the formData in console
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  //function to save the shipping state in the form
  const handleState = (value: string) => {
    setFormData({
      ...formData,
      state: value,
    });
  };
  //function to save the shipping country in the form
  const handleCountry = (value: string) => {
    setFormData({
      ...formData,
      country: value,
    });
  };
  //function to save the billing state in the form
  const handleBillingState = (value: string) => {
    setFormData({
      ...formData,
      stateBilling: value,
    });
  };
  //function to save the billing country in the form
  const handleBillingCountry = (value: string) => {
    setFormData({
      ...formData,
      countryBilling: value,
    });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);

    // If checkbox is checked, copying shipping address to billing address
    if (e.target.checked) {
      setFormData({
        ...formData,
        address1Billing: formData.address1,
        landmarkBilling: formData.landmark,
        address2Billing: formData.address2,
        pincodeBilling: formData.pincode,
        cityBilling: formData.city,
        stateBilling: formData.state,
        countryBilling: formData.country,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ShippingForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleState={handleState}
          handleCountry={handleCountry}
        />
        <div className="m-4">
          <input type="checkbox" onChange={handleCheckboxChange} />
          <Label className="ml-2">Billing and shipping address are same.</Label>
          {check === false && (
            <BillingForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleBillingState={handleBillingState}
              handleBillingCountry={handleBillingCountry}
            />
          )}
          <div className="flex flex-col items-center justify-center mt-4 mb-2">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </>
  );
}
