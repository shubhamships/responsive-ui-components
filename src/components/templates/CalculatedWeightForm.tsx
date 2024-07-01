import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function CalculatedWeightForm() {
  const orderDimensionForm = useSelector(
    (state: RootState) => state.addOrder.orderDimension
  );

  // Calculate volumetric weight
  const volumetricWeight =
    (parseInt(orderDimensionForm.length) *
      parseInt(orderDimensionForm.breadth) *
      parseInt(orderDimensionForm.height)) /
    5000;

  // Round volumetricWeight and weight to 2 decimal places
  const roundedVolumetricWeight = parseFloat(volumetricWeight.toFixed(2));
  const roundedWeight = parseFloat(
    parseInt(orderDimensionForm.weight).toFixed(2)
  );

  // Calculate billed weight based on conditions
  const billedWeight =
    volumetricWeight < roundedWeight ? roundedWeight : roundedVolumetricWeight;

  return (
    <>
      <div className="grid gap-2 md:gap-4 grid-cols-3 p-2 justify-center">
        <div className="p-1 text-center border-dashed border">
          <p className="font-semibold">{roundedWeight} KG</p>
          <p className="text-sm font-semibold text-gray-400">Dead weight</p>
        </div>
        <div className="p-1 text-center border-dashed border">
          <p className="font-semibold">
            {roundedVolumetricWeight < 0.01 ? 0.01 : roundedVolumetricWeight} KG
          </p>
          <p className="text-sm font-semibold text-gray-400">
            Volumetric weight
          </p>
        </div>
        <div className="p-1 text-center border-dashed border border-black">
          <p className="font-semibold">{billedWeight} KG</p>
          <p className="text-sm font-semibold text-gray-400">Billed weight</p>
        </div>
      </div>
    </>
  );
}
