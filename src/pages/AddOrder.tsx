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
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ShippingForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <div className="m-4">
          <input type="checkbox" onChange={handleCheckboxChange} />
          <Label className="ml-2">Billing and shipping address are same.</Label>
          {check === false && (
            <BillingForm
              formData={formData}
              handleInputChange={handleInputChange}
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
