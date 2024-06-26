import React, { useState } from "react";
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
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  inputValue?: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SGFormField({
  name,
  label,
  type,
  required,
  placeholder = "",
  className,
  minLength,
  maxLength,
  pattern,
  inputValue,
  onChangeFn,
}: SGFormFieldProps) {
  const [error, setError] = useState<string>("");

  const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.validity.valueMissing) {
      setError("Field is required");
    } else if (pattern && event.currentTarget.validity.patternMismatch) {
      setError(`Invalid format. Please enter in correct format.`);
    } else {
      setError("Invalid input.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
    setError("");
  };

  return (
    <div className="m-2">
      <Label htmlFor={name}>
        {label}
        {required ? <span className={"text-red-600"}> *</span> : null}
      </Label>
      <Input
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        className={cn("mt-2", className)}
        value={inputValue}
        onChange={handleChange}
        onInvalid={handleInvalid}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
}
