import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

interface SelectItems {
  key: string;
  value: string;
}

interface SGFormSelectProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  data: SelectItems[];
  onChangeFn?: (fieldName: string, value: string) => void;
}
export default function SGFormSelect({
  name,
  label,
  required,
  placeholder,
  data,
}: SGFormSelectProps) {
  return (
    <div className="m-2">
      <Label htmlFor={name}>
        {label} {required ? <span className="text-red-600">*</span> : null}
      </Label>
      <Select name={name}>
        <SelectTrigger className="w-full mt-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data.map((item) => (
              <SelectItem key={item.key} value={item.key}>
                {item.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
