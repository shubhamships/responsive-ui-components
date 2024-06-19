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

export default function ItemDetails({
  handleInputChange,
  orderForm,
  handleIGST,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-2 font-medium">
        Item Details
      </div>
      <div className="grid md:grid-cols-2">
        <div id="prodNameField" className="m-2">
          <Label htmlFor="prodName">
            Product Name <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="prodName"
            placeholder="Enter Product Name"
            required
            className="mt-2"
            value={orderForm.prodName}
            onChange={handleInputChange}
          />
        </div>
        <div id="skuField" className="m-2">
          <Label htmlFor="sku">
            SKU <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="sku"
            placeholder="SKU"
            required
            className="mt-2"
            value={orderForm.sku}
            onChange={handleInputChange}
          />
        </div>
        <div id="hsnField" className="m-2">
          <Label htmlFor="hsn">
            HSN <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="hsn"
            placeholder="HSN"
            required
            className="mt-2"
            value={orderForm.hsn}
            onChange={handleInputChange}
          />
        </div>
        <div id="qtyField" className="m-2">
          <Label htmlFor="qty">
            QTY<span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="qty"
            placeholder=""
            required
            className="mt-2"
            value={orderForm.qty}
            onChange={handleInputChange}
          />
        </div>
        <div id="unitPriceField" className="m-2">
          <Label htmlFor="unitPrice">
            Unit Price(INR)<span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="unitPrice"
            placeholder=""
            required
            className="mt-2"
            value={orderForm.unitPrice}
            onChange={handleInputChange}
          />
        </div>
        <div id="igstField" className="m-2">
          <Label htmlFor="igst">
            IGST <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleIGST}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0%">0%</SelectItem>
                <SelectItem value="3%">3%</SelectItem>
                <SelectItem value="5%">5%</SelectItem>
                <SelectItem value="12%">12%</SelectItem>
                <SelectItem value="18%">18%</SelectItem>
                <SelectItem value="28%">28%</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
