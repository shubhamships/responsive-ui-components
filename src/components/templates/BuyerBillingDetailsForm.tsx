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
          name="countryBilling"
          label="Country"
          placeholder="Select Country"
          required={true}
          data={selectCountry}
          setSelectValueObj={handleSelectCountryBillingChange}
        />
        {bill.countryBilling === "afghanistan" ? (
          <>
            <SGFormField
              name="houseBilling"
              label="House Number"
              type="text"
              required
              pattern="^\S.*$"
              message="Don't add spaces at beginning"
              placeholder="Enter House No."
              inputValue={bill.houseBilling}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="localityBilling"
              label="Locality"
              type="text"
              message="Don't add spaces at beginning"
              required
              pattern="^\S.*$"
              placeholder="Enter Locality"
              inputValue={bill.localityBilling}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="streetBilling"
              label="Street"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Street"
              inputValue={bill.streetBilling}
              onChangeFn={handleInputBillingChange}
            />
          </>
        ) : (
          <>
            <SGFormField
              name="address1Billing"
              label="Address 1"
              type="text"
              required
              message="Don't add spaces at beginning"
              pattern="^\S.*$"
              placeholder="Enter Address"
              inputValue={bill.address1Billing}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="address2Billing"
              label="Address 2"
              type="text"
              message="Don't add spaces at beginning"
              required
              pattern="^\S.*$"
              placeholder="Enter Address"
              inputValue={bill.address2Billing}
              onChangeFn={handleInputBillingChange}
            />
            <SGFormField
              name="landmarkBilling"
              label="Landmark"
              message="Don't add spaces at beginning"
              type="text"
              pattern="^\S.*$"
              required
              placeholder="Enter Landmark"
              inputValue={bill.landmarkBilling}
              onChangeFn={handleInputBillingChange}
            />
          </>
        )}
        <SGFormField
          name="cityBilling"
          label="City"
          pattern="^\S.*$"
          type="text"
          required
          message="Don't add spaces at beginning"
          placeholder="Enter City"
          inputValue={bill.cityBilling}
          onChangeFn={handleInputBillingChange}
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
          inputValue={bill.pincodeBilling}
          onChangeFn={handleInputBillingChange}
        />
      </div>
    </>
  );
}
