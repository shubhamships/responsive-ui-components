import { Label } from "@radix-ui/react-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SGFormField from "../elements/SGFormField";
export default function ItemDetailsForm({
  handleFormInputChange,
  removeInputFields,
  itemForm,
  handleChange,
}) {
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Item Details
      </div>
      <div className="m-2 font-medium text-sm">
        {itemForm.map((data, index) => {
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-8">
              <div className="my-2 mt-4 md:col-span-2">
                <SGFormField
                  name="prodName"
                  label="Product"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="sku"
                  label="SKU"
                  type="text"
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="hsn"
                  label="HSN"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="qty"
                  label="QTY"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4 md:col-span-1">
                <SGFormField
                  name="unitPrice"
                  label="Unit Price"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div id="igst" className="mt-6 md:col-span-2">
                <Label htmlFor="igst">
                  IGST <span className="text-red-600">*</span>
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleFormInputChange("igst", value)
                  }
                >
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
      </div>
    </>
  );
}
