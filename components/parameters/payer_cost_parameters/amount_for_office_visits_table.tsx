
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';

const  AmountForOfficeVisitsTable: NextPage = () => {
  const [medicareFee, setMedicareFee] = useState<number>(169);
  const [medicarePercentage, setMedicarePercentage] = useState<number>(90);
  const [commercialFee, setCommercialFee] = useState<number>(100);
  const [commercialPercentage, setCommercialPercentage] = useState<number>(0);
  const [otherFee, setOtherFee] = useState<number>(80);
  const [otherPercentage, setOtherPercentage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setMedicareFee(Number(window.localStorage.getItem('medicareFee') || '169'));
    setMedicarePercentage(Number(window.localStorage.getItem('medicarePercentage') || '90'));
    setCommercialFee(Number(window.localStorage.getItem('commercialFee') || '100'));
    setCommercialPercentage(Number(window.localStorage.getItem('commercialPercentage') || '0'));
    setOtherFee(Number(window.localStorage.getItem('otherFee') || '80'));
    setOtherPercentage(Number(window.localStorage.getItem('otherPercentage') || '10'));
    window.dispatchEvent(new Event('amountForOfficeVisits'));
    setLoading(false);
  }, []);

  useEffect(() => {
    if(loading) {
      return;
    }

    window.localStorage.setItem('medicareFee', medicareFee.toString());
    window.localStorage.setItem('medicarePercentage', medicarePercentage.toString());
    window.localStorage.setItem('commercialFee', commercialFee.toString());
    window.localStorage.setItem('commercialPercentage', commercialPercentage.toString());
    window.localStorage.setItem('otherFee', otherFee.toString());
    window.localStorage.setItem('otherPercentage', otherPercentage.toString());
    window.dispatchEvent(new Event('amountForOfficeVisits'));
  }, [medicareFee, medicarePercentage, commercialFee, commercialPercentage, otherFee, otherPercentage, loading]);

  return (
    <div className="grid mt-6 border-t border-casal-300">
      {/* Row */}
      <div className="grid grid-cols-4 mt-6 font-medium">
        <div>
          Insurance Type
        </div>
        <div>
          Contract Fee
        </div>
        <div>
          Percentage of Total Visits
        </div>
        <span></span>
      </div>
      <div className="grid grid-cols-4 mt-6 space-y-4">
        {/* Row */}
        <div className="text-md font-medium mt-5">
          <p> Medicare / Medicaid </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>

          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium justify-self-center md:justify-self-start"
            placeholder={"00000"}
            disabled={false}
            value={medicareFee}
            onChange={(e) => { setMedicareFee(Number(e.target.value)) }}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>

          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium justify-self-center md:justify-self-start"
            placeholder={"00000"}
            disabled={false}
            value={medicarePercentage}
            onChange={(e) => { setMedicarePercentage(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => {
          setMedicareFee(169);
          setMedicarePercentage(90);
        }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> Commercial Insurance </span>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium justify-self-center md:justify-self-start ml-1 md:ml-0" 
            placeholder={"00000"}
            disabled={false}
            value={commercialFee}
            onChange={(e) => { setCommercialFee(Number(e.target.value)) }}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium justify-self-center md:justify-self-start"
            placeholder={"00000"}
            disabled={false}
            value={commercialPercentage}
            onChange={(e) => { setCommercialPercentage(Number(e.target.value)) }}
          />
        </div>

        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => {
          setCommercialFee(100);
          setCommercialPercentage(0);
        }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> Other Insurance </span>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name={"medicare_fee"}
            id={"medicare_fee_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium justify-self-center md:justify-self-start"
            placeholder={"00000"}
            disabled={false}
            value={otherFee}
            onChange={(e) => { setOtherFee(Number(e.target.value)) }}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            name={"medicare_percentage"}
            id={"medicare_percentage_id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={otherPercentage}
            onChange={(e) => { setOtherPercentage(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => {
          setOtherFee(80);
          setOtherPercentage(10);
        }}>
          Set to default
        </span>
      </div>
    </div>
  )
}

export default AmountForOfficeVisitsTable;