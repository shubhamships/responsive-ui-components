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

export default function BuyerBillingDetailsForm({
  handleInputChange,
  billingForm,
  handleFormInputChange,
}) {
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Buyer Billing Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div id="selectcountryBilling" className="m-2">
          <Label htmlFor="countryBilling">
            Select Country <span className="text-red-600">*</span>
          </Label>
          <Select
            onValueChange={(value) =>
              handleFormInputChange("countryBilling", value)
            }
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
        <SGFormField
          name="address1Billing"
          label="Address 1"
          type="text"
          required
          placeholder="Enter Address"
          inputValue={billingForm.address1Billing}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="address2Billing"
          label="Address 2"
          type="text"
          required
          placeholder="Enter Address"
          inputValue={billingForm.address2Billing}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="landmarkBilling"
          label="Landmark"
          type="text"
          required
          placeholder="Enter Landmark"
          inputValue={billingForm.landmarkBilling}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="pincodeBilling"
          label="Pincode"
          type="text"
          required
          placeholder="Enter Pincode"
          inputValue={billingForm.pincodeBilling}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="cityBilling"
          label="City"
          type="text"
          required
          placeholder="Enter City"
          inputValue={billingForm.cityBilling}
          onChangeFn={handleInputChange}
        />
        <div id="selectstateBilling" className="m-2">
          <Label htmlFor="stateBilling">
            Select State <span className="text-red-600">*</span>
          </Label>
          <Select
            onValueChange={(value) =>
              handleFormInputChange("stateBilling", value)
            }
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
