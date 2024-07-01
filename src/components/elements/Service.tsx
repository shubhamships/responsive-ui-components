import { Input } from "@/components/ui/input";

export default function Service({ company, cost, duration, onSelect }) {
  const handleInputChange = () => {
    const selectedService = { company, cost, duration };
    onSelect(selectedService);
  };
  return (
    <div className="p-2 border border-dashed border-gray-400 lg:m-2 flex items-center">
      <label className="flex items-center w-full justify-between">
        <div className="w-8 h-8 mr-4 flex items-center justify-left">
          <Input
            type="radio"
            id="html"
            name="fav_language"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center flex-col">
          <p className="font-bold">{company}</p>
          <p className="font-semibold text-gray-600">{duration}</p>
        </div>
        <div className="flex items-center flex-col">
          <p className="font-semibold mr-1">Rs. </p>
          <p className="text-xl font-bold">{cost}</p>
        </div>
      </label>
    </div>
  );
}
