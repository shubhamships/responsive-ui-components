import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useState } from "react";

export default function ItemDetails2() {
  const [itemForm, setItemForm] = useState([{ id: 1, prodName: "" }]);

  const addInputField = () => {
    const maxId = Math.max(...itemForm.map((item) => item.id));
    const newId = maxId + 1;
    setItemForm([...itemForm, { id: newId, prodName: "" }]);
  };

  const removeInputFields = (index) => {
    const rows = [...itemForm];
    rows.splice(index, 1);
    setItemForm(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...itemForm];
    list[index][name] = value;
    setItemForm(list);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(itemForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-4 p-4">
        {itemForm.map((data, index) => {
          const { id, prodName } = data;
          return (
            <div key={index}>
              <Label htmlFor={`prodName-${id}`}>
                Product Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                name="prodName"
                id={`prodName-${id}`}
                placeholder="Enter Product Name"
                required
                className="mt-2"
                value={prodName}
                onChange={(evnt) => handleChange(index, evnt)}
              />
              <div className="mt-2 mb-4">
                {itemForm.length !== 1 && (
                  <button
                    onClick={() => removeInputFields(index)}
                    className="btn bg-red-500 rounded-full text-white px-2 py-1"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="mt-8">
          <button
            type="button"
            onClick={addInputField}
            className="btn bg-sky-500 rounded-full text-white px-2 py-1 m-1"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 mb-2">
        <button
          type="submit"
          className="btn bg-sky-500 rounded-full text-white px-2 py-1"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
