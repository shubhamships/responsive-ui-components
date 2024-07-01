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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export default function ItemDetailsForm({
  removeInputFields,
  handleInputItemForm,
  handleSelectOrderDetailIgstChange,
}) {
  const { order } = useSelector((state: RootState) => state.addOrder);

  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Item Details
      </div>
      <div className="m-2 font-medium text-sm">
        {order.itemForm &&
          order.itemForm.map((data, index) => {
            return (
              <div key={data.id} className="grid grid-cols-1 md:grid-cols-9">
                <div className="my-2 mt-4 md:col-span-2">
                  <SGFormField
                    name="prodName"
                    label="Product"
                    type="text"
                    message="Don't add spaces at beginning"
                    inputValue={order.itemForm[index]["prodName"]}
                    pattern="^\S.*$"
                    required
                    onChangeFn={(event) => handleInputItemForm(index, event)}
                  />
                </div>
                <div className="my-2 mt-4">
                  <SGFormField
                    name="sku"
                    label="SKU"
                    message="Don't add spaces at beginning"
                    inputValue={order.itemForm[index]["sku"]}
                    pattern="^\S.*$"
                    type="text"
                    onChangeFn={(event) => handleInputItemForm(index, event)}
                  />
                </div>
                <div className="my-2 mt-4">
                  <SGFormField
                    name="hsn"
                    label="HSN"
                    inputValue={order.itemForm[index]["hsn"]}
                    message="Don't add spaces at beginning"
                    pattern="^\S.*$"
                    type="text"
                    required
                    onChangeFn={(event) => handleInputItemForm(index, event)}
                  />
                </div>
                <div className="my-2 mt-4">
                  <SGFormField
                    name="qty"
                    label="QTY"
                    message="Only digits allowed"
                    inputValue={order.itemForm[index]["qty"]}
                    type="number"
                    pattern="^\S.*$"
                    required
                    onChangeFn={(event) => handleInputItemForm(index, event)}
                  />
                </div>
                <div className="my-2 mt-4 md:col-span-2">
                  <SGFormField
                    name="unitPrice"
                    label="Unit Price"
                    type="number"
                    inputValue={order.itemForm[index]["unitPrice"]}
                    message="Only digits allowed"
                    pattern="^\S.*$"
                    required
                    onChangeFn={(event) => handleInputItemForm(index, event)}
                  />
                </div>
                <div id="selectState" className="m-2 lg:mt-6">
                  <Label htmlFor="state">
                    IGST <span className="text-red-600">*</span>
                  </Label>
                  <Select
                    required
                    onValueChange={(value) =>
                      handleSelectOrderDetailIgstChange(index, value)
                    }
                    defaultValue="0%"
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
                <div className="lg:mt-14 mt-4">
                  {order.itemForm.length !== 1 && (
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
