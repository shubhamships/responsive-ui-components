import { useLocation } from "react-router-dom";

export default function NextBackSubmitButton() {
  const location = useLocation();
  const path = location.pathname;

  const handleBack = () => {
    history.go(-1); // Use goBack() to navigate back in history
  };

  return (
    <div className="lg:fixed lg:right-20 lg:bottom-2">
      {path === "/add-order" && (
        <button type="submit" className="bg-blue-600 p-2 text-white rounded">
          Next
        </button>
      )}

      {["/add-order2", "/add-order3"].includes(path) && (
        <div className="flex-row gap-10 flex">
          <div className="lg:fixed lg:left-96">
            <button
              type="button"
              className="bg-blue-600 p-2 text-white rounded"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 p-2 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {path === "/add-order4" && (
        <div className="lg:fixed lg:left-96 lg:bottom-2">
          <button
            type="button"
            className="bg-blue-600 p-2 text-white rounded"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
