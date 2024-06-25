import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";

export default function BuyerShippingDetailsForm({
  profileDetailsForm,
  setShipDetailsForm,
  handleChangeShippingDetails,
  shipDetailsForm,
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
          pattern="\S(.*\S)?"
          placeholder="Enter First Name"
          inputValue={profileDetailsForm.firstName}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="lastName"
          label="Last Name"
          type="text"
          required
          pattern="\S(.*\S)?"
          placeholder="Enter Last Name"
          inputValue={profileDetailsForm.lastName}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="phone"
          label="Phone Number"
          type="tel"
          required
          pattern="\S(.*\S)?"
          // pattern="[0-9]{10}"
          placeholder="Enter Number"
          inputValue={profileDetailsForm.phone}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="alternatePhone"
          label="Alternate Number"
          type="tel"
          pattern="\S(.*\S)?"
          required
          // pattern="[0-9]{10}"
          placeholder="Enter Number"
          inputValue={profileDetailsForm.alternatePhone}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="email"
          label="Email"
          type="email"
          required
          placeholder="Enter Email"
          inputValue={profileDetailsForm.email}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormSelect
          name="country"
          label="Country"
          placeholder="Select Country"
          data={selectCountry}
          required={true}
          setSelectValueObj={setShipDetailsForm}
        />
        {setShipDetailsForm.country === "afghanistan" ? (
          <>
            <SGFormField
              name="houseNumber"
              label="House Number"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter House Number"
              inputValue={shipDetailsForm.houseNumber}
              onChangeFn={handleChangeShippingDetails}
            />
            <SGFormField
              name="locality"
              label="Locality"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Locality"
              inputValue={shipDetailsForm.locality}
              onChangeFn={handleChangeShippingDetails}
            />
            <SGFormField
              name="street"
              label="Street Name"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Street Name"
              inputValue={shipDetailsForm.street}
              onChangeFn={handleChangeShippingDetails}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="address1"
              label="Address 1"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Address 1"
              inputValue={shipDetailsForm.address1}
              onChangeFn={handleChangeShippingDetails}
            />
            <SGFormField
              name="address2"
              label="Address 2"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Address 2"
              inputValue={shipDetailsForm.address2}
              onChangeFn={handleChangeShippingDetails}
            />
            <SGFormField
              name="landmark"
              label="Landmark"
              type="text"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Landmark"
              inputValue={shipDetailsForm.landmark}
              onChangeFn={handleChangeShippingDetails}
            />
          </>
        )}
        <SGFormField
          name="pincode"
          label="Pincode"
          type="text"
          required
          pattern="\S(.*\S)?"
          placeholder="Enter Pincode"
          inputValue={shipDetailsForm.pincode}
          onChangeFn={handleChangeShippingDetails}
        />
        <SGFormField
          name="city"
          label="City"
          type="text"
          pattern="\S(.*\S)?"
          required
          placeholder="Enter City"
          inputValue={shipDetailsForm.city}
          onChangeFn={handleChangeShippingDetails}
        />
        <SGFormSelect
          name="state"
          label="State"
          required={true}
          placeholder="Select State"
          data={selectState}
          setSelectValueObj={setShipDetailsForm}
        />
      </div>
    </>
  );
}
