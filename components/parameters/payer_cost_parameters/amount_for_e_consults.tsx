import type { NextPage } from "next";
import { GetExpandedAll } from "../../../interfaces/parameters";
import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import AmountForEConsultsTable from "./amount_for_econsults.table";
import LargeInput from "../../util/large-input";
import { Code } from "../../../interfaces/tables";

const calculateAmountForEConsults = () => {
  let percentageOfTotalVisits = 0;
  let averagePhysicianTime = 0;
  let weightedCostPerVisit = 0;
  const codes: Code[] = JSON.parse(
    window.localStorage.getItem("codes") || "[]"
  );
  codes.forEach((code) => {
    percentageOfTotalVisits += Number(code.percentage_of_total_visits || "0");
    averagePhysicianTime +=
      (Number(code.avg_physician_time_spent || "0") *
        Number(code.percentage_of_total_visits || "0")) /
      100;
    weightedCostPerVisit +=
      (Number(code.CMS_non_facility_price || "0") *
        Number(code.percentage_of_total_visits || "0")) /
      100;
  });
  weightedCostPerVisit = Number(weightedCostPerVisit.toFixed(2));
  averagePhysicianTime = Number(averagePhysicianTime.toFixed(2));
  percentageOfTotalVisits = Number(percentageOfTotalVisits.toFixed(2));
  window.localStorage.setItem(
    "amountForEConsultsPercentageOfTotalVisits",
    percentageOfTotalVisits.toString()
  );
  window.localStorage.setItem(
    "amountForEConsultsAveragePhysicianTime",
    averagePhysicianTime.toString()
  );
  window.localStorage.setItem(
    "averageTimeSpentOnEConsultByDoctor",
    averagePhysicianTime.toString()
  );
  window.localStorage.setItem(
    "amountForEConsultsWeightedCostPerVisit",
    weightedCostPerVisit.toString()
  );

  return {
    percentageOfTotalVisits,
    averagePhysicianTime,
    weightedCostPerVisit,
  };
};

const AmountForEConsults: NextPage<GetExpandedAll> = ({ expandAllSetting }) => {
  const [expanded, setExpanded] = useState(false);
  const [weightedCostPerVisit, setWeightedCostPerVisit] = useState("");
  const [averageTimeSpent, setAverageTimeSpent] = useState("");

  useEffect(() => {
    setExpanded(expandAllSetting == "expanded");
  }, [expandAllSetting]);

  useEffect(() => {
    const handleStorageEvent = () => {
      const { weightedCostPerVisit, averagePhysicianTime } =
        calculateAmountForEConsults();
      setWeightedCostPerVisit(String(weightedCostPerVisit));
      setAverageTimeSpent(String(averagePhysicianTime));
    };
    handleStorageEvent();

    window.addEventListener("amountForEConsults", handleStorageEvent);

    return () =>
      window.removeEventListener("amountForEConsults", handleStorageEvent);
  }, []);

  const displayExpandedTable = () => {
    if (expanded) {
      return <AmountForEConsultsTable />;
    }
  };

  return (
    <div className="mx-4 mt-4 grid rounded-xl border border-casal-300 px-6 py-6 md:mx-28">
      <div className="flex justify-between">
        <div className="self-center text-lg font-semibold">
          <div className="flex">
            <p> For E-consults </p>
          </div>
          <p className="text-sm font-normal">
            {" "}
            Enter details of payor reimbursement for telemedicine visits{" "}
          </p>
        </div>
        <div className="col-span-2 flex space-x-4 justify-self-end">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
            <LargeInput
              {...{
                label: "Average amount of cost per visit ($)",
                placeholder: "",
                value: weightedCostPerVisit,
                setValue: setWeightedCostPerVisit,
                type: "USD",
                errored: false,
                disabled: true,
              }}
            />
            <LargeInput
              {...{
                label: "Average time spent (in minutes)",
                placeholder: "",
                value: averageTimeSpent,
                setValue: setAverageTimeSpent,
                type: "fixed2",
                errored: false,
                disabled: true,
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
      <div>{displayExpandedTable()}</div>
    </div>
  );
};

export default AmountForEConsults;
