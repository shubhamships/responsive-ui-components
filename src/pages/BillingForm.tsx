import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BillingForm({ handleInputChange, formData }) {
  return (
    <>
      <div id="addressField1Billing" className="m-4 pr-2 pl-2">
        <Label htmlFor="address1Billing">
          Address 1 <span className="text-red-600">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter Address 1"
          required
          className="mt-2"
          id="address1Billing"
          value={formData.address1Billing}
          onChange={handleInputChange}
        />
      </div>
      <div id="address2FieldBilling" className="m-4 pr-2 pl-2">
        <Label htmlFor="address2Billing">
          Address 2 <span className="text-red-600">*</span>
        </Label>
        <Input
          type="text"
          id="address2Billing"
          placeholder="Enter Address 2"
          required
          value={formData.address2Billing}
          onChange={handleInputChange}
          className="mt-2"
        />
      </div>
      <div id="landmarkFieldBilling" className="m-4 pr-2 pl-2">
        <Label htmlFor="landmarkBilling">
          Landmark <span className="text-red-600">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter Landmark"
          required
          className="mt-2"
          id="landmarkBilling"
          value={formData.landmarkBilling}
          onChange={handleInputChange}
        />
      </div>
      <div id="pinCodeFieldBilling" className="m-4 pr-2 pl-2">
        <Label htmlFor="pincodeBilling">
          Pincode <span className="text-red-600">*</span>
        </Label>
        <Input
          type="text"
          maxLength={6}
          placeholder="Enter Pincode"
          required
          id="pincodeBilling"
          value={formData.pincodeBilling}
          onChange={handleInputChange}
          className="mt-2"
        />
      </div>
      <div id="cityFieldBilling" className="m-4 pr-2 pl-2">
        <Label htmlFor="cityBilling">
          City <span className="text-red-600">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter City"
          id="cityBilling"
          value={formData.cityBilling}
          onChange={handleInputChange}
          required
          className="mt-2"
        />
      </div>
    </>
  );
}
