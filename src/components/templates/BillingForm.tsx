import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BillingForm({
  handleInputChange,
  billingForm,
  handleBillingState,
  handleBillingCountry,
}) {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div id="selectcountryBilling" className="m-2">
          <Label htmlFor="countryBilling">
            Select Country <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleBillingCountry}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Country</SelectLabel>
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
        <div id="addressField1Billing" className="m-2">
          <Label htmlFor="address1Billing">
            Address 1 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Address 1"
            required
            className="mt-2"
            id="address1Billing"
            value={billingForm.address1Billing}
            onChange={handleInputChange}
          />
        </div>
        <div id="address2FieldBilling" className="m-2">
          <Label htmlFor="address2Billing">
            Address 2 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="address2Billing"
            placeholder="Enter Address 2"
            required
            value={billingForm.address2Billing}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="landmarkFieldBilling" className="m-2">
          <Label htmlFor="landmarkBilling">
            Landmark <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Landmark"
            required
            className="mt-2"
            id="landmarkBilling"
            value={billingForm.landmarkBilling}
            onChange={handleInputChange}
          />
        </div>
        <div id="pinCodeFieldBilling" className="m-2">
          <Label htmlFor="pincodeBilling">
            Pincode <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            maxLength={6}
            placeholder="Enter Pincode"
            required
            id="pincodeBilling"
            value={billingForm.pincodeBilling}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="cityFieldBilling" className="m-2">
          <Label htmlFor="cityBilling">
            City <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter City"
            id="cityBilling"
            value={billingForm.cityBilling}
            onChange={handleInputChange}
            required
            className="mt-2"
          />
        </div>
        <div id="selectstateBilling" className="m-2">
          <Label htmlFor="stateBilling">
            Select State <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleBillingState}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select State</SelectLabel>
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
