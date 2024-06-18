import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddOrder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    alternatePhone: "",
    email: "",
    country: "",
    address1: "",
    landmark: "",
    address2: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-4 p-4">
        <p>ADD ORDERS</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2">
          <div id="firstNameField" className="m-4 px-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              required
              className="mt-1"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div id="lastNameField" className="m-4 px-2">
            <Label htmlFor="lastName">Last name</Label>

            <Input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              required
              className="mt-1"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div id="phoneField" className="m-4 pr-2 pl-2">
            <Label htmlFor="phone">Phone Number</Label>

            <Input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div id="alternatePhoneField" className="m-4 pr-2 pl-2">
            <Label htmlFor="alternatePhone">Alternate Phone Number</Label>

            <Input
              type="tel"
              id="alternatePhone"
              placeholder="Enter Alternate Phone Number"
              required
              value={formData.alternatePhone}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div id="emailField" className="m-4 pr-2 pl-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              className="mt-1"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div id="selectCountry" className="m-4 pr-2 pl-2">
            <Label htmlFor="country">Select Country</Label>
            <Select>
              <SelectTrigger
                className="w-full mt-1"
                value={formData.country}
                onChange={() => handleInputChange}
              >
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
            <Label htmlFor="address1">Address 1</Label>
            <Input
              type="text"
              placeholder="Enter Address 1"
              required
              className="mt-1"
              id="address1"
              value={formData.address1}
              onChange={handleInputChange}
            />
          </div>
          <div id="address2Field" className="m-4 pr-2 pl-2">
            <Label htmlFor="address2">Address 2</Label>
            <Input
              type="text"
              id="address2"
              placeholder="Enter Address 2"
              required
              value={formData.address2}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
          <div id="landmarkField" className="m-4 pr-2 pl-2">
            <Label htmlFor="landmark">Landmark</Label>
            <Input
              type="text"
              placeholder="Enter Landmark"
              required
              className="mt-1"
              id="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
            />
          </div>

          <div id="pinCodeField" className="m-4 pr-2 pl-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              type="text"
              maxLength={6}
              placeholder="Enter Pincode"
              required
              id="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div id="cityField" className="m-4 pr-2 pl-2">
            <Label htmlFor="city">City</Label>

            <Input
              type="text"
              placeholder="Enter City"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div id="selectState" className="m-4 pr-2 pl-2">
            <Label htmlFor="state">Select State</Label>
            <Select>
              <SelectTrigger
                className="w-full mt-1"
                value={formData.state}
                onChange={handleInputChange}
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
        <div className="flex flex-col items-center justify-center mt-4 mb-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}
