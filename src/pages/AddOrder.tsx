import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import BuyerShippingDetailsForm from "@/components/templates/BuyerShippingDetailsForm";
import BuyerBillingDetailsForm from "@/components/templates/BuyerBillingDetailsForm";
import LeftTab1 from "@/components/templates/LeftTab1";
import { updateBillingDetails } from "@/reducers/billingDetailsReducer";
import { updateShipDetails } from "@/reducers/shipDetailsReducer";
import { updateProfileDetails } from "@/reducers/profileReducer";

export default function AddOrder() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  const billingDetailsForm = useSelector(
    (state: RootState) => state.billingDetails
  );
  // Checkbox state
  const [check, setCheck] = useState(true);
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile Details", profileDetailsForm);
    console.log("Billing Details", billingDetailsForm);
    console.log("Shipping Details", shipDetailsForm);
    navigateTo("/add-order2", {
      state: {
        profileDetailsForm,
        shipDetailsForm,
        billingDetailsForm,
      },
    });
  };
  // profile form input change
  const handleInputProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateProfileDetails({ [name]: value }));
  };
  const handleChangeShippingDetails = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateShipDetails({ [name]: value }));
  };

  // shipping details form input change select field
  const handleInputShipDetailsChange = (name, value) => {
    //dispatch('action with type')
    // dispatch(updateShipDetails({ [name]: value }));
  };

  // billing details form input change
  const handleInputBillingDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateBillingDetails({ [name]: value })); //
  };

  //checkbox change
  const handleCheckboxChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);

    if (isChecked) {
      dispatch(
        updateBillingDetails({
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
        })
      );
    }
  };
  return (
    <main className="p-4">
      <div className="m-4 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 lg:overflow-y-auto max-h-[600px]">
            <LeftTab1
              profileDetailsForm={profileDetailsForm}
              shipDetailsForm={shipDetailsForm}
              billingDetailsForm={billingDetailsForm}
            />
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} method="post">
              {/* Buyer shipping details form */}
              <BuyerShippingDetailsForm
                setShipDetailsForm={handleInputShipDetailsChange}
                handleChangeProfileDetails={handleInputProfileChange}
                handleChangeShippingDetails={handleChangeShippingDetails}
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
                  billingDetailsForm={billingDetailsForm}
                  setBillingDetailsForm={handleInputBillingDetailsChange}
                  handleInputBillingDetailsChange={
                    handleInputBillingDetailsChange
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
