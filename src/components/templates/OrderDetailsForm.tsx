import SGFormField from "../elements/SGFormField";
import SGFormSelect from "../elements/SGFormSelect";
export default function OrderDetailsForm({
  handleInputChange,
  orderForm,
  setOrderForm,
}) {
  const selectCurrency = [
    { key: "inr", value: "INR" },
    { key: "usd", value: "USD" },
    { key: "eur", value: "EUR" },
    { key: "gbp", value: "GBP" },
  ];
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
          pattern="\S(.*\S)?"
          required
          placeholder="Enter Invoice Number"
          inputValue={orderForm.invoiceNumber}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="invoiceDate"
          label="Invoice Date"
          type="date"
          pattern="\S(.*\S)?"
          required
          placeholder="Enter Invoice Date"
          inputValue={orderForm.invoiceDate}
          onChangeFn={handleInputChange}
        />
        <SGFormSelect
          name="invoiceCurrency"
          label="Invoice Currency"
          placeholder="Currency"
          data={selectCurrency}
          setSelectValueObj={setOrderForm}
        />
        <SGFormField
          name="orderRef"
          label="Order Id/Ref."
          type="text"
          pattern="\S(.*\S)?"
          required
          placeholder="Enter Order Id/Ref."
          inputValue={orderForm.orderRef}
          onChangeFn={handleInputChange}
        />
        <SGFormField
          name="ioss"
          label="IOSS"
          pattern="\S(.*\S)?"
          type="text"
          required
          placeholder="Enter IOSS"
          inputValue={orderForm.ioss}
          onChangeFn={handleInputChange}
        />
      </div>
    </>
  );
}
