import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import BuyerShippingDetailsForm from "@/components/templates/BuyerShippingDetailsForm";
import BuyerBillingDetailsForm from "@/components/templates/BuyerBillingDetailsForm";
import {
  updateProfileField,
  updateShipField,
  updateShippingCountry,
  updateShippingState,
  updateBillField,
  updateBillMultipleFields,
  updateBillingCountry,
  updateBillingState,
} from "@/redux/actions";
import LeftTabOne from "@/components/templates/LeftTabOne";

export default function AddProfileAddress() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { profile, ship, bill } = useSelector(
    (state: RootState) => state.addOrder
  );

  // Checkbox state
  const [check, setCheck] = useState(true);
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile Details", profile);
    console.log("Billing Details", bill);
    console.log("Shipping Details", ship);
    navigateTo("/add-order2");
  };
  // profile form input change
  const handleInputProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateProfileField(name, value));
  };
  // profile form input change
  const handleInputShippingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateShipField(name, value));
  };
  // billing details form input change
  const handleInputBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateBillField(name, value));
  };
  // shipping form country change
  const handleSelectShippingCountryChange = (selectedCountry: string) => {
    dispatch(updateShippingCountry(selectedCountry));
  };
  // billing form country change
  const handleSelectCountryBillingChange = (selectedCountry: string) => {
    dispatch(updateBillingCountry(selectedCountry));
  };
  // shipping form state change
  const handleSelectShippingStateChange = (selectedState: string) => {
    dispatch(updateShippingState(selectedState));
  };
  // billing form state change
  const handleSelectStateBillingChange = (selectedState: string) => {
    dispatch(updateBillingState(selectedState));
  };
  //checkbox if checked then billing form details update
  const handleCheckboxChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);
    if (isChecked) {
      dispatch(
        updateBillMultipleFields({
          address1Billing: ship.address1,
          landmarkBilling: ship.landmark,
          address2Billing: ship.address2,
          pincodeBilling: ship.pincode,
          cityBilling: ship.city,
          stateBilling: ship.state,
          countryBilling: ship.country,
          houseBilling: ship.houseNumber,
          localityBilling: ship.locality,
          streetBilling: ship.street,
        })
      );
    }
  };
  return (
    <main className="p-4">
      <div className="m-4 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 lg:overflow-y-auto max-h-[600px]">
            <LeftTabOne />
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} method="post">
              {/* Buyer shipping details form */}
              <BuyerShippingDetailsForm
                handleInputProfileChange={handleInputProfileChange}
                handleInputShippingChange={handleInputShippingChange}
                handleSelectShippingCountryChange={
                  handleSelectShippingCountryChange
                }
                handleSelectShippingStateChange={
                  handleSelectShippingStateChange
                }
              />
              {/* Checkbox for billing details */}
              <div className="m-4 mb-8">
                <label className="text-cyan-600 font-bold">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    onChange={handleCheckboxChangeCheck}
                    className="mr-2"
                    id="checkbox"
                  />
                  Billing and shipping address are same.
                </label>
              </div>
              {/* Buyer billing details form if checkbox is unchecked */}
              {!check && (
                <BuyerBillingDetailsForm
                  billingDetailsForm={bill}
                  handleInputBillingChange={handleInputBillingChange}
                  handleSelectCountryBillingChange={
                    handleSelectCountryBillingChange
                  }
                  handleSelectStateBillingChange={
                    handleSelectStateBillingChange
                  }
                />
              )}
              {/* Submit button */}
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
  );
}
