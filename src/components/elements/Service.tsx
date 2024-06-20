import { Input } from "@/components/ui/input";

export default function Service({ company, cost, duration }) {
  return (
    <>
      <div className="m-4 p-2 border border-dashed border-gray-400 md:m-8">
        <div className="flex gap-4 flex-row justify-items-center">
          <div className="p-2">
            <Input type="radio" id="html" name="fav_language" value="HTML" />
          </div>
          <div>
            <p className="font-bold">{company}</p>
            <p className="font-semibold text-gray-600">{duration}</p>
          </div>
          <div>
            <p className="font-semibold">Rs. </p>
            <p className="text-xl font-bold">{cost}</p>
          </div>
        </div>
      </div>
    </>
  );
}
