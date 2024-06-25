import { Card } from "@/components/ui/card";
export default function LeftTab3({ oderDimensionForm }) {
  return (
    <Card className="lg:mt-36 lg:mx-2">
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">
          WEIGHT DETAILS
        </h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Weight</p>
            <p className="text-gray-300">{oderDimensionForm.weight}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Length</p>
            <p className="text-gray-300">{oderDimensionForm.length}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Breadth</p>
            <p className="text-gray-300">{oderDimensionForm.breadth}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Height</p>
            <p className="text-gray-300">{oderDimensionForm.height}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
