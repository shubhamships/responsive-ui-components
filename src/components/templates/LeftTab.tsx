import LeftTabOne from "../elements/LeftTabOne";
import LeftTabTwo from "./LeftTabTwo";
import LeftTabThree from "../elements/LeftTabThree";
import { useLocation } from "react-router-dom";

export default function LeftTab() {
  const path = useLocation().pathname;
  return (
    <>
      {["/add-order"].includes(path) ? null : ["/add-order2"].includes(path) ? (
        <LeftTabOne />
      ) : ["/add-order3"].includes(path) ? (
        <>
          <LeftTabOne />
          <LeftTabTwo />
        </>
      ) : ["/add-order4"].includes(path) ? (
        <>
          <LeftTabOne />
          <LeftTabTwo />
          <LeftTabThree />
        </>
      ) : null}
    </>
  );
}
