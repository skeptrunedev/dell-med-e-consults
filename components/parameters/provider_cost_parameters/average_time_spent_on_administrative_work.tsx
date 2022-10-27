import type { NextPage } from "next";
import { GetExpandedAll } from "../../../interfaces/parameters";
import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import LargeInput from "../../util/large-input";
import AverageTimeSpentOnAdministrativeWorkTable from "./average_time_spent_on_administrative_work.table";

const calculateAverageTimeSpentOnAdministrativeWork = () => {
  let averageTimeSpentOnAdministrativeWork = 0;
  averageTimeSpentOnAdministrativeWork +=
    (5 * Number(window.localStorage.getItem("fiveAdmin") || "0")) / 100;
  averageTimeSpentOnAdministrativeWork +=
    (10 * Number(window.localStorage.getItem("tenAdmin") || "0")) / 100;
  averageTimeSpentOnAdministrativeWork +=
    (15 * Number(window.localStorage.getItem("fifteenAdmin") || "0")) / 100;
  averageTimeSpentOnAdministrativeWork +=
    (20 * Number(window.localStorage.getItem("twentyAdmin") || "0")) / 100;
  averageTimeSpentOnAdministrativeWork = Number(
    averageTimeSpentOnAdministrativeWork.toFixed(2)
  );
  window.localStorage.setItem(
    "averageTimeSpentAdministrativeWork",
    averageTimeSpentOnAdministrativeWork.toString()
  );

  return String(averageTimeSpentOnAdministrativeWork);
};

const AverageTimeSpentOnAdministrativeWork: NextPage<GetExpandedAll> = ({
  expandAllSetting,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [totalAmount, setTotalAmount] = useState("0");

  useEffect(() => {
    setExpanded(expandAllSetting == "expanded");
  }, [expandAllSetting]);

  useEffect(() => {
    const handleStorageEvent = () => {
      setTotalAmount(calculateAverageTimeSpentOnAdministrativeWork());
    };
    handleStorageEvent();

    window.addEventListener(
      "averageTimeSpentOnAdministrativeWork",
      handleStorageEvent
    );

    return () =>
      window.removeEventListener(
        "averageTimeSpentOnAdministrativeWork",
        handleStorageEvent
      );
  }, []);

  const displayExpandedTable = () => {
    if (expanded) {
      return <AverageTimeSpentOnAdministrativeWorkTable />;
    }
  };

  return (
    <div className="mx-4 mt-4 grid rounded-xl border border-casal-300 px-6 py-6 md:mx-28">
      <div className="flex justify-between">
        <div className="self-center text-lg font-semibold">
          <span> Average Time Spent on Administrative Work</span>
        </div>
        <div className="col-span-2 flex space-x-4 justify-self-end">
          <div className="grid">
            <LargeInput
              {...{
                label: "Time (In Minutes)",
                placeholder: "",
                value: totalAmount,
                setValue: () => {},
                type: "fixed2",
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

export default AverageTimeSpentOnAdministrativeWork;
