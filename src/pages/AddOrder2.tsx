// import OrderDetails from "@/components/templates/OrderDetails";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import ItemDetails from "@/components/templates/ItemDetails";
// import { useNavigate } from "react-router-dom";
// import LeftTab from "@/components/templates/LeftTab";

// export default function AddOrder2() {
//   const [orderForm, setOrderForm] = useState({
//     invoiceNumber: "",
//     invoiceDate: "",
//     invoiceCurrency: "",
//     orderRef: "",
//     ioss: "",
//     prodName: "",
//     sku: "",
//     hsn: "",
//     qty: "",
//     unitPrice: "",
//     igst: "",
//   });
//   const navigateTo = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setOrderForm({
//       ...orderForm,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleCurrency = (value: string) => {
//     setOrderForm({
//       ...orderForm,
//       invoiceCurrency: value,
//     });
//   };

//   const handleIGST = (value: string) => {
//     setOrderForm({
//       ...orderForm,
//       igst: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(orderForm);
//     navigateTo("/add-order3");
//   };

//   //Trying for dynamic inputs
//   const [itemForm, setItemForm] = useState([
//     { id: 1, prodName: "", sku: "", hsn: "", qty: "", unitPrice: "", igst: "" },
//   ]);
//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const list = [...itemForm];
//     list[index][name] = value;
//     setItemForm(list);

//     // Updating corresponding fields in orderForm
//     const updatedOrderForm = {
//       ...orderForm,
//       prodName: list[index].prodName,
//       sku: list[index].sku,
//       hsn: list[index].hsn,
//       qty: list[index].qty,
//       unitPrice: list[index].unitPrice,
//       igst: list[index].igst,
//     };
//     setOrderForm(updatedOrderForm);
//   };

//   const addInputField = () => {
//     const maxId = Math.max(...itemForm.map((item) => item.id));
//     const newId = maxId + 1;
//     setItemForm([
//       ...itemForm,
//       {
//         id: newId,
//         prodName: "",
//         sku: "",
//         hsn: "",
//         qty: "",
//         unitPrice: "",
//         igst: "",
//       },
//     ]);
//   };

//   const removeInputFields = (index) => {
//     const rows = [...itemForm];
//     rows.splice(index, 1);
//     setItemForm(rows);
//   };

//   return (
//     <>
//       <main className="m-4 px-2">
//         <div className="md:grid md:grid-cols-2">
//           <div>
//             <LeftTab />
//           </div>
//           <div>
//             <form onSubmit={handleSubmit}>
//               <OrderDetails
//                 orderForm={orderForm}
//                 handleInputChange={handleInputChange}
//                 handleCurrency={handleCurrency}
//               />
//               <ItemDetails
//                 removeInputFields={removeInputFields}
//                 itemForm={itemForm}
//                 handleChange={handleChange}
//                 addInputField={addInputField}
//                 handleIGST={handleIGST}
//               />
//               <div className="flex flex-col items-center justify-center mt-4 mb-2">
//                 <Button type="submit">Submit</Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import OrderDetails from "@/components/templates/OrderDetails";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ItemDetails from "@/components/templates/ItemDetails";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";

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
  const navigateTo = useNavigate();

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
    navigateTo("/add-order3");
  };

  //Trying for dynamic inputs
  const [itemForm, setItemForm] = useState([
    { id: 1, prodName: "", sku: "", hsn: "", qty: "", unitPrice: "", igst: "" },
  ]);
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...itemForm];
    list[index][name] = value;
    setItemForm(list);

    // Updating corresponding fields in orderForm
    const updatedOrderForm = {
      ...orderForm,
      prodName: list[index].prodName,
      sku: list[index].sku,
      hsn: list[index].hsn,
      qty: list[index].qty,
      unitPrice: list[index].unitPrice,
      igst: list[index].igst,
    };
    setOrderForm(updatedOrderForm);
  };

  const addInputField = () => {
    const maxId = Math.max(...itemForm.map((item) => item.id));
    const newId = maxId + 1;
    setItemForm([
      ...itemForm,
      {
        id: newId,
        prodName: "",
        sku: "",
        hsn: "",
        qty: "",
        unitPrice: "",
        igst: "",
      },
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...itemForm];
    rows.splice(index, 1);
    setItemForm(rows);
  };

  return (
    <>
      <main className="m-4 px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <LeftTab />
          </div>
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <OrderDetails
                orderForm={orderForm}
                handleInputChange={handleInputChange}
                handleCurrency={handleCurrency}
              />
              <ItemDetails
                removeInputFields={removeInputFields}
                itemForm={itemForm}
                handleChange={handleChange}
                addInputField={addInputField}
                handleIGST={handleIGST}
              />
              <div className="flex flex-col items-center justify-center mt-4 mb-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
