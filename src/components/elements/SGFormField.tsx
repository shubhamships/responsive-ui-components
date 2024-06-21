import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SGFormFieldProps {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  inputValue: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SGFormField({
  name,
  label,
  type,
  required,
  placeholder = "Enter Text . . .",
  className,
  inputValue,
  onChangeFn,
}: SGFormFieldProps) {
  return (
    <div className="m-2">
      <Label htmlFor={name}>
        {label}
        {required ? <span className={"text-red-600"}> *</span> : null}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className={cn("mt-2", className)}
        value={inputValue}
        onChange={onChangeFn}
      />
    </div>
  );
}
