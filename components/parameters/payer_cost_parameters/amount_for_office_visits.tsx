import type { NextPage } from "next";
import { GetExpandedAll } from "../../../interfaces/parameters";
import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import LargeInput from "../../util/large-input";
import AmountForOfficeVisitsTable from "./amount_for_office_visits_table";

const calculateAmountForOfficeVisit = () => {
  let amountForOfficeVisit = 0;
  amountForOfficeVisit +=
    (Number(window.localStorage.getItem("medicareFee") || "0") *
      Number(window.localStorage.getItem("medicarePercentage") || "0")) /
    100;
  amountForOfficeVisit +=
    (Number(window.localStorage.getItem("commercialFee") || "0") *
      Number(window.localStorage.getItem("commercialPercentage") || "0")) /
    100;
  amountForOfficeVisit +=
    (Number(window.localStorage.getItem("otherFee") || "0") *
      Number(window.localStorage.getItem("otherPercentage") || "0")) /
    100;
  amountForOfficeVisit = Number(amountForOfficeVisit.toFixed(2));
  window.localStorage.setItem(
    "amountForOfficeVisit",
    amountForOfficeVisit.toString()
  );

  return String(amountForOfficeVisit);
};

const AmountForOfficeVisit: NextPage<GetExpandedAll> = ({
  expandAllSetting,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [totalAmount, setTotalAmount] = useState("$100");

  useEffect(() => {
    setExpanded(expandAllSetting == "expanded");
  }, [expandAllSetting]);

  useEffect(() => {
    const handleStorageEvent = () => {
      setTotalAmount(calculateAmountForOfficeVisit());
    };
    handleStorageEvent();

    window.addEventListener("amountForOfficeVisits", handleStorageEvent);

    return () =>
      window.removeEventListener("amountForOfficeVisits", handleStorageEvent);
  }, []);

  const displayExpandedTable = () => {
    if (expanded) {
      return <AmountForOfficeVisitsTable />;
    }
  };

  return (
    <div className="mx-4 mt-4 grid rounded-xl border border-casal-300 px-6 py-6 md:mx-28">
      <div className="flex justify-between">
        <div className="self-center text-lg font-semibold">
          <p> For Office Visits </p>
          <p className="text-sm font-normal">
            {" "}
            Enter details of payor reimbursement for office visits{" "}
          </p>
        </div>
        <div className="col-span-2 flex space-x-4 justify-self-end">
          <div className="grid">
            <LargeInput
              {...{
                label: "Average cost per visit ($)",
                placeholder: "",
                value: totalAmount,
                setValue: () => {},
                type: "USD",
                disabled: true,
                errored: false,
              }}
            />
          </div>
          <span
            className="ml-2 mt-2 h-6 w-6 cursor-pointer self-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </span>
        </div>
      </div>
      {displayExpandedTable()}
    </div>
  );
};

export default AmountForOfficeVisit;
