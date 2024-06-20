import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export default function OrderDimensionField({
  oderDimensionForm,
  handleInputChange,
  title,
  unit,
}) {
  return (
    <>
      <div id={title} className="m-2">
        <Label htmlFor={title} className="">
          {title} <span className="text-red-600">*</span>
        </Label>
        <div className="flex">
          <div>
            <Input
              type="text"
              id={title.toLowerCase()}
              placeholder=""
              required
              className="mt-2 rounded-r-none"
              value={oderDimensionForm.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="bg-sky-50 mt-2 px-3 rounded-r-sm border border-slate-200 text-sm text-base">
            {unit}
          </div>
        </div>
      </div>
    </>
  );
}
