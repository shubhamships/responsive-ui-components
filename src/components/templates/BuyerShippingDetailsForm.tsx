import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function BuyerShippingDetailsForm({
  handleInputProfileChange,
  handleInputShippingChange,
  handleSelectShippingCountryChange,
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

  const profileDetailsForm = useSelector(
    (state: RootState) => state.addOrder.profile
  );
  const shipDetailsForm = useSelector(
    (state: RootState) => state.addOrder.ship
  );
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
          message="Don't add spaces at beginning"
          required
          pattern="^\S.*$"
          placeholder="Enter First Name"
          inputValue={profileDetailsForm.firstName}
          onChangeFn={handleInputProfileChange}
        />
        <SGFormField
          name="lastName"
          label="Last Name"
          type="text"
          message="Don't add spaces at beginning"
          required
          pattern="^\S.*$"
          placeholder="Enter Last Name"
          inputValue={profileDetailsForm.lastName}
          onChangeFn={handleInputProfileChange}
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
          onChangeFn={handleInputProfileChange}
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
          onChangeFn={handleInputProfileChange}
        />
        <SGFormField
          name="email"
          label="Email"
          type="email"
          message="Add email in form mail@email.com"
          required
          placeholder="Enter Email"
          inputValue={profileDetailsForm.email}
          onChangeFn={handleInputProfileChange}
        />

        <SGFormSelect
          name="country"
          label="Country"
          placeholder="Select Country"
          data={selectCountry}
          required
          setSelectValueObj={handleSelectShippingCountryChange}
        />
        {shipDetailsForm.country === "afghanistan" ? (
          <>
            <SGFormField
              name="houseNumber"
              label="House Number"
              type="text"
              pattern="^\S.*$"
              message="Don't add spaces at beginning"
              required
              placeholder="Enter House Number"
              inputValue={shipDetailsForm.houseNumber}
              onChangeFn={handleInputShippingChange}
            />
            <SGFormField
              name="locality"
              label="Locality"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Locality"
              inputValue={shipDetailsForm.locality}
              onChangeFn={handleInputShippingChange}
            />
            <SGFormField
              name="street"
              label="Street Name"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Street Name"
              inputValue={shipDetailsForm.street}
              onChangeFn={handleInputShippingChange}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="addressOne"
              message="Don't add spaces at beginning"
              label="Address 1"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Address 1"
              inputValue={shipDetailsForm.addressOne}
              onChangeFn={handleInputShippingChange}
            />
            <SGFormField
              name="addressTwo"
              label="Address 2"
              type="text"
              message="Don't add spaces at beginning"
              pattern="^\S.*$"
              required
              placeholder="Enter Address 2"
              inputValue={shipDetailsForm.addressTwo}
              onChangeFn={handleInputShippingChange}
            />
            <SGFormField
              name="landmark"
              label="Landmark"
              type="text"
              message="Don't add spaces at beginning"
              pattern="^\S.*$"
              required
              placeholder="Enter Landmark"
              inputValue={shipDetailsForm.landmark}
              onChangeFn={handleInputShippingChange}
            />
          </>
        )}
        <SGFormField
          name="city"
          label="City"
          message="Don't add spaces at beginning"
          type="text"
          pattern="^\S.*$"
          required
          placeholder="Enter City"
          inputValue={shipDetailsForm.city}
          onChangeFn={handleInputShippingChange}
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
          onChangeFn={handleInputShippingChange}
        />
      </div>
    </>
  );
}
