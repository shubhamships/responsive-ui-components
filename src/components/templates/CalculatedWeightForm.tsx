export function CalculatedWeightForm() {
  return (
    <>
      <div className="grid gap-2 md:gap-4 grid-cols-3 m-2 p-2 justify-center">
        <div className="p-1 text-center border-dashed border ">
          <p className="font-semibold">2.00 KG</p>
          <p className="text-sm font-semibold text-gray-400">Dead weight</p>
        </div>
        <div className=" p-1 text-center border-dashed border ">
          <p className="font-semibold">4.80 KG</p>
          <p className="text-sm font-semibold text-gray-400">
            Volumetric weight
          </p>
        </div>
        <div className="p-1 text-center border-dashed border border-black ">
          <p className="font-semibold">4.80 KG</p>
          <p className="text-sm font-semibold text-gray-400">Billed weight</p>
        </div>
      </div>
    </>
  );
}
