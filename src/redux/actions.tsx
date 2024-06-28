import {
  UPDATE_BILLING_COUNTRY,
  UPDATE_BILLING_STATE,
  UPDATE_BILL_DETAIL,
  UPDATE_BILL_MULTIPLE_DETAIL,
  UPDATE_ORDER_FORM_DETAIL,
  UPDATE_ORDER_FORM_INVOICE_CURRENCY,
  UPDATE_ORDER_FORM_ITEM_DETAIL,
  UPDATE_PROFILE_DETAIL,
  UPDATE_SHIPPING_COUNTRY,
  UPDATE_SHIPPING_STATE,
  UPDATE_SHIP_DETAIL,
} from "./constants";
import { ItemForm } from "./interfaces";

export const updateProfileField = (fieldName: string, value: string) => ({
  type: UPDATE_PROFILE_DETAIL,
  payload: { fieldName, value },
});

export const updateShipField = (fieldName: string, value: string) => ({
  type: UPDATE_SHIP_DETAIL,
  payload: { fieldName, value },
});

export const updateShippingCountry = (country: string) => ({
  type: UPDATE_SHIPPING_COUNTRY,
  payload: country,
});

export const updateShippingState = (state: string) => ({
  type: UPDATE_SHIPPING_STATE,
  payload: state,
});

export const updateBillField = (fieldName: string, value: string) => ({
  type: UPDATE_BILL_DETAIL,
  payload: { fieldName, value },
});

export const updateBillMultipleFields = (fieldsToUpdate: {
  [key: string]: string;
}) => ({
  type: UPDATE_BILL_MULTIPLE_DETAIL,
  payload: { fieldsToUpdate },
});

export const updateBillingCountry = (countryBilling: string) => ({
  type: UPDATE_BILLING_COUNTRY,
  payload: countryBilling,
});

export const updateBillingState = (stateBilling: string) => ({
  type: UPDATE_BILLING_STATE,
  payload: stateBilling,
});

export const updateOrderField = (fieldName: string, value: string) => ({
  type: UPDATE_ORDER_FORM_DETAIL,
  payload: { fieldName, value },
});

export const updateOrderItemField = (
  array: ItemForm[],
  updatedArray: ItemForm[]
) => ({
  type: UPDATE_ORDER_FORM_ITEM_DETAIL,
  payload: { array, updatedArray },
});

export const updateOrderInvoiceCurrency = (invoiceCurrency: string) => ({
  type: UPDATE_ORDER_FORM_INVOICE_CURRENCY,
  payload: invoiceCurrency,
});
