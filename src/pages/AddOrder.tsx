import { Label } from "@/components/ui/label";
import { useState } from "react";
import BillingForm from "@/components/templates/BillingForm";
import ShippingForm from "@/components/templates/ShippingForm";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { DialogData } from "@/components/elements/DialogData";

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingForm({
      ...billingForm,
      [e.target.id]: e.target.value,
    });
  };

  // const billingFormData = [];
  // for (const [key, value] of Object.entries(billingForm)) {
  //   billingFormData.push(`${key}: ${value}\n`);
  // }
  const billingFormData = Object.entries(billingForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(billingFormData);
    navigateTo("/add-order2");
  };

  const handleFormInputChange = (id: string, value: string) => {
    setBillingForm({
      ...billingForm,
      [id]: value,
    });
  };

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <LeftTab />
            </div>
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit}>
                <ShippingForm
                  billingForm={billingForm}
                  handleInputChange={handleInputChange}
                  handleFormInputChange={handleFormInputChange}
                />
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
                {check === false && (
                  <BillingForm
                    billingForm={billingForm}
                    handleInputChange={handleInputChange}
                    handleFormInputChange={handleFormInputChange}
                  />
                )}
                <div className="flex flex-col items-center justify-center mt-4 mb-2">
                  <DialogData
                    content={JSON.stringify(billingFormData)}
                    // content={billingFormData}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
