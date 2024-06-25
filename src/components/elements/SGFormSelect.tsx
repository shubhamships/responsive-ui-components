import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "../ui/label";
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
  const onSelectChange = (value) => {
    setSelectValueObj((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="m-2">
      <Label htmlFor={name}>
        {label}
        {required ? <span className={"text-red-600"}> *</span> : null}
      </Label>
      <div className="mt-2">
        <Select onValueChange={onSelectChange} required>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {data.map((item) => (
                <SelectItem value={item.key} key={item.key}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
