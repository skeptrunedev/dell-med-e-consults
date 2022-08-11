
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

const calculateTotalCostPerEConsult = () => {
  // TODO: THIS NUMBER IS WRONG SO YOU NEED TO CONSOLE LOG AND COMPARE TO GOOGLE SHEET

  let totalCostPerEConsult = 0;
  const equipmentAndTechnology = Number(window.localStorage.getItem('equipmentTechPerHour') || '0');
  const space = Number(window.localStorage.getItem('costOfSqFtPerHour') || '0');
  const phoneAndInternet = Number(window.localStorage.getItem('phoneInternetPerHour') || '0');
  const specialistTimeOne = Number(window.localStorage.getItem('amountForEConsultsAveragePhysicianTime') || '0');
  const specialistTimeTwo = Number(window.localStorage.getItem('averageTimeSpentOnEConsultByDoctor') || '0');
  const specialistTime = (specialistTimeOne + specialistTimeTwo) * Number(window.localStorage.getItem('specialistWageRate') || '0'); // This is likely the problem
  const nurseTime = Number(window.localStorage.getItem('averageWageRateForSupportingStaff') || '0');

  totalCostPerEConsult = equipmentAndTechnology + space + phoneAndInternet + specialistTime + nurseTime;
  const totalCostPerEConsultString = totalCostPerEConsult.toFixed(2);
  window.localStorage.setItem('totalCostPerEConsult', totalCostPerEConsultString);

  return totalCostPerEConsultString;
}

const calculateAverageWeightedCostPerEConsult = () => {
  let averageWeightedCostPerEConsult = 0;

}

const  WTPTable: NextPage = () => {
  const [averageCostPerUsualCare, setAverageCostPerUsualCare] = useState('0')
  const [averageCostPerEConsultation, setAverageCostPerEConsultation] = useState('0')
  const [totalCostPerEConsultation, setTotalCostPerEConsultation] = useState('0')
  const [wtpPerEConsultation, setWTPPerEConsultation] = useState('0')
  const [lossGainPerEConsultation, setLossGainPerEConsultation] = useState('0')

  useEffect(() => {
    setTotalCostPerEConsultation(calculateTotalCostPerEConsult());
  }, []);

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
              Average cost per usual care
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average cost per e-consult
            </div>
            <span>
              $ 60.00
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
              Average cost per e-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              WTP per e-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Loss/Gain per e-consult
            </div>
            <span>
              $ 60.00
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