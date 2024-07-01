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
import LeftTab from "@/components/templates/LeftTab";
import NextBackSubmitButton from "@/components/templates/NextBackSubmitButtons";

export default function BuyerDetailsForm() {
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

  // checkbox if checked then billing form details update
  const handleCheckboxChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);
    if (isChecked) {
      dispatch(
        updateBillMultipleFields({
          addressOne: ship.addressOne,
          landmark: ship.landmark,
          addressTwo: ship.addressTwo,
          pincode: ship.pincode,
          city: ship.city,
          state: ship.state,
          country: ship.country,
          house: ship.houseNumber,
          locality: ship.locality,
          street: ship.street,
        })
      );
    }
  };

  return (
    <main className="p-4">
      <div className="m-4 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 lg:overflow-y-auto max-h-[600px]">
            <LeftTab />
          </div>
          <div className="lg:col-span-3 lg:overflow-y-auto lg:max-h-[540px]">
            <form onSubmit={handleSubmit} method="post">
              {/* Buyer shipping details form */}
              <div className="lg:max-h-screen">
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
                    handleInputBillingChange={handleInputBillingChange}
                    handleSelectCountryBillingChange={
                      handleSelectCountryBillingChange
                    }
                    handleSelectStateBillingChange={
                      handleSelectStateBillingChange
                    }
                  />
                )}
              </div>
              {/* Submit button moved inside form */}
              <div className="mt-8 flex items-center flex-col">
                <NextBackSubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
