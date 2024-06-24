import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";

export default function BuyerShippingDetailsForm({
  handleInputChange,
  billingForm,
  setBillingForm,
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
      <div className="my-4 font-bold text-cyan-500 text-2xl">
        Buyer Shipping Details
      </div>
      <div className=" grid md:grid-cols-3 md:gap-3">
        <SGFormField
          name="firstName"
          label="First Name"
          type="text"
          required
          placeholder="Enter First Name"
          inputValue={billingForm.firstName}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="lastName"
          label="Last Name"
          type="text"
          required
          placeholder="Enter Last Name"
          inputValue={billingForm.lastName}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="phone"
          label="Phone Number"
          type="tel"
          required
          placeholder="Enter Number"
          inputValue={billingForm.phone}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="alternatePhone"
          label="Alternate Number"
          type="tel"
          required
          placeholder="Enter Number"
          inputValue={billingForm.alternatePhone}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="email"
          label="Email"
          type="email"
          required
          placeholder="Enter Email"
          inputValue={billingForm.email}
          onChangeFn={handleInputChange}
        />
        <SGFormSelect
          name="country"
          label="Country"
          placeholder="Select Country"
          data={selectCountry}
          required={true}
          setSelectValueObj={setBillingForm}
        />
        {billingForm.country === "afghanistan" ? (
          <>
            <SGFormField
              name="houseNumber"
              label="House Number"
              type="text"
              required
              placeholder="Enter House Number"
              inputValue={billingForm.houseNumber}
              onChangeFn={handleInputChange}
            />
            <SGFormField
              name="locality"
              label="Locality"
              type="text"
              required
              placeholder="Enter Locality"
              inputValue={billingForm.locality}
              onChangeFn={handleInputChange}
            />
            <SGFormField
              name="street"
              label="Street Name"
              type="text"
              required
              placeholder="Enter Street Name"
              inputValue={billingForm.street}
              onChangeFn={handleInputChange}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="address1"
              label="Address 1"
              type="text"
              required
              placeholder="Enter Address 1"
              inputValue={billingForm.address1}
              onChangeFn={handleInputChange}
            />
            <SGFormField
              name="address2"
              label="Address 2"
              type="text"
              required
              placeholder="Enter Address 2"
              inputValue={billingForm.address2}
              onChangeFn={handleInputChange}
            />
            <SGFormField
              name="landmark"
              label="Landmark"
              type="text"
              required
              placeholder="Enter Landmark"
              inputValue={billingForm.landmark}
              onChangeFn={handleInputChange}
            />
          </>
        )}
        <SGFormField
          name="pincode"
          label="Pincode"
          type="text"
          required
          placeholder="Enter Pincode"
          inputValue={billingForm.pincode}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="city"
          label="City"
          type="text"
          required
          placeholder="Enter City"
          inputValue={billingForm.city}
          onChangeFn={handleInputChange}
        />
        <SGFormSelect
          name="state"
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
