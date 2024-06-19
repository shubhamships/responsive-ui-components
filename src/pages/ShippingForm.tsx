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

export default function ShippingForm({ handleInputChange, formData }) {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div id="firstNameField" className="m-4 px-2">
          <Label htmlFor="firstName">
            First name <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            required
            className="mt-2"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div id="lastNameField" className="m-4 px-2">
          <Label htmlFor="lastName">
            Last name <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            required
            className="mt-2"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div id="phoneField" className="m-4 pr-2 pl-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-red-600">*</span>
          </Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Enter Phone Number"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="alternatePhoneField" className="m-4 pr-2 pl-2">
          <Label htmlFor="alternatePhone">
            Alternate Phone Number <span className="text-red-600">*</span>
          </Label>
          <Input
            type="tel"
            id="alternatePhone"
            placeholder="Enter Alternate Phone Number"
            required
            value={formData.alternatePhone}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="emailField" className="m-4 pr-2 pl-2">
          <Label htmlFor="email">
            Email address <span className="text-red-600">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            className="mt-2"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div id="selectCountry" className="m-4 pr-2 pl-2">
          <Label htmlFor="country">
            Select Country <span className="text-red-600">*</span>
          </Label>
          <Select>
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
        <div id="addressField1" className="m-4 pr-2 pl-2">
          <Label htmlFor="address1">
            Address 1 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Address 1"
            required
            className="mt-2"
            id="address1"
            value={formData.address1}
            onChange={handleInputChange}
          />
        </div>
        <div id="address2Field" className="m-4 pr-2 pl-2">
          <Label htmlFor="address2">
            Address 2 <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="address2"
            placeholder="Enter Address 2"
            required
            value={formData.address2}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="landmarkField" className="m-4 pr-2 pl-2">
          <Label htmlFor="landmark">
            Landmark <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Landmark"
            required
            className="mt-2"
            id="landmark"
            value={formData.landmark}
            onChange={handleInputChange}
          />
        </div>
        <div id="pinCodeField" className="m-4 pr-2 pl-2">
          <Label htmlFor="pincode">
            Pincode <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            maxLength={6}
            placeholder="Enter Pincode"
            required
            id="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <div id="cityField" className="m-4 pr-2 pl-2">
          <Label htmlFor="city">
            City <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter City"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="mt-2"
          />
        </div>
        <div id="selectState" className="m-4 pr-2 pl-2">
          <Label htmlFor="state">
            Select State <span className="text-red-600">*</span>
          </Label>
          <Select>
            <SelectTrigger
              className="w-full mt-1"
              value={formData.state}
              id="state"
              onChange={() => handleInputChange}
            >
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
