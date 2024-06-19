import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ItemDetails2({
  handleInputChange,
  formData,
  formValues,
  removeFormFields,
  addFormFields,
  handleSubmit,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-2 font-medium">
        Item Details
      </div>
      <div onSubmit={handleSubmit}>
        {formValues.map((index) => (
          <div id={index} key={index}>
            <Label htmlFor="prodName">
              Product Name <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              id="prodName"
              placeholder="Enter Product Name"
              required
              className="mt-2"
              value={formData.prodName}
              onChange={handleInputChange}
            />
            {index ? (
              <div className="mt-2 mb-4 bg-slate-500 w-1/2">
                <button
                  type="button"
                  className=""
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              </div>
            ) : null}
          </div>
        ))}
        <div className="grid grid-cols-2 mt-4 text-center">
          <div className="">
            <button
              className="button add"
              type="button"
              onClick={() => addFormFields()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
