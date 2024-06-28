import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  // SelectLabel,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { useState } from "react";
interface SelectItems {
  key: string;
  value: string;
}
interface SGFormSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  data: SelectItems[];
  setSelectValueObj: (prev) => void;
}
export default function SGFormSelect({
  data,
  name,
  label,
  placeholder,
  required,
  setSelectValueObj,
}: SGFormSelectProps) {
  const [selectValue, setSelectValue] = useState(false);
  const [touched, setTouched] = useState(false);

  // const onSelectChange = (value) => {
  //   if (value === "Select") {
  //     setSelectValue(true);
  //   } else {
  //     setSelectValue(false);
  //     setTouched(false);
  //   }
  //   setTouched(true);
  //   //dispatch select field redux action to change [name] fields value
  //   // dispatch({ type: "shippingdetails/changeCOuntry' })
  //   // setSelectValueObj((prev) => ({ ...prev, [name]: value }));
  //   setSelectValueObj({ name, value });

  const onSelectChange = (value) => {
    if (value === "Select") {
      setSelectValue(true);
    } else {
      setSelectValue(false);
      setTouched(false);
    }
    setTouched(true);
    setSelectValueObj(value);
  };
  return (
    <div className="m-2">
      <Label htmlFor={name}>
        {label}
        {required ? <span className={"text-red-600"}> *</span> : null}
      </Label>
      <div className="mt-2">
        <Select onValueChange={onSelectChange} required>
          <SelectTrigger
            className={`ring-1 ${
              selectValue
                ? "ring-destructive"
                : touched
                ? "ring-constructive"
                : ""
            }`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Select">Select {label}</SelectItem>
              {data.map((item) => (
                <SelectItem value={item.key} key={item.key}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {selectValue && (
          <div className="mt-2">
            <p className="text-red-600">Select {label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
