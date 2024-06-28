import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

export default function AddOrder2() {
  const { state } = useLocation();
  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  const billingDetailsForm = useSelector(
    (state: RootState) => state.billDetails
  );

  console.log(profileDetailsForm, "uidawnnnn");

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
    navigateTo("/add-order3", {
      state: {
        ...state,
        orderForm: {
          ...orderForm,
          profileDetailsForm: state.profileDetailsForm,
          shipDetailsForm: state.shipDetailsForm,
          billingDetailsForm: state.billingDetailsForm,
        },
      },
    });
  };
  const handleFormInputChange = (index, value) => {
    const list = [...orderForm.itemDetails];
    list[index] = {
      ...list[index],
      igst: value,
    };
    dispatch(updateOrderItemField(orderForm.itemDetails, list));
  };
  //function to update the form data
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...orderForm.itemDetails];
    list[index] = {
      ...list[index],
      [name]: value,
    };
    dispatch(updateOrderItemField(orderForm.itemDetails, list));
  };

  const handleInvoiceCurrency = (selectedCurrency: string) => {
    dispatch(updateOrderInvoiceCurrency(selectedCurrency));
  };

  //function to add a new set of inputs when add button is pressed in itemDetails
  const addInputField = () => {
    const maxId = Math.max(...orderForm.itemDetails.map((item) => item.id));
    const newId = maxId + 1;
    // setOrderForm({
    //   ...orderForm,
    //   itemDetails: [
    //     ...orderForm.itemDetails,
    //     {
    //       id: newId,
    //       prodName: "",
    //       sku: "",
    //       hsn: "",
    //       qty: "",
    //       unitPrice: "",
    //       igst: "",
    //     },
    //   ],
    // });
  };
  //function to remove a set of inputs when remove button is pressed in itemDetails
  const removeInputFields = (id) => {
    const updatedList = orderForm.itemDetails.filter((item) => item.id !== id);
    // setOrderForm({
    //   ...orderForm,
    //   itemDetails: updatedList,
    // });
    dispatch(updateOrderItemField(orderForm.itemDetails, updatedList));
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
                itemForm={orderForm.itemDetails}
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
