import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DialogData } from "@/components/elements/DialogData";
import OrderDetailsForm from "@/components/templates/OrderDetailsForm";
import ItemDetailsForm from "@/components/templates/ItemDetailsForm";

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
      [e.target.name]: e.target.value,
    });
  };
  const handleFormInputChange = (name: string, value: string) => {
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };
  const orderFormData = Object.entries(orderForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderFormData);
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
              <OrderDetailsForm
                orderForm={orderForm}
                handleInputChange={handleInputChange}
                handleFormInputChange={handleFormInputChange}
              />
              <ItemDetailsForm
                removeInputFields={removeInputFields}
                itemForm={itemForm}
                handleChange={handleChange}
                handleFormInputChange={handleFormInputChange}
              />
              <div className="mt-2">
                <button
                  type="button"
                  onClick={addInputField}
                  className="btn bg-sky-500 rounded-full text-white px-2 py-1 m-1"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center mt-4 mb-2">
                <DialogData
                  content={JSON.stringify(orderFormData)}
                  handleSubmit={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
