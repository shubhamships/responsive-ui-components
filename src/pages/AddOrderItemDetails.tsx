import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrderDetailsForm from "@/components/templates/OrderDetailsForm";
import ItemDetailsForm from "@/components/templates/ItemDetailsForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  updateOrderField,
  updateOrderInvoiceCurrency,
  updateOrderItemField,
} from "@/redux/actions";
import { ItemForm } from "@/redux/interfaces";
import LeftTabOne from "@/components/templates/LeftTabOne";
import LeftTabTwo from "@/components/templates/LeftTabTwo";

export default function AddOrderItemDetails() {
  const { order } = useSelector((state: RootState) => state.addOrder);
  const dispatch = useDispatch();
  //navigation function
  const navigateTo = useNavigate();
  //function to update the form data
  const handleInputOrderDetailChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateOrderField(name, value));
  };
  //function for handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
    navigateTo("/add-order3");
  };
  const handleSelectOrderDetailIgstChange = (index, value) => {
    const list = [...order.itemForm];
    list[index] = {
      ...list[index],
      igst: value,
    };
    dispatch(updateOrderItemField(list));
  };
  //function to update the form data inside the item details
  const handleInputItemForm = (index, event) => {
    const { name, value } = event.target;
    const list = [...order.itemForm]; //not an array use object only
    list[index] = {
      ...list[index],
      [name]: value,
    };
    dispatch(updateOrderItemField(list));
  };
  const handleInvoiceCurrency = (selectedCurrency: string) => {
    dispatch(updateOrderInvoiceCurrency(selectedCurrency));
  };
  //function to add a new set of inputs when add button is pressed in itemForm
  const addInputField = () => {
    const maxId = Math.max(...order.itemForm.map((item) => item.id)); // Find the maximum id in the current itemForm array
    const newId = maxId + 1; // Generate a new id for the new item

    const newItem: ItemForm = {
      id: newId,
      prodName: "",
      sku: "",
      hsn: "",
      qty: "",
      unitPrice: "",
      igst: "",
    };
    const updatedItemForm = [...order.itemForm, newItem];
    dispatch(updateOrderItemField(updatedItemForm));
  };
  //function to remove a set of inputs when remove button is pressed in itemForm
  const removeInputFields = (id) => {
    const updatedList = order.itemForm.filter((item) => item.id !== id);
    dispatch(updateOrderItemField(updatedList));
  };
  return (
    <>
      <main className="m-4 px-2">
        {/* defining space for left tab to be 1/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
            <LeftTabOne />
            <LeftTabTwo />
          </div>
          {/* defining space for form tab to be 3/4 */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <OrderDetailsForm
                handleInvoiceCurrency={handleInvoiceCurrency}
                handleInputOrderDetailChange={handleInputOrderDetailChange}
              />
              {/* item details form for item Details */}
              <ItemDetailsForm
                handleInputItemForm={handleInputItemForm}
                handleSelectOrderDetailIgstChange={
                  handleSelectOrderDetailIgstChange
                }
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
              <div className="flex lg:flex-row lg:gap-10 flex-col items-center justify-center mt-8 mb-2">
                <div>
                  <button
                    type="submit"
                    className="bg bg-blue-600 p-2 text-white rounded"
                    onClick={() => history.back()}
                  >
                    Back
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg bg-blue-600 p-2 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
