import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function BuyerShippingDetailsForm({
  handleChangeProfileDetails,
  handleChangeShippingDetails,
  handleSelectCountryChange,
  handleSelectShippingStateChange,
}) {
  const selectCountry = [
    { key: "afghanistan", value: "Afghanistan" },
    { key: "alandislands", value: "Aland Islands" },
    { key: "albania", value: "Albania" },
    { key: "algeria", value: "Algeria" },
  ];
  const listStatesData = [
    { key: "delhi", value: "Delhi" },
    { key: "banglore", value: "Banglore" },
    { key: "pune", value: "Pune" },
  ];

  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  return (
    <>
      <div className="my-4 font-bold text-cyan-500 text-2xl">
        Buyer Shipping Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <SGFormField
          name="firstName"
          label="First Name"
          type="text"
          message="Don't add spaces at beginning or end"
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
          message="Don't add spaces at beginning or end"
          required
          pattern="\S(.*\S)?"
          placeholder="Enter Last Name"
          inputValue={profileDetailsForm.lastName}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="phone"
          label="Phone Number"
          type="text"
          message="Add digits of length 10"
          required
          placeholder="Enter Number"
          pattern="[0-9]{10}"
          inputValue={profileDetailsForm.phone}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="alternatePhone"
          label="Alternate Number"
          type="text"
          message="Add digits of length 10"
          required
          pattern="[0-9]{10}"
          placeholder="Enter Number"
          inputValue={profileDetailsForm.alternatePhone}
          onChangeFn={handleChangeProfileDetails}
        />
        <SGFormField
          name="email"
          label="Email"
          type="email"
          message="Add email in form mail@email.com"
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
          required
          setSelectValueObj={handleSelectCountryChange}
        />
        {shipDetailsForm.country === "afghanistan" ? (
          <>
            <SGFormField
              name="houseNumber"
              label="House Number"
              type="text"
              pattern="\S(.*\S)?"
              message="Don't add spaces at beginning or end"
              required
              placeholder="Enter House Number"
              inputValue={shipDetailsForm.houseNumber}
              onChangeFn={handleChangeShippingDetails}
            />
            <SGFormField
              name="locality"
              label="Locality"
              message="Don't add spaces at beginning or end"
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
              message="Don't add spaces at beginning or end"
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
              message="Don't add spaces at beginning or end"
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
              message="Don't add spaces at beginning or end"
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
              message="Don't add spaces at beginning or end"
              pattern="\S(.*\S)?"
              required
              placeholder="Enter Landmark"
              inputValue={shipDetailsForm.landmark}
              onChangeFn={handleChangeShippingDetails}
            />
          </>
        )}
        <SGFormField
          name="city"
          label="City"
          message="Don't add spaces at beginning or end"
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
          required
          placeholder="Select State"
          data={listStatesData}
          setSelectValueObj={handleSelectShippingStateChange}
        />
        <SGFormField
          name="pincode"
          label="Pincode"
          type="text"
          message="Enter digits of length 6"
          required
          pattern="[0-9]{6}"
          placeholder="Enter Pincode"
          inputValue={shipDetailsForm.pincode}
          onChangeFn={handleChangeShippingDetails}
        />
      </div>
    </>
  );
}
