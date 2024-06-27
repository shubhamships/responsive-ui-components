import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SGFormField from "../elements/SGFormField";
import { Label } from "@/components/ui/label"; // import SGFormSelect from "../elements/SGFormSelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ItemDetailsForm({
  removeInputFields,
  itemForm,
  handleChange,
  handleFormInputChange,
}) {
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Item Details
      </div>
      <div className="m-2 font-medium text-sm">
        {itemForm.map((data, index) => {
          return (
            <div key={data.id} className="grid grid-cols-1 md:grid-cols-8">
              <div className="my-2 mt-4 md:col-span-2">
                <SGFormField
                  name="prodName"
                  label="Product"
                  type="text"
                  message="Don't add spaces at beginning or end"
                  pattern="\S(.*\S)?"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="sku"
                  label="SKU"
                  message="Don't add spaces at beginning or end"
                  pattern="\S(.*\S)?"
                  type="text"
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="hsn"
                  label="HSN"
                  message="Don't add spaces at beginning or end"
                  pattern="\S(.*\S)?"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormField
                  name="qty"
                  label="QTY"
                  message="Only digits allowed"
                  type="number"
                  pattern="\S(.*\S)?"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4 md:col-span-2">
                <SGFormField
                  name="unitPrice"
                  label="Unit Price"
                  type="number"
                  message="Only digits allowed"
                  pattern="\S(.*\S)?"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div id="selectState" className="m-2 lg:mt-6">
                <Label htmlFor="state">
                  IGST <span className="text-red-600">*</span>
                </Label>
                <Select
                  required
                  onValueChange={(value) => handleFormInputChange(index, value)}
                >
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="IGST" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0%">0%</SelectItem>
                      <SelectItem value="3%">3%</SelectItem>
                      <SelectItem value="5%">5%</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-2 mb-4">
                {itemForm.length !== 1 && (
                  <button
                    onClick={() => removeInputFields(data.id)}
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
