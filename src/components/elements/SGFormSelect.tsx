import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "../ui/label";
import { useState } from "react";
import { TabsList } from "@radix-ui/react-tabs";

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


export default function SGFormSelect({data,name,label,placeholder,setSelectValueObj}) {

  const onSelectChange = (value)=>{
    setSelectValueObj(prev=>({...prev, [name]:value}))
  }


  return (
    <div className="m-2">
  <Label htmlFor={name}>
        {label}
      </Label>
          <Select value={data[0].key} onValueChange={onSelectChange} >
      <SelectTrigger   >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
            <SelectItem value={item.key} key={item.key} >
              {item.value}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
    <TabsList/>
    </div>
  );
}
