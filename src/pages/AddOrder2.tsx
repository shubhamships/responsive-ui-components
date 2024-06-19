import OrderDetails from "@/components/templates/OrderDetails";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ItemDetails from "@/components/templates/ItemDetails";
import ItemDetails2 from "@/components/templates/ItemDetails2";

export default function AddOrder2() {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    invoiceCurrency: "",
    orderRef: "",
    ioss: "",
    prodName: "",
    sku: "",
    hsn: "",
    qty: "",
    unitPrice: "",
    igst: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCurrency = (value: string) => {
    setFormData({
      ...formData,
      invoiceCurrency: value,
    });
  };

  const handleIGST = (value: string) => {
    setFormData({
      ...formData,
      igst: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  return (
    <>
      <main className="m-4 px-2">
        <form onSubmit={handleSubmit}>
          <OrderDetails
            formData={formData}
            handleInputChange={handleInputChange}
            handleCurrency={handleCurrency}
          />
          <ItemDetails
            formData={formData}
            handleInputChange={handleInputChange}
            handleIGST={handleIGST}
          />

          {/* <ItemDetails2
            formData={formData}
            handleInputChange={handleInputChange}
            formValues={formValues}
            addFormFields={addFormFields}
            handleSubmit={handleSubmit}
            removeFormFields={removeFormFields}
          /> */}

          <div className="flex flex-col items-center justify-center mt-4 mb-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </>
  );
}
