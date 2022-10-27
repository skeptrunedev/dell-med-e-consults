import type { NextPage } from "next";
import { useState, useEffect, ReactNode } from "react";
import { Code } from "../../../interfaces/tables";
import { DetermineErrorStateForPercent, DetermineErrorStateForTwoDecimals, DetermineErrorStateForWholeNumbers } from "../../../utils/helpers";

const defaultCodes: Code[] = [
  {
    id: 1,
    code: "99441",
    code_details: "phone 5-10 minutes",
    CMS_non_facility_price: 56.75,
    percentage_of_total_visits: 30,
    avg_physician_time_spent: 7.5,
  },
  {
    id: 2,
    code: "99442",
    code_details: "phone 11-20 minutes",
    CMS_non_facility_price: 91.71,
    percentage_of_total_visits: 20,
    avg_physician_time_spent: 15,
  },
  {
    id: 3,
    code: "99443",
    code_details: "phone 21-30 minutes",
    CMS_non_facility_price: 129.77,
    percentage_of_total_visits: 10,
    avg_physician_time_spent: 25,
  },
  {
    id: 4,
    code: "99451",
    code_details: "interprofessional consult 5+ minutes",
    CMS_non_facility_price: 36.34,
    percentage_of_total_visits: 40,
    avg_physician_time_spent: 10,
  },
];

const AmountForEConsultsTable: NextPage = () => {
  const [codes, setCodes] = useState<Code[]>(
    JSON.parse(JSON.stringify(defaultCodes))
  );
  const [loading, setLoading] = useState<boolean>(true);

  const checkPercentageSum = (): boolean => {
    let sum = 0;
    for(let i = 0; i < codes.length; i++) {
      sum += codes[i].percentage_of_total_visits;
    }

    return sum === 100;
  };

  useEffect(() => {
    setCodes(
      window.localStorage.getItem("codes")
        ? JSON.parse(
            window.localStorage.getItem("codes") || JSON.stringify(defaultCodes)
          )
        : defaultCodes
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.localStorage.setItem("codes", JSON.stringify(codes));
      window.dispatchEvent(new Event("amountForEConsults"));
    }
  }, [codes, loading]);

  const codeInputs: ReactNode = codes.map((code, index) => {
    return (
      <div className="grid grid-cols-6" key={index}>
        <input
          type="text"
          name={"CPT_Code_" + index}
          id={"CPT_Code_" + index + "Id"}
          className="w-3/5 rounded-md border border-casal-300 px-3 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300"
          placeholder={"00000"}
          disabled={false}
          value={code.code}
          onChange={(e) => {
            var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
            code.code = e.target.value;
            codesCopy[index] = code;
            setCodes([...codesCopy]);
          }}
        />
        <input
          type="text"
          name={"code_details" + index}
          id={"code_details" + index + "Id"}
          className="w-11/12 rounded-md border border-casal-300 px-3 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300"
          placeholder={""}
          disabled={false}
          value={code.code_details}
          onChange={(e) => {
            var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
            code.code_details = e.target.value;
            codesCopy[index] = code;
            setCodes([...codesCopy]);
          }}
        />

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name={"CMS_non_facility_price" + index}
            id={"CMS_non_facility_price" + index + "Id"}
            className={"w-5/6 rounded-md border border-casal-300 px-3 py-2 pl-6 font-medium text-casal-400 focus:border focus:outline-casal-300 " + (DetermineErrorStateForTwoDecimals(code.CMS_non_facility_price).valid ? "" : "border-red-500 focus:outline-red-500")}
            placeholder={"10.00"}
            disabled={false}
            value={code.CMS_non_facility_price}
            onChange={(e) => {
              var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
              code.CMS_non_facility_price = Number(e.target.value);
              codesCopy[index] = code;
              setCodes([...codesCopy]);
            }}
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[40%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>

          <input
            type="number"
            name={"percentage_of_total_visits_" + index}
            id={"percentage_of_total_visits_" + index + "_Id"}
            className={"w-2/3 rounded-md border border-casal-300 px-3 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300 appearance-none " + (DetermineErrorStateForPercent(code.percentage_of_total_visits).valid && checkPercentageSum() ? "" : "border-red-500 focus:outline-red-500")}
            placeholder={"0.00"}
            disabled={false}
            value={code.percentage_of_total_visits}
            onChange={(e) => {
              var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
              code.percentage_of_total_visits = Number(e.target.value);
              codesCopy[index] = code;
              setCodes([...codesCopy]);
            }}
          />
        </div>

        <input
          type="number"
          name={"avg_physician_time_spent" + index}
          id={"avg_physician_time_spent" + index + "Id"}
          className={"w-2/3 rounded-md border border-casal-300 px-3 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300 " + (DetermineErrorStateForTwoDecimals(code.avg_physician_time_spent).valid ? "" : "border-red-500 focus:outline-red-500")}
          placeholder={"30"}
          disabled={false}
          value={code.avg_physician_time_spent}
          onChange={(e) => {
            var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
            code.avg_physician_time_spent = Number(e.target.value);
            codesCopy[index] = code;
            setCodes([...codesCopy]);
          }}
        />

        <span
          className="mt-2 cursor-pointer select-none text-center self-center text-casal-300"
          onClick={() => {
            var codesCopy: Code[] = JSON.parse(JSON.stringify(codes));
            if (index == 0) {
              codesCopy.shift();
            } else {
              codesCopy.splice(index, 1);
            }
            setCodes([...codesCopy]);
          }}
        >
          Delete
        </span>
      </div>
    );
  });

  return (
    <div className="mt-6 grid w-full space-y-4 border-t border-casal-300">
      {/* Headings */}
      <div className="mt-6 grid grid-cols-6 font-medium">
        <div>CPT Codes</div>
        <div>Visit Type</div>
        <div>Price Paid ($)</div>
        <div>% of total visits</div>
        <div>Time per e-consult (minutes)</div>
      </div>
      {codeInputs}
      <div className="flex space-x-4">
        <button
          className="w-fit text-casal-300"
          onClick={() => {
            setCodes((oldCodes) => [
              ...oldCodes,
              {
                code: "00000",
                code_details: "",
                CMS_non_facility_price: 0,
                percentage_of_total_visits: 0.0,
                avg_physician_time_spent: 0.0,
              },
            ]);
          }}
        >
          + New Code
        </button>
        <span
          className="cursor-pointer select-none self-center text-casal-300"
          onClick={() => {
            setCodes(JSON.parse(JSON.stringify(defaultCodes)));
          }}
        >
          Set to default
        </span>
      </div>
    </div>
  );
};

export default AmountForEConsultsTable;
