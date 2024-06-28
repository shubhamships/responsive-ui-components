import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
export default function BuyerBillingDetailsForm({
  billingDetailsForm,
  handleInputBillingDetailsChange,
  handleSelectCountryBillingChange,
  handleSelectStateBillingChange,
}) {
  const selectCountry = [
    { key: "afghanistan", value: "Afghanistan" },
    { key: "alandislands", value: "Aland Islands" },
    { key: "albania", value: "Albania" },
    { key: "algeria", value: "Algeria" },
  ];
  const selectState = [
    { key: "delhi", value: "Delhi" },
    { key: "banglore", value: "Banglore" },
    { key: "pune", value: "Pune" },
  ];
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Buyer Billing Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <SGFormSelect
          name="countryBilling"
          label="Country"
          placeholder="Select Country"
          required={true}
          data={selectCountry}
          setSelectValueObj={handleSelectCountryBillingChange}
        />
        {billingDetailsForm.countryBilling === "afghanistan" ? (
          <>
            <SGFormField
              name="houseBilling"
              label="House Number"
              type="text"
              required
              pattern="\S(.*\S)?"
              message="Don't add spaces at beginning or end"
              placeholder="Enter Houe No."
              inputValue={billingDetailsForm.houseBilling}
              onChangeFn={handleInputBillingDetailsChange}
            />
            <SGFormField
              name="localityBilling"
              label="Locality"
              type="text"
              message="Don't add spaces at beginning or end"
              required
              pattern="\S(.*\S)?"
              placeholder="Enter Locality"
              inputValue={billingDetailsForm.localityBilling}
              onChangeFn={handleInputBillingDetailsChange}
            />
            <SGFormField
              name="streetBilling"
              label="Street"
              message="Don't add spaces at beginning or end"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Street"
              inputValue={billingDetailsForm.streetBilling}
              onChangeFn={handleInputBillingDetailsChange}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="address1Billing"
              label="Address 1"
              type="text"
              required
              message="Don't add spaces at beginning or end"
              pattern="\S(.*\S)?"
              placeholder="Enter Address"
              inputValue={billingDetailsForm.address1Billing}
              onChangeFn={handleInputBillingDetailsChange}
            />
            <SGFormField
              name="address2Billing"
              label="Address 2"
              type="text"
              message="Don't add spaces at beginning or end"
              required
              pattern="\S(.*\S)?"
              placeholder="Enter Address"
              inputValue={billingDetailsForm.address2Billing}
              onChangeFn={handleInputBillingDetailsChange}
            />
            <SGFormField
              name="landmarkBilling"
              label="Landmark"
              message="Don't add spaces at beginning or end"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Landmark"
              inputValue={billingDetailsForm.landmarkBilling}
              onChangeFn={handleInputBillingDetailsChange}
            />
          </>
        )}
        <SGFormField
          name="cityBilling"
          label="City"
          pattern="\S(.*\S)?"
          type="text"
          required
          message="Don't add spaces at beginning or end"
          placeholder="Enter City"
          inputValue={billingDetailsForm.cityBilling}
          onChangeFn={handleInputBillingDetailsChange}
        />
        <SGFormSelect
          name="stateBilling"
          label="State"
          required={true}
          placeholder="Select State"
          data={selectState}
          setSelectValueObj={handleSelectStateBillingChange}
        />
        <SGFormField
          name="pincodeBilling"
          label="Pincode"
          type="text"
          message="Enter digits of length 6"
          required
          pattern="[0-9]{6}"
          placeholder="Enter Pincode"
          inputValue={billingDetailsForm.pincodeBilling}
          onChangeFn={handleInputBillingDetailsChange}
        />
      </div>
    </>
  );
}
