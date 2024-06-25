import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DialogData } from "@/components/elements/DialogData";
import OrderDetailsForm from "@/components/templates/OrderDetailsForm";
import ItemDetailsForm from "@/components/templates/ItemDetailsForm";

export default function AddOrder2() {
  //initial values for the array object for item details
  const itemFormInitialValue = {
    id: 1,
    prodName: "",
    sku: "",
    hsn: "",
    qty: "",
    unitPrice: "",
    igst: "",
  };
  //form schema for the AddOrder2 form
  const [orderForm, setOrderForm] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    invoiceCurrency: "",
    orderRef: "",
    ioss: "",
    itemDetails: [itemFormInitialValue],
  });
  //modifying the form data content for dialog box
  const orderFormData = Object.entries(orderForm);
  //navigation function
  const navigateTo = useNavigate();
  //function to update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };
  //state variable for dialog box
  const [showDialog, setShowDialog] = useState(false);
  //function for handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderForm);
    setShowDialog(true);
  };
  //function for handling dialog box
  const handleSubmitDialog = () => {
    setShowDialog(false);
    navigateTo("/add-order3");
  };
  //function to update the form data
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...orderForm.itemDetails];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    setOrderForm({
      ...orderForm,
      itemDetails: list,
    });
  };
  //function to add a new set of inputs when add button is pressed in itemDetails
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
  //function to remove a set of inputs when remove button is pressed in itemDetails
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
        {/* defining space for left tab to be 1/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <LeftTab />
          </div>
          {/* defining space for form tab to be 3/4 */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <OrderDetailsForm
                orderForm={orderForm}
                setOrderForm={setOrderForm}
                handleInputChange={handleInputChange}
              />
              {/* item details form for item Details */}
              <ItemDetailsForm
                itemForm={orderForm.itemDetails}
                handleChange={handleChange}
                setItemForm={setOrderForm}
                removeInputFields={removeInputFields}
              />
              {/* button to add new input field set */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={addInputField}
                  className="btn bg-sky-500 rounded-full text-white px-2 py-1 m-1"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              {/* submit button to handle the form submission */}
              <div className="flex flex-col items-center justify-center mt-4 mb-2">
                <button
                  type="submit"
                  className="bg bg-blue-600 p-2 text-white rounded"
                >
                  Continue
                </button>
                {/* dialog box to open if the form submission is valid */}
                {showDialog && (
                  <DialogData
                    content={JSON.stringify(orderFormData)}
                    handleSubmit={handleSubmitDialog}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
