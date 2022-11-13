import type { NextPage } from "next";
import { useState, useEffect } from "react";
import {
  calculateProviderCostsEConsultTotal,
  calculateAverageSavingsPerEConsultation,
  calculateSavingsForEConsultationAveragedOverProgram,
} from "../../utils/provider-costs-calculations";
import { calculateDecisionTreeAveragedOverProgram } from "../../utils/decision-tree-calculations";
import { InformationCircleIcon } from "@heroicons/react/outline";

const WTPTable: NextPage = () => {
  const [averageCostPerUsualCare, setAverageCostPerUsualCare] = useState("0");
  const [averageCostPerEConsultation, setAverageCostPerEConsultation] =
    useState("0");
  const [averageSavingsPerEConsultation, setAverageSavingsPerEConsultation] =
    useState("0");
  const [totalCostPerEConsultation, setTotalCostPerEConsultation] =
    useState("0");
  const [
    costPerEConsultationAeragedOverProgram,
    setCostPerEConsultationAeragedOverProgram,
  ] = useState("0");
  const [wtpPerEConsultation, setWTPPerEConsultation] = useState("0");
  const [lossGainPerEConsultation, setLossGainPerEConsultation] = useState("0");

  useEffect(() => {
    setAverageCostPerEConsultation(
      window.localStorage.getItem("payerCostEConsultDT") || "0"
    );
    setAverageCostPerUsualCare(
      window.localStorage.getItem("payerCostUsualCareDT") || "0"
    );
    setAverageSavingsPerEConsultation(
      calculateAverageSavingsPerEConsultation()
    );
    setTotalCostPerEConsultation(calculateProviderCostsEConsultTotal());
    setCostPerEConsultationAeragedOverProgram(
      calculateSavingsForEConsultationAveragedOverProgram(
        calculateDecisionTreeAveragedOverProgram()
      )
    );
  }, []);

  useEffect(() => {
    setWTPPerEConsultation(
      String(
        Number(
          Number(costPerEConsultationAeragedOverProgram) +
            Number(averageSavingsPerEConsultation)
        ).toFixed(2)
      )
    );
  }, [costPerEConsultationAeragedOverProgram, averageSavingsPerEConsultation]);

  useEffect(() => {
    setLossGainPerEConsultation(
      String(
        Number(
          Number(wtpPerEConsultation) - Number(totalCostPerEConsultation)
        ).toFixed(2)
      )
    );
  }, [wtpPerEConsultation, totalCostPerEConsultation]);

  return (
    <div>
      <div className="mt-14 grid grid-cols-3 px-4 md:px-28">
        <div className="text-center">
          <p
            className={
              "text-2xl font-semibold " +
              (Number(averageCostPerEConsultation) > 0
                ? "text-green-500"
                : "text-red-600")
            }
          >
            {" "}
            $ {Number(averageCostPerEConsultation) > 0 ? "+" : ""}{" "}
            {averageCostPerEConsultation}
          </p>
          <p className="">
            {" "}
            Provider Average{" "}
            {Number(averageCostPerEConsultation) > 0 ? "Savings" : "Cost"} Per
            E-consult{" "}
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold"> $ {wtpPerEConsultation}</p>
          <p className=""> Payors Willingness To Pay Per E-consult </p>
        </div>
        <div className="text-center">
          <p
            className={
              "text-2xl font-semibold " +
              (Number(lossGainPerEConsultation) > 0
                ? "text-green-500"
                : "text-red-600")
            }
          >
            {" "}
            $ {Number(lossGainPerEConsultation) > 0 ? "+" : ""}{" "}
            {lossGainPerEConsultation}
          </p>
          <p className="">
            {" "}
            Provider Average{" "}
            {Number(lossGainPerEConsultation) > 0 ? "Gain" : "Loss"} Per
            E-consult{" "}
          </p>
        </div>
      </div>

      <div className="mx-4 mt-16 text-casal-400 md:mx-28">
        <span className="text-2xl font-semibold"> Calculated Results </span>
        <div className="mt-6 grid rounded-xl border border-casal-300 px-6 py-6">
          <div className="flex justify-between">
            <div className="flex self-center text-lg font-semibold">
              <span> Payor </span>
              <a href="/faq#payor-perspective-results">
                <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
              </a>
            </div>
          </div>
          <div className="mt-6 grid border-t border-casal-300">
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">
                  Average cost per e-consult visit
                </div>
                <a href="/faq#payor-average-cost-per-patient-with-e-consults-program">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">
                $ {averageCostPerEConsultation}
              </span>
            </div>
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">
                  Average cost per in-person clinic visit
                </div>
                <a href="/faq#payor-average-cost-per-patient-with-in-person-clinic">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">
                $ {averageCostPerUsualCare}
              </span>
            </div>
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">
                  Average savings per e-consult visit
                </div>
                <a href="/faq#payor-average-savings-or-loss-per-patient-if-using-an-e-consult-program">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">
                $ {averageSavingsPerEConsultation}
              </span>
            </div>
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">
                  Cost per e-consult averaged over program
                </div>
                <a href="/faq#payor-cost-per-patient-taken-care-of-by-e-consults-without-need-for-in-person-clinic">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">
                $ {costPerEConsultationAeragedOverProgram}
              </span>
            </div>
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">WTP per e-consult</div>
                <a href="/faq#payor-willingness-to-pay-per-e-consult">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">$ {wtpPerEConsultation}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 grid rounded-xl border border-casal-300 px-6 py-6">
          <div className="flex justify-between">
            <div className="flex self-center text-lg font-semibold">
              <span> Provider </span>
              <a href="/faq#provider-perspective-results">
                <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
              </a>
            </div>
          </div>
          <div className="mt-6 grid border-t border-casal-300">
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">Total cost per e-consult</div>
                <a href="/faq#provider-total-cost-per-e-consult">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span className="text-casal-200">
                $ {totalCostPerEConsultation}
              </span>
            </div>
            {/* Row */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 font-medium">
              <div className="flex">
                <div className="font-bold">
                  {Number(lossGainPerEConsultation) > 0 ? "Gain" : "Loss"} per
                  e-consult
                </div>
                <a href="/faq#provider-average-profit-or-loss-per-e-consult">
                  <InformationCircleIcon className="ml-2 h-6 w-6 hover:cursor-pointer hover:text-casal-100" />
                </a>
              </div>
              <span
                className={
                  Number(lossGainPerEConsultation) > 0
                    ? "text-green-500"
                    : "text-red-600"
                }
              >
                $ {Number(lossGainPerEConsultation) > 0 ? "+" : ""}{" "}
                {lossGainPerEConsultation}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-end">
          <a className="mr-6 cursor-pointer" href="/parameters">
            Go Back
          </a>
          <button
            type="button"
            className="h-fit w-fit self-center rounded-xl bg-casal-400 px-16 py-4 text-xl font-medium text-white hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default WTPTable;
