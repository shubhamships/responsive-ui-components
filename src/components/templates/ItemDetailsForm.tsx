import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
export default function ItemDetailsForm({
  removeInputFields,
  itemForm,
  setItemForm,
  handleChange,
}) {
  const selectIGST = [
    { key: "0%", value: "0%" },
    { key: "3%", value: "3%" },
    { key: "5%", value: "5%" },
    { key: "7%", value: "7%" },
  ];
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
              <div className="my-2 mt-4 md:col-span-2">
                <SGFormField
                  name="unitPrice"
                  label="Unit Price"
                  type="text"
                  required
                  onChangeFn={(event) => handleChange(index, event)}
                />
              </div>
              <div className="my-2 mt-4">
                <SGFormSelect
                  name="igst"
                  label="IGST"
                  placeholder="IGST"
                  required={true}
                  data={selectIGST}
                  setSelectValueObj={setItemForm}
                />
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
