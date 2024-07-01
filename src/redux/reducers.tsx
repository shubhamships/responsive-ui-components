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

const initialState = {
  addOrder: {
    profile: profileInitialState,
    ship: shipInitialState,
    bill: billInitialState,
    order: orderFormInitialState,
    orderDimension: orderDimensionInitialState,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          profile: {
            ...state.addOrder.profile,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    case UPDATE_SHIP_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          ship: {
            ...state.addOrder.ship,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    case UPDATE_SHIPPING_COUNTRY:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          ship: {
            ...state.addOrder.ship,
            country: action.payload,
          },
        },
      };
    case UPDATE_SHIPPING_STATE:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          ship: {
            ...state.addOrder.ship,
            state: action.payload,
          },
        },
      };
    case UPDATE_BILL_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          bill: {
            ...state.addOrder.bill,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    case UPDATE_BILL_MULTIPLE_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          bill: {
            ...state.addOrder.bill,
            ...action.payload.fieldsToUpdate,
          },
        },
      };
    case UPDATE_BILLING_COUNTRY:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          bill: {
            ...state.addOrder.bill,
            countryBilling: action.payload,
          },
        },
      };
    case UPDATE_BILLING_STATE:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          bill: {
            ...state.addOrder.bill,
            stateBilling: action.payload,
          },
        },
      };
    case UPDATE_ORDER_FORM_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          order: {
            ...state.addOrder.order,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    case UPDATE_ORDER_FORM_ITEM_DETAIL:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          order: {
            ...state.addOrder.order,
            itemForm: action.payload,
          },
        },
      };
    case UPDATE_ORDER_FORM_INVOICE_CURRENCY:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          order: {
            ...state.addOrder.order,
            invoiceCurrency: action.payload,
          },
        },
      };
    case UPDATE_ORDER_DIMENSION_FORM:
      return {
        ...state,
        addOrder: {
          ...state.addOrder,
          orderDimension: {
            ...state.addOrder.orderDimension,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
