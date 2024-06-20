import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormField() {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div id="firstNameField" className="m-4 px-2">
          <Label htmlFor="firstName" className="text-slate-700">
            First name
          </Label>
          <Input
            type="text"
            placeholder="Enter First Name"
            required
            className="mt-1"
          />
        </div>
        <div id="lastNameField" className="m-4 px-2">
          <Label htmlFor="lastName" className="text-slate-700">
            Last name
          </Label>
          <Input
            type="text"
            placeholder="Enter Last Name"
            required
            className="mt-1"
          />
        </div>
        <div id="phoneField" className="m-4 pr-2 pl-2">
          <Label htmlFor="phone" className="text-slate-700">
            Phone Number
          </Label>
          <Input
            type="tel"
            placeholder="Enter Phone Number"
            required
            className="mt-1"
          />
        </div>
        <div id="alternatePhoneField" className="m-4 pr-2 pl-2">
          <Label htmlFor="alternatePhone" className="text-slate-700">
            Alternate Phone Number
          </Label>
          <Input
            type="tel"
            placeholder="Enter Alternate Phone Number"
            required
            className="mt-1"
          />
        </div>
        <div id="emailField" className="m-4 pr-2 pl-2">
          <Label htmlFor="email" className="text-slate-700">
            Email address
          </Label>
          <Input
            type="email"
            placeholder="Enter Email"
            required
            className="mt-1"
          />
        </div>
        <div id="selectCountry" className="m-4 pr-2 pl-2">
          <Label htmlFor="country" className="text-slate-700">
            Select Country
          </Label>
          <Select>
            <SelectTrigger className="w-full">
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
        <div id="addressField" className="m-4 pr-2 pl-2">
          <Label htmlFor="address" className="text-slate-700">
            Address
          </Label>
          <Input
            type="text"
            placeholder="Enter Address"
            required
            className="mt-1"
          />
        </div>
        <div id="address1Field" className="m-4 pr-2 pl-2">
          <Label htmlFor="address1" className="text-slate-700">
            Address 1
          </Label>
          <Input
            type="text"
            placeholder="Enter Address 1"
            required
            className="mt-1"
          />
        </div>
        <div id="landmarkField" className="m-4 pr-2 pl-2">
          <Label htmlFor="landmark" className="text-slate-700">
            Landmark
          </Label>
          <Input
            type="text"
            placeholder="Enter Landmark"
            required
            className="mt-1"
          />
        </div>
        <div id="address2Field" className="m-4 pr-2 pl-2">
          <Label htmlFor="address2" className="text-slate-700">
            Address 2
          </Label>
          <Input
            type="text"
            placeholder="Enter Address 2"
            required
            className="mt-1"
          />
        </div>
        <div id="pinCodeField" className="m-4 pr-2 pl-2">
          <Label htmlFor="pincode" className="text-slate-700">
            Pincode
          </Label>
          <Input
            type="password"
            maxLength={6}
            placeholder="Enter Pincode"
            required
          />
        </div>
        <div id="cityField" className="m-4 pr-2 pl-2">
          <Label htmlFor="city" className="text-slate-700">
            City
          </Label>
          <Input
            type="text"
            placeholder="Enter City"
            required
            className="mt-1"
          />
        </div>
        <div id="selectState" className="m-4 pr-2 pl-2">
          <Label htmlFor="state" className="text-slate-700">
            Select State
          </Label>
          <Select>
            <SelectTrigger className="w-full">
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
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Shipping & Billing Address are same.
          </label>
        </div>
      </div>
    </>
  );
}
