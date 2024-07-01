import {
  UPDATE_BILLING_COUNTRY,
  UPDATE_BILLING_STATE,
  UPDATE_BILL_DETAIL,
  UPDATE_BILL_MULTIPLE_DETAIL,
  UPDATE_ORDER_DIMENSION_FORM,
  UPDATE_ORDER_FORM_DETAIL,
  UPDATE_ORDER_FORM_INVOICE_CURRENCY,
  UPDATE_ORDER_FORM_ITEM_DETAIL,
  UPDATE_PROFILE_DETAIL,
  UPDATE_SHIPPING_COUNTRY,
  UPDATE_SHIPPING_STATE,
  UPDATE_SHIP_DETAIL,
} from "./constants";
import { ItemForm } from "./interfaces";

// ACTION TO UPDATE FIELD VALUES IN PROFILE DETAILS FORM
export const updateProfileField = (fieldName: string, value: string) => ({
  type: UPDATE_PROFILE_DETAIL,
  payload: { fieldName, value },
});
// ACTION TO UPDATE FIELD VALUES IN SHIPPING DETAILS FORM
export const updateShipField = (fieldName: string, value: string) => ({
  type: UPDATE_SHIP_DETAIL,
  payload: { fieldName, value },
});
// ACTION TO UPDATE COUNTRY VALUE IN SHIPPING DETAILS FORM
export const updateShippingCountry = (country: string) => ({
  type: UPDATE_SHIPPING_COUNTRY,
  payload: country,
});
// ACTION TO UPDATE STATE VALUE IN SHIPPING DETAILS FORM
export const updateShippingState = (state: string) => ({
  type: UPDATE_SHIPPING_STATE,
  payload: state,
});
// ACTION TO UPDATE FIELD VALUES IN BILLING DETAILS FORM
export const updateBillField = (fieldName: string, value: string) => ({
  type: UPDATE_BILL_DETAIL,
  payload: { fieldName, value },
});
// ACTION TO UPDATE MULTIPLE INPUT VALUES IN BILLING DETAILS FORM
export const updateBillMultipleFields = (fieldsToUpdate: {
  [key: string]: string;
}) => ({
  type: UPDATE_BILL_MULTIPLE_DETAIL,
  payload: { fieldsToUpdate },
});
// ACTION TO UPDATE COUNTRY VALUE IN BILLING DETAILS FORM
export const updateBillingCountry = (countryBilling: string) => ({
  type: UPDATE_BILLING_COUNTRY,
  payload: countryBilling,
});
// ACTION TO UPDATE STATE VALUE IN BILLING DETAILS FORM
export const updateBillingState = (stateBilling: string) => ({
  type: UPDATE_BILLING_STATE,
  payload: stateBilling,
});

// ACTION TO UPDATE FIELD VALUES IN ORDER DETAILS FORM
export const updateOrderField = (fieldName: string, value: string) => ({
  type: UPDATE_ORDER_FORM_DETAIL,
  payload: { fieldName, value },
});

// ACTION TO UPDATE INVOICE CURRENCY VALUE IN ORDER DETAILS FORM
export const updateOrderInvoiceCurrency = (invoiceCurrency: string) => ({
  type: UPDATE_ORDER_FORM_INVOICE_CURRENCY,
  payload: invoiceCurrency,
});
// ACTION TO UPDATE ITEM DETAILS IN ORDER-> ITEM DETAILS DETAILS FORM
export const updateOrderItemField = (updatedItemForm: ItemForm[]) => ({
  type: UPDATE_ORDER_FORM_ITEM_DETAIL,
  payload: updatedItemForm,
});

// ACTION TO UPDATE FIELD VALUES IN ORDER DIMENSION DETAILS FORM
export const updateOrderDimensionField = (
  fieldName: string,
  value: string
) => ({
  type: UPDATE_ORDER_DIMENSION_FORM,
  payload: { fieldName, value },
});
