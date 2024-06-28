import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrderDetailsForm from "@/components/templates/OrderDetailsForm";
import ItemDetailsForm from "@/components/templates/ItemDetailsForm";
import LeftTab2 from "@/components/templates/LeftTab2";
import LeftTab1 from "@/components/templates/LeftTab1";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  updateOrderField,
  updateOrderInvoiceCurrency,
  updateOrderItemField,
} from "@/redux/actions";
import { ItemForm } from "@/redux/interfaces";

export default function AddOrder2() {
  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  const billingDetailsForm = useSelector(
    (state: RootState) => state.billDetails
  );
  const orderForm = useSelector((state: RootState) => state.orderDetails);
  const dispatch = useDispatch();
  //navigation function
  const navigateTo = useNavigate();
  //function to update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateOrderField(name, value));
  };
  //function for handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderForm);
    navigateTo("/add-order3");
  };
  const handleFormInputChange = (index, value) => {
    const list = [...orderForm.itemForm];
    list[index] = {
      ...list[index],
      igst: value,
    };
    dispatch(updateOrderItemField(list));
  };
  //function to update the form data inside the item details
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...orderForm.itemForm]; //not an array use object only
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
    const maxId = Math.max(...orderForm.itemForm.map((item) => item.id)); // Find the maximum id in the current itemForm array
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

    // Create a new array with the existing items and the new item
    const updatedItemForm = [...orderForm.itemForm, newItem];
    // Dispatch an action to update the itemForm in the Redux state
    dispatch(updateOrderItemField(updatedItemForm));
  };

  //function to remove a set of inputs when remove button is pressed in itemForm
  const removeInputFields = (id) => {
    const updatedList = orderForm.itemForm.filter((item) => item.id !== id);
    dispatch(updateOrderItemField(updatedList));
  };
  return (
    <>
      <main className="m-4 px-2">
        {/* defining space for left tab to be 1/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
            <LeftTab1
              profileDetailsForm={profileDetailsForm}
              shipDetailsForm={shipDetailsForm}
              billingDetailsForm={billingDetailsForm}
            />
            <LeftTab2 orderForm={orderForm} />
          </div>
          {/* defining space for form tab to be 3/4 */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <OrderDetailsForm
                orderForm={orderForm}
                handleInvoiceCurrency={handleInvoiceCurrency}
                handleInputChange={handleInputChange}
              />
              {/* item details form for item Details */}
              <ItemDetailsForm
                itemForm={orderForm.itemForm}
                handleChange={handleChange}
                handleFormInputChange={handleFormInputChange}
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
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
