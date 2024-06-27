import { Card } from "@/components/ui/card";

export default function LeftTab1({
  profileDetailsForm,
  shipDetailsForm,
  billingDetailsForm,
}) {
  return (
    <Card className="lg:mt-8">
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">PROFILE</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Name</p>
            <p className="text-gray-300">
              {profileDetailsForm.firstName} {profileDetailsForm.lastName}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Phone</p>
            <p className="text-gray-300">{profileDetailsForm.phone}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Alternate No.</p>
            <p className="text-gray-300">{profileDetailsForm.alternatePhone}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-white">Email</p>
            <p className="text-gray-300">{profileDetailsForm.email}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 p-2 rounded-lg m-1 text-wrap overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">ADDRESS</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Shipping Address</p>
            <p className="text-gray-300">
              {shipDetailsForm.country === "afghanistan" ? (
                <>
                  {shipDetailsForm.houseNumber} {shipDetailsForm.street}{" "}
                  {shipDetailsForm.locality}{" "}
                </>
              ) : (
                <>
                  {shipDetailsForm.address1} {shipDetailsForm.address2}{" "}
                  {shipDetailsForm.landmark}{" "}
                </>
              )}
              {shipDetailsForm.city}
              {shipDetailsForm.state} {shipDetailsForm.pincode}
              {shipDetailsForm.country}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="mb-4">
            <p className="text-white">Billing Address</p>
            <p className="text-gray-300">
              {billingDetailsForm.countryBilling === "afghanistan" ? (
                <>
                  {billingDetailsForm.houseBilling}{" "}
                  {billingDetailsForm.streetBilling}{" "}
                  {billingDetailsForm.localityBilling}{" "}
                </>
              ) : (
                <>
                  {billingDetailsForm.address1Billing}{" "}
                  {billingDetailsForm.address2Billing}{" "}
                  {billingDetailsForm.landmarkBilling}{" "}
                </>
              )}
              {billingDetailsForm.cityBilling} {billingDetailsForm.stateBilling}{" "}
              {billingDetailsForm.pincodeBilling}{" "}
              {billingDetailsForm.countryBilling}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
