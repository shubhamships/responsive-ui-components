import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ItemDetails2({
  handleIGST,
  removeInputFields,
  addInputField,
  itemForm,
  handleChange,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Item Details
      </div>
      <div className="m-2 font-medium text-sm">
        {itemForm.map((data, index) => {
          const { id, prodName, sku, hsn, qty, unitPrice } = data;
          return (
            <div key={index} className="grid md:grid-cols-2 gap-4">
              <div className="my-2 mt-4">
                <Label htmlFor={`prodName-${id}`}>
                  Product Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  name="prodName"
                  id={`prodName-${id}`}
                  placeholder="Enter Product Name"
                  required
                  className="mt-2"
                  value={prodName}
                  onChange={(evnt) => handleChange(index, evnt)}
                />
              </div>
              <div className="my-2 mt-4">
                <Label htmlFor={`sku-${id}`}>
                  SKU <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  name="sku"
                  id={`sku-${id}`}
                  placeholder=""
                  required
                  className="mt-2"
                  value={sku}
                  onChange={(evnt) => handleChange(index, evnt)}
                />
              </div>
              <div className="my-2 mt-4">
                <Label htmlFor={`hsn-${id}`}>
                  HSN <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  name="hsn"
                  id={`hsn-${id}`}
                  placeholder=""
                  required
                  className="mt-2"
                  value={hsn}
                  onChange={(evnt) => handleChange(index, evnt)}
                />
              </div>
              <div className="my-2 mt-4">
                <Label htmlFor={`qty-${id}`}>
                  QTY <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  name="qty"
                  id={`qty-${id}`}
                  placeholder=""
                  required
                  className="mt-2"
                  value={qty}
                  onChange={(evnt) => handleChange(index, evnt)}
                />
              </div>
              <div className="my-2 mt-4">
                <Label htmlFor={`unitPrice-${id}`}>
                  Price per Unit <span className="text-red-600">*</span>
                </Label>
                <Input
                  type="text"
                  name="unitPrice"
                  id={`unitPrice-${id}`}
                  placeholder=""
                  required
                  className="mt-2"
                  value={unitPrice}
                  onChange={(evnt) => handleChange(index, evnt)}
                />
              </div>
              <div id="igst" className="m-2 mt-4">
                <Label htmlFor="igst">
                  IGST <span className="text-red-600">*</span>
                </Label>
                <Select onValueChange={handleIGST}>
                  <SelectTrigger className="w-full mt-2">
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
              <div className="mt-2 mb-4">
                {itemForm.length !== 1 && (
                  <button
                    onClick={() => removeInputFields(index)}
                    className="btn bg-red-500 rounded-full text-white px-2 py-1"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="mt-4">
          <button
            type="button"
            onClick={addInputField}
            className="btn bg-sky-500 rounded-full text-white px-2 py-1 m-1"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </>
  );
}
