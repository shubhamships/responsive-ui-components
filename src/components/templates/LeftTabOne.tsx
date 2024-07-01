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
                  {ship.address1} {ship.address2} {ship.landmark}{" "}
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
              {bill.countryBilling === "afghanistan" ? (
                <>
                  {bill.houseBilling} {bill.streetBilling}{" "}
                  {bill.localityBilling}{" "}
                </>
              ) : (
                <>
                  {bill.address1Billing} {bill.address2Billing}{" "}
                  {bill.landmarkBilling}{" "}
                </>
              )}
              {bill.cityBilling} {bill.stateBilling} {bill.pincodeBilling}{" "}
              {bill.countryBilling}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
