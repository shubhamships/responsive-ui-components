import FormField from "@/components/elements/FormField";
import SGFormField from "@/components/elements/SGFormField";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState({ firstName: "", lastName: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="firstName">
      <SGFormField
        type="text"
        placeholder="Enter First Name"
        label="First Name"
        name="firstName"
        inputValue={data.firstName}
        onChangeFn={handleInputChange}
      />
      <SGFormField
        type="text"
        placeholder="Enter Last Name"
        label="Last Name"
        required
        name="lastName"
        inputValue={data.lastName}
        onChangeFn={handleInputChange}
      />
    </div>
  );
}
