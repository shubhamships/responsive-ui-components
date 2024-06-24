import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DialogData } from "@/components/elements/DialogData";
import OrderDetailsForm from "@/components/templates/OrderDetailsForm";
import ItemDetailsForm from "@/components/templates/ItemDetailsForm";

export default function AddOrder2() {
  const itemFormInitialValue = {
    id: 1,
    prodName: "",
    sku: "",
    hsn: "",
    qty: "",
    unitPrice: "",
    igst: "",
  };

  const [orderForm, setOrderForm] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    invoiceCurrency: "",
    orderRef: "",
    ioss: "",
    itemDetails: [itemFormInitialValue],
  });
  const orderFormData = Object.entries(orderForm);

  const navigateTo = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderForm);
    navigateTo("/add-order3");
  };
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...orderForm.itemDetails];
    // console.log(list[index], "list index here");
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setOrderForm({
      ...orderForm,
      itemDetails: list,
    });
  };
  const addInputField = () => {
    const maxId = Math.max(...orderForm.itemDetails.map((item) => item.id));
    const newId = maxId + 1;
    setOrderForm({
      ...orderForm,
      itemDetails: [
        ...orderForm.itemDetails,
        {
          id: newId,
          prodName: "",
          sku: "",
          hsn: "",
          qty: "",
          unitPrice: "",
          igst: "",
        },
      ],
    });
  };
  // const removeInputFields = (index) => {
  //   const rows = [...itemForm];
  //   rows.splice(index, 1);
  //   setItemForm(rows);
  // };

  const removeInputFields = (id) => {
    const updatedList = orderForm.itemDetails.filter((item) => item.id !== id);
    setOrderForm({
      ...orderForm,
      itemDetails: updatedList,
    });
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
                setOrderForm={setOrderForm}
                handleInputChange={handleInputChange}
              />
              <ItemDetailsForm
                itemForm={orderForm.itemDetails}
                handleChange={handleChange}
                setItemForm={setOrderForm}
                removeInputFields={removeInputFields}
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
