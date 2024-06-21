import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SGFormField from "../elements/SGFormField";

export default function BuyerShippingDetailsForm({
  handleInputChange,
  billingForm,
  handleFormInputChange,
}) {
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
        <div id="countryField" className="m-2">
          <Label htmlFor="country" className="">
            Select Country <span className="text-red-600">*</span>
          </Label>
          <Select
            onValueChange={(value) => handleFormInputChange("country", value)}
            name="country"
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="afghanistan">Afghanistan (AFG)</SelectItem>
                <SelectItem value="alandislands">
                  Aland Islands (ALA)
                </SelectItem>
                <SelectItem value="albania">Albania (ALB)</SelectItem>
                <SelectItem value="algeria">Algeria (DZA)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
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
        <div id="selectState" className="m-2">
          <Label htmlFor="state" className="">
            Select State <span className="text-red-600">*</span>
          </Label>
          <Select
            onValueChange={(value) => handleFormInputChange("state", value)}
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="uttarPradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="banglore">Banglore</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
