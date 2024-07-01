import SGFormField from "./SGFormField";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function OrderDimensionField({ handleInputChange }) {
  const { orderDimension } = useSelector((state: RootState) => state.addOrder);
  return (
    <>
      <SGFormField
        name="weight"
        label="Weight"
        type="number"
        required
        message="Only digits allowed"
        pattern="^\S.*$"
        placeholder=""
        inputValue={orderDimension.weight}
        onChangeFn={handleInputChange}
      />
      <SGFormField
        name="length"
        label="Length"
        type="number"
        required
        message="Only digits allowed"
        pattern="^\S.*$"
        placeholder=""
        inputValue={orderDimension.length}
        onChangeFn={handleInputChange}
      />
      <SGFormField
        name="breadth"
        label="Breadth"
        type="number"
        required
        message="Only digits allowed"
        pattern="^\S.*$"
        placeholder=""
        inputValue={orderDimension.breadth}
        onChangeFn={handleInputChange}
      />
      <SGFormField
        name="height"
        label="Height"
        type="number"
        required
        message="Only digits allowed"
        pattern="^\S.*$"
        placeholder=""
        inputValue={orderDimension.height}
        onChangeFn={handleInputChange}
      />
    </>
  );
}
