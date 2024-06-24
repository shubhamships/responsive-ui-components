// import FormField from "@/components/elements/FormField";
// import SGFormField from "@/components/elements/SGFormField";
import SGFormSelect from "@/components/elements/SGFormSelect";
import { useState } from "react";
export default function Home() {

  
  const selectData = [{key:"ready", value:"Ready"},{key:"shipped", value:"Shipped"}]

  const [formObj,setFormObj] = useState({status:"", "state":""})

  console.log(formObj)
  return (
    <div id="firstName">
      <SGFormSelect name="status" label="Status" placeholder="Select" data={selectData}  setSelectValueObj={setFormObj}
       />
      {/* <SGFormField
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
      /> */}
    </div>
  );
}
