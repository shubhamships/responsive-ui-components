import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
export default function BuyerBillingDetailsForm({
  billingForm,
  setBillingForm,
  handleChange,
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
          setSelectValueObj={setBillingForm}
        />
        <SGFormField
          name="address1Billing"
          label="Address 1"
          type="text"
          required
          placeholder="Enter Address"
          inputValue={billingForm.billingDetails[0].address1Billing}
          onChangeFn={(event) => handleChange(0, event)}
        />
        <SGFormField
          name="address2Billing"
          label="Address 2"
          type="text"
          required
          placeholder="Enter Address"
          inputValue={billingForm.billingDetails[0].address2Billing}
          onChangeFn={(event) => handleChange(0, event)}
        />
        <SGFormField
          name="landmarkBilling"
          label="Landmark"
          type="text"
          required
          placeholder="Enter Landmark"
          inputValue={billingForm.billingDetails[0].landmarkBilling}
          onChangeFn={(event) => handleChange(0, event)}
        />
        <SGFormField
          name="pincodeBilling"
          label="Pincode"
          type="text"
          required
          placeholder="Enter Pincode"
          inputValue={billingForm.billingDetails[0].pincodeBilling}
          onChangeFn={(event) => handleChange(0, event)}
        />
        <SGFormField
          name="cityBilling"
          label="City"
          type="text"
          required
          placeholder="Enter City"
          inputValue={billingForm.billingDetails[0].cityBilling}
          onChangeFn={(event) => handleChange(0, event)}
        />
        <SGFormSelect
          name="stateBilling"
          label="State"
          required={true}
          placeholder="Select State"
          data={selectState}
          setSelectValueObj={setBillingForm}
        />
      </div>
    </>
  );
}
