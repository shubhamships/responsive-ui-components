import { useSelector } from "react-redux";
import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
import { RootState } from "@/redux/store";
export default function OrderDetailsForm({
  handleInputOrderDetailChange,
  handleInvoiceCurrency,
}) {
  const selectCurrency = [
    { key: "inr", value: "INR" },
    { key: "usd", value: "USD" },
    { key: "eur", value: "EUR" },
    { key: "gbp", value: "GBP" },
  ];
  const { order } = useSelector((state: RootState) => state.addOrder);
  return (
    <>
      <div className="mt-4 mb-4 font-bold text-cyan-500 text-2xl">
        Order Details
      </div>
      <div className="grid md:grid-cols-3 md:gap-3j">
        <SGFormField
          name="invoiceNumber"
          label="Invoice Number"
          type="number"
          message="Only digits allowed"
          pattern="^\S.*$"
          required
          placeholder="Enter Invoice Number"
          inputValue={order.invoiceNumber}
          onChangeFn={handleInputOrderDetailChange}
        />
        <SGFormField
          name="invoiceDate"
          label="Invoice Date"
          type="date"
          pattern="^\S.*$"
          required
          placeholder="Enter Invoice Date"
          inputValue={order.invoiceDate}
          onChangeFn={handleInputOrderDetailChange}
        />
        <SGFormSelect
          name="invoiceCurrency"
          label="Invoice Currency"
          placeholder={
            order.invoiceCurrency ? order.invoiceCurrency : "Select Currency"
          }
          data={selectCurrency}
          setSelectValueObj={handleInvoiceCurrency}
        />
        <SGFormField
          name="orderRef"
          label="Order Id/Ref."
          type="text"
          message="Don't add spaces at beginning"
          pattern="^\S.*$"
          required
          placeholder="Enter Order Id/Ref."
          inputValue={order.orderRef}
          onChangeFn={handleInputOrderDetailChange}
        />
        <SGFormField
          name="ioss"
          label="IOSS"
          message="Don't add spaces at beginning"
          pattern="^\S.*$"
          type="text"
          required
          placeholder="Enter IOSS"
          inputValue={order.ioss}
          onChangeFn={handleInputOrderDetailChange}
        />
      </div>
    </>
  );
}
