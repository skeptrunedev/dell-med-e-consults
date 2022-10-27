import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LargeInput from "../../util/large-input";
import { DetermineErrorStateForTextTwoDecimals } from "../../../utils/helpers";

const AverageWageRateForSupportingStaff: NextPage = () => {
  const [
    averageWageRateForSupportingStaff,
    setAverageWageRateForSupportingStaff,
  ] = useState("50.00");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setAverageWageRateForSupportingStaff(
      window.localStorage.getItem("averageWageRateForSupportingStaff") ||
        "50.00"
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.localStorage.setItem(
        "averageWageRateForSupportingStaff",
        averageWageRateForSupportingStaff
      );
      window.dispatchEvent(new Event("averageWageRateForSupportingStaff"));
    }
  }, [averageWageRateForSupportingStaff, loading]);

  return (
    <div className="mx-4 mt-4 grid rounded-xl border border-casal-300 px-6 py-6 md:mx-28">
      <div className="flex justify-between md:pr-9">
        <div className="self-center text-lg font-semibold">
          <span> Support Staff Salary ($/Hour) </span>
        </div>
        <div className="col-span-2 flex space-x-4 justify-self-end">
          <div className="grid">
            <LargeInput
              {...{
                label: "",
                placeholder: "",
                value: averageWageRateForSupportingStaff,
                setValue: setAverageWageRateForSupportingStaff,
                type: "USD",
                disabled: false,
                errored: !DetermineErrorStateForTextTwoDecimals(averageWageRateForSupportingStaff).valid,
              }}
            />
          </div>
          <span
            className="mt-2 cursor-pointer select-none self-center text-casal-300"
            onClick={() => setAverageWageRateForSupportingStaff("50.00")}
          >
            Set to default
          </span>
        </div>
      </div>
    </div>
  );
};

export default AverageWageRateForSupportingStaff;
