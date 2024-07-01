//ALL THE INTERFACES OF DIFFERENT FORMS ARE DEFINED HERE

//PROFILE DETAILS FORM INTERFACE

interface ProfileState {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: string;
  email: string;
}
export const profileInitialState: ProfileState = {
  id: 1,
  firstName: "",
  lastName: "",
  phone: "",
  alternatePhone: "",
  email: "",
};

//SHIPPING DETAILS FORM INTERFACE
interface ShipDetailsState {
  id: number;
  addressOne: string;
  landmark: string;
  addressTwo: string;
  houseNumber: string;
  street: string;
  locality: string;
  pincode: string;
  city: string;
  country: string;
  state: string;
}
export const shipInitialState: ShipDetailsState = {
  id: 1,
  addressOne: "",
  landmark: "",
  addressTwo: "",
  houseNumber: "",
  street: "",
  locality: "",
  pincode: "",
  city: "",
  country: "",
  state: "",
};

//BILLING DETAILS FORM INTERFACE
interface BillDetailsState {
  id: number;
  addressOne: string;
  landmark: string;
  addressTwo: string;
  houseNumber: string;
  street: string;
  locality: string;
  pincode: string;
  city: string;
  country: string;
  state: string;
}
export const billInitialState: BillDetailsState = {
  id: 1,
  addressOne: "",
  landmark: "",
  addressTwo: "",
  houseNumber: "",
  street: "",
  locality: "",
  pincode: "",
  city: "",
  country: "",
  state: "",
};

//ORDER DETAILS FORM INTERFACE
export interface ItemForm {
  id: number;
  prodName: string;
  sku: string;
  hsn: string;
  qty: string;
  unitPrice: string;
  igst: string;
}

interface OrderFormState {
  invoiceNumber: string;
  invoiceDate: string;
  invoiceCurrency: string;
  orderRef: string;
  ioss: string;
  itemForm: ItemForm[];
}
export const orderFormInitialState: OrderFormState = {
  invoiceNumber: "",
  invoiceDate: "",
  invoiceCurrency: "",
  orderRef: "",
  ioss: "",
  itemForm: [
    { id: 1, prodName: "", sku: "", hsn: "", qty: "", unitPrice: "", igst: "" },
  ],
};

//ORDER DIMENSION DETAILS FORM INTERFACE
interface OrderDimensionState {
  height: string;
  weight: string;
  length: string;
  breadth: string;
}
export const orderDimensionInitialState: OrderDimensionState = {
  height: "",
  weight: "",
  length: "",
  breadth: "",
};
