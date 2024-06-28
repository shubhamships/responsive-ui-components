import Service from "@/components/elements/Service";
import { CalculatedWeightForm } from "@/components/templates/CalculatedWeightForm";
import LeftTab4 from "@/components/templates/LeftTab4";
import LeftTab1 from "@/components/templates/LeftTab1";
import LeftTab2 from "@/components/templates/LeftTab2";
import LeftTab3 from "@/components/templates/LeftTab3";
import SuccessScreen from "@/components/templates/SuccessScreen";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function AddOrder4() {
  const availableServices = [
    {
      name: "UPS",
      estimated: "Estimated time between 5 to 8 days",
      amount: "16740",
    },
    {
      name: "ABC",
      estimated: "Estimated time between 4 to 7 days",
      amount: "15740",
    },
    {
      name: "DEF",
      estimated: "Estimated time between 3 to 6 days",
      amount: "18740",
    },
    {
      name: "GHI",
      estimated: "Estimated time between 2 to 4 days",
      amount: "12740",
    },
  ];

  const [showSuccess, setShowSuccess] = useState(false);

  const successHandler = () => {
    setShowSuccess(true);
  };

  const cancelBox = () => {
    setShowSuccess(false);
  };
  const profileDetailsForm = useSelector((state: RootState) => state.profile);
  const shipDetailsForm = useSelector((state: RootState) => state.shipDetails);
  const billingDetailsForm = useSelector(
    (state: RootState) => state.billDetails
  );
  const orderForm = useSelector((state: RootState) => state.orderDetails);
  const orderDimensionForm = useSelector(
    (state: RootState) => state.orderDimensionDetails
  );

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
        <div className="lg:col-span-1 lg:overflow-y-auto lg:max-h-[600px]">
          <LeftTab1
            profileDetailsForm={profileDetailsForm}
            shipDetailsForm={shipDetailsForm}
            billingDetailsForm={billingDetailsForm}
          />
          <LeftTab2 orderForm={orderForm} />
          <LeftTab3 oderDimensionForm={orderDimensionForm} />
          <LeftTab4 />
        </div>
        <div className="lg:col-span-3">
          <div className="m-2 p-2">
            <p className="font-bold text-cyan-500 text-2xl mb-2">
              Select Shipping Partner
            </p>
            <p className="text-xs font-medium mt-3 mb-5 text-justify">
              All shipments via ShipGlobal Direct service are Delivered Duty
              Paid (DDP), hence no extra duty will be billed on the consignee or
              the shipper. Rates are inclusive of covid & fuel surcharge,
              exclusive of GST and ex-Delhi Hub
            </p>
            <p className="text-md font-medium my-2">
              If you need more info, please call/whatsapp at
              <a href="#" className="text-cyan-500 text-sm ml-1">
                011-422 77 777.
              </a>
            </p>
          </div>
          <CalculatedWeightForm />
          {availableServices.map((item, index) => (
            <div key={index}>
              <Service
                company={item.name}
                duration={item.estimated}
                cost={item.amount}
              />
            </div>
          ))}
          <Button onClick={successHandler}>Submit</Button>
          {showSuccess && <SuccessScreen cancelBox={cancelBox} />}
        </div>
      </div>
    </>
  );
}
