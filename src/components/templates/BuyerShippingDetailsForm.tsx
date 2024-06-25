import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";

export default function BuyerShippingDetailsForm({
  billingForm,
  setBillingForm,
  handleChangeShippingDetails,
  handleChangeProfileDetails,
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
          inputValue={billingForm.profileDetails[0].firstName}
          onChangeFn={(event) => handleChangeProfileDetails(0, event)}
        />
        <SGFormField
          name="lastName"
          label="Last Name"
          type="text"
          required
          placeholder="Enter Last Name"
          inputValue={billingForm.profileDetails[0].lastName}
          onChangeFn={(event) => handleChangeProfileDetails(0, event)}
        />
        <SGFormField
          name="phone"
          label="Phone Number"
          type="tel"
          required
          pattern="[0-9]{10}"
          placeholder="Enter Number"
          inputValue={billingForm.profileDetails[0].phone}
          onChangeFn={(event) => handleChangeProfileDetails(0, event)}
        />
        <SGFormField
          name="alternatePhone"
          label="Alternate Number"
          type="tel"
          required
          pattern="[0-9]{10}"
          placeholder="Enter Number"
          inputValue={billingForm.profileDetails[0].alternatePhone}
          onChangeFn={(event) => handleChangeProfileDetails(0, event)}
        />
        <SGFormField
          name="email"
          label="Email"
          type="email"
          required
          placeholder="Enter Email"
          inputValue={billingForm.profileDetails[0].email}
          onChangeFn={(event) => handleChangeProfileDetails(0, event)}
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
              inputValue={billingForm.shippingDetails[0].houseNumber}
              onChangeFn={(event) => handleChangeShippingDetails(0, event)}
            />
            <SGFormField
              name="locality"
              label="Locality"
              type="text"
              required
              placeholder="Enter Locality"
              inputValue={billingForm.shippingDetails[0].locality}
              onChangeFn={(event) => handleChangeShippingDetails(0, event)}
            />
            <SGFormField
              name="street"
              label="Street Name"
              type="text"
              required
              placeholder="Enter Street Name"
              inputValue={billingForm.shippingDetails[0].street}
              onChangeFn={(event) => handleChangeShippingDetails(0, event)}
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
              inputValue={billingForm.shippingDetails[0].address1}
              onChangeFn={(event) => handleChangeShippingDetails(0, event)}
            />
            <SGFormField
              name="address2"
              label="Address 2"
              type="text"
              required
              placeholder="Enter Address 2"
              inputValue={billingForm.shippingDetails[0].address2}
              onChangeFn={(event) => handleChangeShippingDetails(0, event)}
            />
            <SGFormField
              name="landmark"
              label="Landmark"
              type="text"
              required
              placeholder="Enter Landmark"
              inputValue={billingForm.shippingDetails[0].landmark}
              onChangeFn={(event) => handleChangeShippingDetails(0.0, event)}
            />
          </>
        )}
        <SGFormField
          name="pincode"
          label="Pincode"
          type="text"
          required
          placeholder="Enter Pincode"
          inputValue={billingForm.shippingDetails[0].pincode}
          onChangeFn={(event) => handleChangeShippingDetails(0, event)}
        />
        <SGFormField
          name="city"
          label="City"
          type="text"
          required
          placeholder="Enter City"
          inputValue={billingForm.shippingDetails[0].city}
          onChangeFn={(event) => handleChangeShippingDetails(0, event)}
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
