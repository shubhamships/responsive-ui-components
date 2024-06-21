import OrderDimensionField from "@/components/elements/OrderDimensionField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftTab from "@/components/templates/LeftTab";
import { DialogData } from "@/components/elements/DialogData";

export default function AddOrder3() {
  const [oderDimensionForm, setOderDimensionForm] = useState({
    weight: "",
    length: "",
    breadth: "",
    height: "",
  });
  const navigateTo = useNavigate();

  const shipDetails = [
    { title: "Weight", unit: "KG" },
    { title: "Length", unit: "CM" },
    { title: "Breadth", unit: "CM" },
    { title: "Height", unit: "CM" },
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOderDimensionForm({
      ...oderDimensionForm,
      [e.target.id]: e.target.value,
    });
  };

  const orderDimensionFormData = Object.entries(oderDimensionForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderDimensionFormData);
    navigateTo("/add-order4");
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <LeftTab />
        </div>
        <div className="md:col-span-2">
          <div className="m-4">
            <p className="font-bold text-cyan-500 text-2xl mb-2">
              Shipment Details
            </p>
            <p className="text-md font-medium mt-3 mb-5">
              If you need more info, please check out
              <a href="#" className="text-cyan-500 text-sm">
                Help Page.
              </a>
            </p>
          </div>
          <div>
            <div className="m-4 px-2">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:gap-3">
                  {shipDetails.map((item, index) => (
                    <OrderDimensionField
                      key={index}
                      oderDimensionForm={oderDimensionForm}
                      handleInputChange={handleInputChange}
                      title={item.title}
                      unit={item.unit}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center mt-8 mb-2">
                  <DialogData
                    content={JSON.stringify(orderDimensionFormData)}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
