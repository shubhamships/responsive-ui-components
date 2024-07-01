import { useSelector } from "react-redux";
import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
import { RootState } from "@/redux/store";
export default function BuyerBillingDetailsForm({
  handleInputBillingChange,
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
  const { bill } = useSelector((state: RootState) => state.addOrder);
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Buyer Billing Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <SGFormSelect
          name="country"
          label="Country"
          placeholder="Select Country"
          required={true}
          data={selectCountry}
          setSelectValueObj={handleSelectCountryBillingChange}
        />
        {bill.countryBilling === "afghanistan" ? (
          <>
            <SGFormField
              name="house"
              label="House Number"
              type="text"
              required
              pattern="^\S.*$"
              message="Don't add spaces at beginning"
              placeholder="Enter House No."
              inputValue={bill.house}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="locality"
              label="Locality"
              type="text"
              message="Don't add spaces at beginning"
              required
              pattern="^\S.*$"
              placeholder="Enter Locality"
              inputValue={bill.locality}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="street"
              label="Street"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Street"
              inputValue={bill.street}
              onChangeFn={handleInputBillingChange}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="addressOne"
              label="Address 1"
              type="text"
              required
              message="Don't add spaces at beginning"
              pattern="^\S.*$"
              placeholder="Enter Address"
              inputValue={bill.addressOne}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="addressTwo"
              label="Address 2"
              type="text"
              message="Don't add spaces at beginning"
              required
              pattern="^\S.*$"
              placeholder="Enter Address"
              inputValue={bill.addressTwo}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="landmark"
              label="Landmark"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Landmark"
              inputValue={bill.landmark}
              onChangeFn={handleInputBillingChange}
            />
          </>
        )}
        <SGFormField
          name="city"
          label="City"
          pattern="^\S.*$"
          type="text"
          required
          message="Don't add spaces at beginning"
          placeholder="Enter City"
          inputValue={bill.city}
          onChangeFn={handleInputBillingChange}
        />
        <SGFormSelect
          name="state"
          label="State"
          required={true}
          placeholder="Select State"
          data={selectState}
          setSelectValueObj={handleSelectStateBillingChange}
        />
        <SGFormField
          name="pincode"
          label="Pincode"
          type="text"
          message="Enter digits of length 6"
          required
          pattern="[0-9]{6}"
          placeholder="Enter Pincode"
          inputValue={bill.pincode}
          onChangeFn={handleInputBillingChange}
        />
      </div>
    </>
  );
}
