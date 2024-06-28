import {
  UPDATE_BILLING_COUNTRY,
  UPDATE_BILLING_STATE,
  UPDATE_BILL_DETAIL,
  UPDATE_BILL_MULTIPLE_DETAIL,
  UPDATE_PROFILE_DETAIL,
  UPDATE_SHIPPING_COUNTRY,
  UPDATE_SHIPPING_STATE,
  UPDATE_SHIP_DETAIL,
  UPDATE_ORDER_FORM_DETAIL,
  UPDATE_ORDER_FORM_ITEM_DETAIL,
  UPDATE_ORDER_FORM_INVOICE_CURRENCY,
  UPDATE_ORDER_DIMENSION_FORM,
} from "./constants";
import {
  billInitialState,
  profileInitialState,
  shipInitialState,
  orderFormInitialState,
  orderDimensionInitialState,
} from "./interfaces";

//REDUCER FOR PROFILE DETAILS FORM
export const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_DETAIL:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    default:
      return state;
  }
};

//REDUCER FOR SHIPPING DETAILS FORM
export const shipReducer = (state = shipInitialState, action) => {
  switch (action.type) {
    case UPDATE_SHIP_DETAIL:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case UPDATE_SHIPPING_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case UPDATE_SHIPPING_STATE:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

//REDUCER FOR BILLING DETAILS FORM
export const billReducer = (state = billInitialState, action) => {
  switch (action.type) {
    case UPDATE_BILL_DETAIL:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case UPDATE_BILL_MULTIPLE_DETAIL:
      return {
        ...state,
        ...action.payload.fieldsToUpdate,
      };
    case UPDATE_BILLING_COUNTRY:
      return {
        ...state,
        countryBilling: action.payload,
      };
    case UPDATE_BILLING_STATE:
      return {
        ...state,
        stateBilling: action.payload,
      };
    default:
      return state;
  }
};

//REDUCER FOR ORDER DETAILS FORM
export const orderReducer = (state = orderFormInitialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER_FORM_DETAIL:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case UPDATE_ORDER_FORM_ITEM_DETAIL:
      return {
        ...state,
        [action.payload.array]: action.payload.updatedArray,
      };
    case UPDATE_ORDER_FORM_INVOICE_CURRENCY:
      return {
        ...state,
        invoiceCurrency: action.payload,
      };
    default:
      return state;
  }
};

//REDUCER FOR ORDER DIMENSION DETAILS FORM
export const orderDimensionReducer = (
  state = orderDimensionInitialState,
  action
) => {
  switch (action.type) {
    case UPDATE_ORDER_DIMENSION_FORM:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    default:
      return state;
  }
};
