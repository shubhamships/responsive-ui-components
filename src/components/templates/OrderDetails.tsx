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

export default function OrderDetails({
  handleInputChange,
  orderForm,
  handleCurrency,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Order Details
      </div>
      <div className="grid md:grid-cols-2">
        <div id="invoiceNumberField" className="m-2">
          <Label htmlFor="invoiceNumber">
            Invoice Number <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="invoiceNumber"
            placeholder="Enter Invoice Number"
            required
            className="mt-2"
            value={orderForm.invoiceNumber}
            onChange={handleInputChange}
          />
        </div>
        <div id="invoiceDateField" className="m-2">
          <Label htmlFor="invoiceDate">
            Invoice Date <span className="text-red-600">*</span>
          </Label>
          <Input
            type="date"
            id="invoiceDate"
            placeholder="Enter Invoice Date"
            required
            className="mt-2"
            value={orderForm.invoiceDate}
            onChange={handleInputChange}
          />
        </div>
        <div id="invoiceCurrencyField" className="m-2">
          <Label htmlFor="invoiceCurrency">
            Invoice Currency <span className="text-red-600">*</span>
          </Label>
          <Select onValueChange={handleCurrency}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Currency</SelectLabel>
                <SelectItem value="inr">INR</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="cad">CAD</SelectItem>
                <SelectItem value="aed">AED</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div id="orderRefField" className="m-2">
          <Label htmlFor="orderRef">
            Order Id/Ref. Id <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="orderRef"
            placeholder="Enter Order Id/Ref. Id"
            required
            className="mt-2"
            value={orderForm.orderRef}
            onChange={handleInputChange}
          />
        </div>
        <div id="iossField" className="m-2">
          <Label htmlFor="ioss">
            IOSS Number<span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            id="ioss"
            placeholder="Enter IOSS Number:"
            required
            className="mt-2"
            value={orderForm.ioss}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
