import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShippingForm({
  handleInputChange,
  billingForm,
  handleState,
  handleCountry,
}) {
  return (
    <>
      <div className="my-4 font-bold text-cyan-500 text-2xl">
        Buyer Shipping Details
      </div>
      <div className=" grid md:grid-cols-2">
        <div id="firstNameField" className="m-2">
          <Label htmlFor="firstName" className="">
            First name <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            required
            className="mt-2"
            value={billingForm.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div id="lastNameField" className="m-2">
          <Label htmlFor="lastName" className="">
            Last name <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            required
            className="mt-2"
            value={billingForm.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div id="phoneField" className="m-2">
          <Label htmlFor="phone" className="">
            Phone Number <span className="text-red-600">*</span>
          </Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Enter Phone Number"
            required
            value={billingForm.phone}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="alternatePhoneField" className="m-2">
          <Label htmlFor="alternatePhone" className="">
            Alternate Number <span className="text-red-600">*</span>
          </Label>
          <Input
            type="tel"
            id="alternatePhone"
            placeholder="Enter Alternate Phone Number"
            required
            value={billingForm.alternatePhone}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="emailField" className="m-2">
          <Label htmlFor="email" className="">
            Email address <span className="text-red-600">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            className="mt-2"
            value={billingForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div id="selectCountry" className="m-2">
          <Label htmlFor="country" className="">
            Select Country <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleCountry}>
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
        <div id="addressField1" className="m-2">
          <Label htmlFor="address1" className="">
            Address 1 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Address 1"
            required
            className="mt-2"
            id="address1"
            value={billingForm.address1}
            onChange={handleInputChange}
          />
        </div>
        <div id="address2Field" className="m-2">
          <Label htmlFor="address2" className="">
            Address 2 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="address2"
            placeholder="Enter Address 2"
            required
            value={billingForm.address2}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="landmarkField" className="m-2">
          <Label htmlFor="landmark" className="">
            Landmark <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Landmark"
            required
            className="mt-2"
            id="landmark"
            value={billingForm.landmark}
            onChange={handleInputChange}
          />
        </div>
        <div id="pinCodeField" className="m-2">
          <Label htmlFor="pincode" className="">
            Pincode <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            maxLength={6}
            placeholder="Enter Pincode"
            required
            id="pincode"
            value={billingForm.pincode}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="cityField" className="m-2">
          <Label htmlFor="city" className="">
            City <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter City"
            id="city"
            value={billingForm.city}
            onChange={handleInputChange}
            required
            className="mt-2"
          />
        </div>
        <div id="selectState" className="m-2">
          <Label htmlFor="state" className="">
            Select State <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleState}>
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
