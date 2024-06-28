import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function CalculatedWeightForm() {
  const orderDimensionForm = useSelector(
    (state: RootState) => state.orderDimensionDetails
  );
  const volumetricWeight =
    (parseInt(orderDimensionForm.length) *
      parseInt(orderDimensionForm.breadth) *
      parseInt(orderDimensionForm.height)) /
    5000;
  return (
    <>
      <div className="grid gap-2 md:gap-4 grid-cols-3 m-2 p-2 justify-center">
        <div className="p-1 text-center border-dashed border ">
          <p className="font-semibold">{orderDimensionForm.weight} KG</p>
          <p className="text-sm font-semibold text-gray-400">Dead weight</p>
        </div>
        <div className=" p-1 text-center border-dashed border ">
          <p className="font-semibold">
            {volumetricWeight < 0.01 ? 0.01 : volumetricWeight} KG
          </p>
          <p className="text-sm font-semibold text-gray-400">
            Volumetric weight
          </p>
        </div>
        <div className="p-1 text-center border-dashed border border-black ">
          <p className="font-semibold">
            {volumetricWeight < parseInt(orderDimensionForm.weight)
              ? volumetricWeight
              : orderDimensionForm.weight}{" "}
            KG
          </p>
          <p className="text-sm font-semibold text-gray-400">Billed weight</p>
        </div>
      </div>
    </>
  );
}
