import { Card } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function LeftTabOne() {
  const { profile, ship, bill } = useSelector(
    (state: RootState) => state.addOrder
  );
  return (
    <Card className="lg:mt-8">
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">PROFILE</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Name</p>
            <p className="text-gray-300">
              {profile.firstName} {profile.lastName}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Phone</p>
            <p className="text-gray-300">{profile.phone}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Alternate No.</p>
            <p className="text-gray-300">{profile.alternatePhone}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Email</p>
            <p className="text-gray-300">{profile.email}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">ADDRESS</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Shipping Address</p>
            <p className="text-gray-300">
              {ship.country === "afghanistan" ? (
                <>
                  {ship.houseNumber} {ship.street} {ship.locality}{" "}
                </>
              ) : (
                <>
                  {ship.addressOne} {ship.addressTwo} {ship.landmark}{" "}
                </>
              )}
              {ship.city}
              {ship.state} {ship.pincode} {ship.country}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Billing Address</p>
            <p className="text-gray-300">
              {bill.country === "afghanistan" ? (
                <>
                  {bill.house} {bill.street} {bill.locality}{" "}
                </>
              ) : (
                <>
                  {bill.addressOne} {bill.addressTwo} {bill.landmark}{" "}
                </>
              )}
              {bill.city} {bill.state} {bill.pincode} {bill.country}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
