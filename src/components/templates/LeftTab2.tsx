import { Card } from "@/components/ui/card";
export default function LeftTab2({ orderForm }) {
  return (
    <Card>
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">ORDER DETAILS</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Invoice Number</p>
            <p className="text-gray-300">{orderForm.invoiceNumber}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Invoice Date</p>
            <p className="text-gray-300">{orderForm.invoiceDate}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Invoice Currency</p>
            <p className="text-gray-300">{orderForm.invoiceCurrency}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Order Ref./Id</p>
            <p className="text-gray-300">{orderForm.orderRef}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">IOSS</p>
            <p className="text-gray-300">{orderForm.ioss}</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">ITEM DETAILS</h2>
        <div className="grid grid-cols-1 gap-2">
          {orderForm.itemForm.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="text-white">Product Name - {item.prodName}</p>
              <p className="text-sm text-white">SKU- {item.sku}</p>
              <p className="text-sm text-white">HSN - {item.hsn}</p>
              <p className="text-sm text-white">Quantity - {item.qty}</p>
              <p className="text-sm text-white">Unit Price -{item.unitPrice}</p>
              <p className="text-sm text-white">IGST - {item.igst}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
