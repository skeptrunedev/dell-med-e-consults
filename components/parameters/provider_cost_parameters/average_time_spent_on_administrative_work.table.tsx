import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { DetermineErrorStateForTwoDecimals } from "../../../utils/helpers";

const AverageTimeSpentOnAdministrativeWorkTable: NextPage = () => {
  const [zeroAdmin, setZeroAdmin] = useState<number>(0);
  const [fiveAdmin, setFiveAdmin] = useState<number>(50);
  const [tenAdmin, setTenAdmin] = useState<number>(40);
  const [fifteenAdmin, setFifteenAdmin] = useState<number>(10);
  const [twentyAdmin, setTwentyAdmin] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const checkPercentageSum = (): boolean => {
    return (
      zeroAdmin + fiveAdmin + tenAdmin + fifteenAdmin + twentyAdmin === 100
    );
  };

  useEffect(() => {
    setZeroAdmin(Number(window.localStorage.getItem("zeroAdmin") || "0"));
    setFiveAdmin(Number(window.localStorage.getItem("fiveAdmin") || "50"));
    setTenAdmin(Number(window.localStorage.getItem("tenAdmin") || "40"));
    setFifteenAdmin(
      Number(window.localStorage.getItem("fifteenAdmin") || "10")
    );
    setTwentyAdmin(Number(window.localStorage.getItem("twentyAdmin") || "0"));
    window.dispatchEvent(new Event("averageTimeSpentOnAdministrativeWork"));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    window.localStorage.setItem("zeroAdmin", zeroAdmin.toString());
    window.localStorage.setItem("fiveAdmin", fiveAdmin.toString());
    window.localStorage.setItem("tenAdmin", tenAdmin.toString());
    window.localStorage.setItem("fifteenAdmin", fifteenAdmin.toString());
    window.localStorage.setItem("twentyAdmin", twentyAdmin.toString());
    window.dispatchEvent(new Event("averageTimeSpentOnAdministrativeWork"));
  }, [zeroAdmin, fiveAdmin, tenAdmin, fifteenAdmin, twentyAdmin, loading]);

  return (
    <div className="mt-6 grid border-t border-casal-300">
      {/* Row */}
      <div className="mt-6 grid grid-cols-3 font-medium">
        <div>Time Spent</div>
        <div>Percentage</div>
        <span></span>
      </div>
      <div className="mt-6 grid grid-cols-3 space-y-4">
        {/* Row */}
        <div className="text-md mt-5 font-medium">
          <span> 0 mins </span>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[45%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"seven_point_five"}
            id={"seven_point_five_Id"}
            className={
              "w-3/5 rounded-md border px-3 py-2 font-medium text-casal-400 focus:border " +
              (DetermineErrorStateForTwoDecimals(zeroAdmin).valid &&
              checkPercentageSum()
                ? "border-casal-300 focus:outline-casal-300"
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={zeroAdmin}
            onChange={(e) => {
              setZeroAdmin(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setZeroAdmin(0);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-md mt-5 font-medium">
          <span> 5 mins </span>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[45%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"seven_point_five"}
            id={"seven_point_five_Id"}
            className={
              "w-3/5 rounded-md border px-3 py-2 font-medium text-casal-400 focus:border " +
              (DetermineErrorStateForTwoDecimals(fiveAdmin).valid &&
              checkPercentageSum()
                ? "border-casal-300 focus:outline-casal-300"
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={fiveAdmin}
            onChange={(e) => {
              setFiveAdmin(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setFiveAdmin(50);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-md mt-1 font-medium">
          <span> 10 mins </span>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[45%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"fourty_five"}
            id={"fourty_five_Id"}
            className={
              "w-3/5 rounded-md border px-3 py-2 font-medium text-casal-400 focus:border " +
              (DetermineErrorStateForTwoDecimals(tenAdmin).valid &&
              checkPercentageSum()
              ? "border-casal-300 focus:outline-casal-300"
              : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={tenAdmin}
            onChange={(e) => {
              setTenAdmin(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setTenAdmin(40);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-md mt-1 font-medium">
          <span> 15 mins </span>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[45%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"fifteen"}
            id={"fifteen_Id"}
            className={
              "w-3/5 rounded-md border px-3 py-2 font-medium text-casal-400 focus:border " +
              (DetermineErrorStateForTwoDecimals(fifteenAdmin).valid &&
              checkPercentageSum()
              ? "border-casal-300 focus:outline-casal-300"
              : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={fifteenAdmin}
            onChange={(e) => {
              setFifteenAdmin(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setFifteenAdmin(10);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-md mt-1 font-medium">
          <span> 20 mins </span>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[45%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"twenty_five"}
            id={"twenty_five_Id"}
            className={
              "w-3/5 rounded-md border px-3 py-2 font-medium text-casal-400 focus:border " +
              (DetermineErrorStateForTwoDecimals(twentyAdmin).valid &&
              checkPercentageSum()
              ? "border-casal-300 focus:outline-casal-300"
              : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={twentyAdmin}
            onChange={(e) => {
              setTwentyAdmin(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setTwentyAdmin(0);
          }}
        >
          Set to default
        </span>
      </div>
    </div>
  );
};

export default AverageTimeSpentOnAdministrativeWorkTable;
