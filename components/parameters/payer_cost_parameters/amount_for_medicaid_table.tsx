
import type { NextPage } from 'next'
import { useState, useEffect, ReactNode } from 'react';
import { Medicare_Medicaid_Code } from '../../../interfaces/tables';

const defaultCodes: Medicare_Medicaid_Code[] = [
  {
    id: 2,
    code: "99203",
    CMS_non_facility_price: 114.00,
    percentage_of_total_visits: 0.2,
  },
  {
    id: 3,
    code: "99204",
    CMS_non_facility_price: 170.00,
    percentage_of_total_visits: 0.6,
  },
  {
    id: 3,
    code: "99205",
    CMS_non_facility_price: 224.00,
    percentage_of_total_visits: 0.2,
  },
]

const  AmountForMedicaidConsultsTable: NextPage = () => {
  const [codes, setCodes] = useState<Medicare_Medicaid_Code[]>(defaultCodes);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setCodes(window.localStorage.getItem('codes') ? JSON.parse(window.localStorage.getItem('codes') || '[]') : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('codes', JSON.stringify(codes));
      window.dispatchEvent(new Event('amountForMedicaid'));
    }
  }, [codes, loading]);

  const codeInputs: ReactNode = codes.map( (code, index) => {
    return (
      <div className="grid grid-cols-6" key={index}>
        <input
          type="text"
          name={"CPT_Code_" + index}
          id={"CPT_Code_" + index + "Id"}
          className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"00000"}
          disabled={false}
          value={code.code}
          onChange={
            (e) => {
              var codesCopy: Medicare_Medicaid_Code[] = codes;
              code.code = e.target.value;
              codesCopy[index] = code;
              setCodes([...codesCopy]);
            }
          }
        />

        <input
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          name={"CMS_non_facility_price" + index}
          id={"CMS_non_facility_price" + index + "Id"}
          className="focus:border focus:outline-casal-300 w-fit border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"10.00"}
          disabled={false}
          value={code.CMS_non_facility_price}
          onChange={
            (e) => {
              var codesCopy: Medicare_Medicaid_Code[] = codes;
              code.CMS_non_facility_price = Number(e.target.value);
              codesCopy[index] = code;
              setCodes([...codesCopy]);
            }
          }
        />

        <input
          type="number"
          min="0.00"
          max="100.00"
          step="0.1"
          name={"percentage_of_total_visits" + index}
          id={"percentage_of_total_visits" + index + "Id"}
          className="focus:border focus:outline-casal-300 w-fit border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"0.00"}
          disabled={false}
          value={code.percentage_of_total_visits}
          onChange={
            (e) => {
              var codesCopy: Medicare_Medicaid_Code[] = codes;
              code.percentage_of_total_visits = Number(e.target.value);
              codesCopy[index] = code;
              setCodes([...codesCopy]);
            }
          }
        />

          <span
            className="self-center mt-2 text-casal-300 cursor-pointer select-none"
            onClick={() => {
              var codesCopy: Medicare_Medicaid_Code[] = codes;
              index == 0 ? codesCopy.shift() : codesCopy.splice(index, index);
              setCodes([...codesCopy]);
            }}
          >
            Delete Code
          </span>
      </div>
    )
  })

  return (
    <div className="grid w-full mt-6 border-t border-casal-300 space-y-4">
      {/* Headings */}
      <div className="grid mt-6 grid-cols-6 font-medium">
        <div>
          CPT Codes
        </div>
        <div>
          CMS non facility price
        </div>
        <div>
          Percentage of total visits
        </div>
      </div>
      { codeInputs }
      <div className="flex space-x-4">
        <button
          className="w-fit text-casal-300"
          onClick={
            () => {
              setCodes(oldCodes => [...oldCodes, {code: "00000", code_details: "10 mins", CMS_non_facility_price: 0, percentage_of_total_visits: 0.0, avg_physician_time_spent: 0.0}]);
            }
          }
        >
          + New Code
        </button>
        <span 
          className="self-center text-casal-300 cursor-pointer select-none" 
          onClick={() => {
            setCodes(defaultCodes)
          }}
        >
          Set to default
        </span>
      </div>
    </div>
  )
}

export default AmountForMedicaidConsultsTable;