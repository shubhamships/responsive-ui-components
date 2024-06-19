import OrderDetails from "@/components/templates/OrderDetails";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ItemDetails from "@/components/templates/ItemDetails";

export default function AddOrder2() {
  const [orderForm, setOrderForm] = useState({
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
    setOrderForm({
      ...orderForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleCurrency = (value: string) => {
    setOrderForm({
      ...orderForm,
      invoiceCurrency: value,
    });
  };

  const handleIGST = (value: string) => {
    setOrderForm({
      ...orderForm,
      igst: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderForm);
  };

  return (
    <>
      <main className="m-4 px-2">
        <form onSubmit={handleSubmit}>
          <OrderDetails
            orderForm={orderForm}
            handleInputChange={handleInputChange}
            handleCurrency={handleCurrency}
          />
          <ItemDetails
            orderForm={orderForm}
            handleInputChange={handleInputChange}
            handleIGST={handleIGST}
          />

          <div className="flex flex-col items-center justify-center mt-4 mb-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </>
  );
}
