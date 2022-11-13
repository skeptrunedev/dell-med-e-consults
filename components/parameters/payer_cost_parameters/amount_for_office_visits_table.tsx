import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { DetermineErrorStateForTwoDecimals } from "../../../utils/helpers";

const AmountForOfficeVisitsTable: NextPage = () => {
  const [medicareFee, setMedicareFee] = useState<number>(169);
  const [medicarePercentage, setMedicarePercentage] = useState<number>(90);
  const [commercialFee, setCommercialFee] = useState<number>(100);
  const [commercialPercentage, setCommercialPercentage] = useState<number>(0);
  const [otherFee, setOtherFee] = useState<number>(80);
  const [otherPercentage, setOtherPercentage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);

  const checkPercentageSum = (): boolean => {
    return medicarePercentage + commercialPercentage + otherPercentage === 100;
  };

  useEffect(() => {
    setMedicareFee(Number(window.localStorage.getItem("medicareFee") || "169"));
    setMedicarePercentage(
      Number(window.localStorage.getItem("medicarePercentage") || "90")
    );
    setCommercialFee(
      Number(window.localStorage.getItem("commercialFee") || "100")
    );
    setCommercialPercentage(
      Number(window.localStorage.getItem("commercialPercentage") || "0")
    );
    setOtherFee(Number(window.localStorage.getItem("otherFee") || "80"));
    setOtherPercentage(
      Number(window.localStorage.getItem("otherPercentage") || "10")
    );
    window.dispatchEvent(new Event("amountForOfficeVisits"));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    window.localStorage.setItem("medicareFee", medicareFee.toString());
    window.localStorage.setItem(
      "medicarePercentage",
      medicarePercentage.toString()
    );
    window.localStorage.setItem("commercialFee", commercialFee.toString());
    window.localStorage.setItem(
      "commercialPercentage",
      commercialPercentage.toString()
    );
    window.localStorage.setItem("otherFee", otherFee.toString());
    window.localStorage.setItem("otherPercentage", otherPercentage.toString());
    window.dispatchEvent(new Event("amountForOfficeVisits"));
  }, [
    medicareFee,
    medicarePercentage,
    commercialFee,
    commercialPercentage,
    otherFee,
    otherPercentage,
    loading,
  ]);

  return (
    <div className="mt-6 grid border-t border-casal-300">
      {/* Row */}
      <div className="mt-6 grid grid-cols-4 gap-1 font-medium">
        <div>Insurance Type</div>
        <div>Average Fee</div>
        <div>Percentage of Total Visits</div>
        <span></span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-x-5 space-y-4">
        {/* Row */}
        <div className="text-sm sm:text-base mt-5 font-medium">
          <p> Medicare / Medicaid </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 left-0 flex items-center pl-1 sm:pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>

          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className={
              "w-full justify-self-center rounded-md border border-casal-300 py-2 pl-4 sm:pl-6 font-medium text-casal-400 focus:border focus:outline-casal-300 md:justify-self-start " +
              (DetermineErrorStateForTwoDecimals(medicareFee).valid
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={medicareFee}
            onChange={(e) => {
              setMedicareFee(Number(e.target.value));
            }}
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 right-0 flex items-center pr-[10%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>

          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className={
              "w-full justify-self-center rounded-md border border-casal-300 pl-2 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300 md:justify-self-start " +
              (DetermineErrorStateForTwoDecimals(medicarePercentage).valid &&
              checkPercentageSum()
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={medicarePercentage}
            onChange={(e) => {
              setMedicarePercentage(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setMedicareFee(169);
            setMedicarePercentage(90);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-sm sm:text-base mt-1 font-medium">
          <span> Commercial Insurance </span>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 left-0 flex items-center pl-1 sm:pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className={
              "w-full justify-self-center rounded-md border border-casal-300 py-2 pl-4 sm:pl-6 font-medium text-casal-400 focus:border focus:outline-casal-300 md:ml-0 md:justify-self-start " +
              (DetermineErrorStateForTwoDecimals(commercialFee).valid
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={commercialFee}
            onChange={(e) => {
              setCommercialFee(Number(e.target.value));
            }}
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 right-0 flex items-center pr-[10%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className={
              "w-full justify-self-center rounded-md border border-casal-300 pl-2 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300 md:justify-self-start " +
              (DetermineErrorStateForTwoDecimals(commercialPercentage).valid &&
              checkPercentageSum()
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={commercialPercentage}
            onChange={(e) => {
              setCommercialPercentage(Number(e.target.value));
            }}
          />
        </div>

        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setCommercialFee(100);
            setCommercialPercentage(0);
          }}
        >
          Set to default
        </span>
        {/* Row */}
        <div className="text-sm sm:text-base mt-1 font-medium">
          <span> Other Insurance </span>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 left-0 flex items-center pl-1 sm:pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className={
              "w-full justify-self-center rounded-md border border-casal-300 py-2 pl-4 sm:pl-6 font-medium text-casal-400 focus:border focus:outline-casal-300 md:justify-self-start " +
              (DetermineErrorStateForTwoDecimals(otherFee).valid
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={otherFee}
            onChange={(e) => {
              setOtherFee(Number(e.target.value));
            }}
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute pt-2 sm:pt-0 sm:inset-y-0 right-0 flex items-center pr-[10%]">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className={
              "w-full rounded-md border border-casal-300 pl-2 py-2 font-medium text-casal-400 focus:border focus:outline-casal-300 " +
              (DetermineErrorStateForTwoDecimals(otherPercentage).valid &&
              checkPercentageSum()
                ? ""
                : "border-red-500 focus:outline-red-500")
            }
            placeholder={"00000"}
            disabled={false}
            value={otherPercentage}
            onChange={(e) => {
              setOtherPercentage(Number(e.target.value));
            }}
          />
        </div>
        <span
          className="cursor-pointer select-none self-center text-center text-casal-300"
          onClick={() => {
            setOtherFee(80);
            setOtherPercentage(10);
          }}
        >
          Set to default
        </span>
      </div>
    </div>
  );
};

export default AmountForOfficeVisitsTable;
