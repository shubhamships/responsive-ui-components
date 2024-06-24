import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  data: SelectItems[];
  setSelectValueObj: (prev: any) => void;
}
export default function SGFormSelect({
  data,
  name,
  label,
  placeholder,
  setSelectValueObj,
}: SGFormSelectProps) {
  const onSelectChange = (value) => {
    setSelectValueObj((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="m-2">
      <Label htmlFor={name}>{label}</Label>
      <Select onValueChange={onSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem value={item.key} key={item.key}>
              {item.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
