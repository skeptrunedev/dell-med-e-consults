import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LargeInput from "../../util/large-input";
import { DetermineErrorStateForTextTwoDecimals } from "../../../utils/helpers";

const WageRateForSpecialist: NextPage = () => {
  const [specialistWageRate, setSpecialistWageRate] = useState("150.00");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSpecialistWageRate(
      window.localStorage.getItem("specialistWageRate") || "150.00"
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.localStorage.setItem("specialistWageRate", specialistWageRate);
      window.dispatchEvent(new Event("specialistWageRate"));
    }
  }, [specialistWageRate, loading]);

  return (
    <div className="mx-4 mt-4 grid rounded-xl border border-casal-300 px-6 py-6 md:mx-28">
      <div className="flex justify-between md:pr-9">
        <div className="self-center text-lg font-semibold">
          <span> Physician Salary ($/Hour) </span>
        </div>
        <div className="col-span-2 flex space-x-4 justify-self-end">
          <div className="grid">
            <LargeInput
              {...{
                label: "",
                placeholder: "",
                value: specialistWageRate,
                setValue: setSpecialistWageRate,
                type: "USD",
                disabled: false,
                errored: !DetermineErrorStateForTextTwoDecimals(specialistWageRate).valid,
              }}
            />
          </div>
          <span
            className="mt-2 cursor-pointer select-none self-center text-casal-300"
            onClick={() => setSpecialistWageRate("150.00")}
          >
            Set to default
          </span>
        </div>
      </div>
    </div>
  );
};

export default WageRateForSpecialist;
