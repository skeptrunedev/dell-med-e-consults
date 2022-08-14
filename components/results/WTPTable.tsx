
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { 
  calculateProviderCostsEConsultTotal, 
  calculateAverageSavingsPerEConsultation, 
  calculateSavingsForEConsultationAveragedOverProgram 
} from '../../utils/provider-costs-calculations';
import { calculateDecisionTreeAveragedOverProgram } from '../../utils/decision-tree-calculations';

const  WTPTable: NextPage = () => {
  const [averageCostPerUsualCare, setAverageCostPerUsualCare] = useState('0');
  const [averageCostPerEConsultation, setAverageCostPerEConsultation] = useState('0');
  const [averageSavingsPerEConsultation, setAverageSavingsPerEConsultation] = useState('0');
  const [totalCostPerEConsultation, setTotalCostPerEConsultation] = useState('0');
  const [costPerEConsultationAeragedOverProgram, setCostPerEConsultationAeragedOverProgram] = useState('0');
  const [wtpPerEConsultation, setWTPPerEConsultation] = useState('0');
  const [lossGainPerEConsultation, setLossGainPerEConsultation] = useState('0');

  useEffect(() => {
    setAverageCostPerEConsultation(window.localStorage.getItem('payerCostEConsultDT') || '0');
    setAverageCostPerUsualCare(window.localStorage.getItem('payerCostUsualCareDT') || '0');
    setAverageSavingsPerEConsultation(calculateAverageSavingsPerEConsultation());
    setTotalCostPerEConsultation(calculateProviderCostsEConsultTotal());
    setCostPerEConsultationAeragedOverProgram(calculateSavingsForEConsultationAveragedOverProgram(calculateDecisionTreeAveragedOverProgram()));
  }, []);

  useEffect(() => {
    setWTPPerEConsultation(String(Number(Number(costPerEConsultationAeragedOverProgram) + Number(averageSavingsPerEConsultation)).toFixed(2)));
  }, [costPerEConsultationAeragedOverProgram, averageSavingsPerEConsultation]);

  useEffect(() => {
    setLossGainPerEConsultation(String(Number(Number(wtpPerEConsultation) - Number(totalCostPerEConsultation)).toFixed(2)));
  } , [wtpPerEConsultation, totalCostPerEConsultation]);

  return (
    <div className="mt-16 mx-4 md:mx-28 text-casal-400">
      <span className="text-2xl font-semibold"> Calculated Results </span>
      <div className="grid px-6 py-6 mt-6 border rounded-xl border border-casal-300">
        <div className="flex justify-between">
          <div className="text-lg font-semibold self-center">
            <span> Willingness to pay (WTP) per e-consult </span>
          </div>
        </div>
        <div className="grid mt-6 border-t border-casal-300">
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average cost per e-consult
            </div>
            <span>
              $ { averageCostPerEConsultation }
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average cost per usual care
            </div>
            <span>
              $ { averageCostPerUsualCare}
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average savings per e-consult visit
            </div>
            <span>
              $ { averageSavingsPerEConsultation }
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Total cost per e-consult
            </div>
            <span>
              $ {totalCostPerEConsultation}
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Cost per e-consult averaged over program
            </div>
            <span>
              $ { costPerEConsultationAeragedOverProgram }
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              WTP per e-consult
            </div>
            <span>
              $ { wtpPerEConsultation }
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Loss/Gain per e-consult
            </div>
            <span>
              $ { lossGainPerEConsultation }
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-20">
        <a className="mr-6 cursor-pointer" href="/parameters">
          Go Back
        </a>
        <button
          type="button"
          className="self-center w-fit h-fit px-16 py-4 font-medium rounded-xl text-white text-xl bg-casal-400 hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => { window.print() }}
        >
          Print
        </button>
      </div>
    </div>
  )
}

export default WTPTable;