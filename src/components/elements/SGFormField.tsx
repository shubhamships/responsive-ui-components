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
  message?: string;
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
  message,
  minLength,
  maxLength,
  pattern,
  inputValue,
  onChangeFn,
}: SGFormFieldProps) {
  const [error, setError] = useState<string>("");

  const handleInvalid = (message, event: React.FormEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.validity.patternMismatch ||
      event.currentTarget.validity.valueMissing
    ) {
      setError(
        message ? message : `Invalid format. Please enter in correct format.`
      );
    } else {
      setError("Invalid input.");
    }
  };

  const handleChange = (message, event) => {
    if (
      event.currentTarget.validity.patternMismatch ||
      event.currentTarget.validity.valueMissing
    ) {
      handleInvalid(message, event);
    } else {
      setError("");
    }
    onChangeFn(event);
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
        onChange={(event) => handleChange(message, event)}
        onInvalid={(event) => handleInvalid(message, event)}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
}
