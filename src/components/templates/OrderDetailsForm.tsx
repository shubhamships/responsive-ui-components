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
import SGFormField from "../elements/SGFormField";

export default function OrderDetailsForm({
  handleInputChange,
  orderForm,
  handleFormInputChange,
}) {
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Order Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <SGFormField
          name="invoiceNumber"
          label="Invoice Number"
          type="text"
          required
          placeholder="Enter Invoice Number"
          inputValue={orderForm.invoiceNumber}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="invoiceDate"
          label="Invoice Date"
          type="date"
          required
          placeholder="Enter Invoice Date"
          inputValue={orderForm.invoiceDate}
          onChangeFn={handleInputChange}
        />
        <div id="invoiceCurrencyField" className="m-2">
          <Label htmlFor="invoiceCurrency">
            Invoice Currency <span className="text-red-600">*</span>
          </Label>
          <Select
            onValueChange={(value) =>
              handleFormInputChange("invoiceCurrency", value)
            }
          >
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
        <SGFormField
          name="orderRef"
          label="Order Id/Ref."
          type="text"
          required
          placeholder="Enter Order Id/Ref."
          inputValue={orderForm.orderRef}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="ioss"
          label="IOSS"
          type="text"
          required
          placeholder="Enter IOSS"
          inputValue={orderForm.ioss}
          onChangeFn={handleInputChange}
        />
      </div>
    </>
  );
}
