
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const  TimeBreakdownSpecialistsVsNurses: NextPage = () => {
  const [specialistPercentage, setSpecialistPercentage] = useState(30);
  const [supportingStaffPercentage, setSupportingStaffPercentage] = useState(70);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSpecialistPercentage(Number(window.localStorage.getItem('specialistPercentage') || '30'));
    setSupportingStaffPercentage(Number(window.localStorage.getItem('supportingStaffPercentage') || '70'));
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('specialistPercentage', String(specialistPercentage));
      window.localStorage.setItem('supportingStaffPercentage', String(supportingStaffPercentage));
      window.dispatchEvent(new Event('averageWageRateForSupportingStaff'));
    }
  }, [specialistPercentage, supportingStaffPercentage, loading]);

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Time Breakdown for Specialists vs. Supporting Staff </span>
        </div>
        <div className="flex">
          <div className="grid lg:grid-cols-2 lg:space-x-4 mr-4">          
            <div>
              <label htmlFor="specialist_percentage" className="w-fit font-medium">
                Specialist Percentage
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-[5%] mt-2 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
                <input
                  type="number"
                  min="0.00"
                  max="100.00"
                  step="0.1"
                  name={"specialist_percentage"}
                  id={"specialist_percentage_id"}
                  className="focus:border focus:outline-casal-300 w-full border px-3 py-2 pl-6 rounded-md text-casal-400 border-casal-300 md:mr-4 mt-2 md:mt-8 xl:mt-2"
                  placeholder={"00000"}
                  disabled={false}
                  value={specialistPercentage}
                  onChange={(e) => { setSpecialistPercentage(Number(e.target.value)) }}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="supporting_staff_percentage" className="w-fit font-medium">
                Supporting Staff Percentage
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-[5%] mt-2 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
                <input
                  type="number"
                  min="0.00"
                  max="100.00"
                  step="0.1"
                  name={"supporting_staff_percentage"}
                  id={"supporting_staff_percentage_id"}
                  className="focus:border focus:outline-casal-300 w-full border px-3 py-2 pl-6 rounded-md text-casal-400 border-casal-300 mt-2"
                  placeholder={"00000"}
                  disabled={false}
                  value={supportingStaffPercentage}
                  onChange={(e) => { setSupportingStaffPercentage(Number(e.target.value)) }}
                />
              </div>
            </div>
          </div>

          <span 
            className="self-center mt-6 text-casal-300 cursor-pointer select-none" 
            onClick={
              () => {
                setSpecialistPercentage(30);
                setSupportingStaffPercentage(70);
              }
            }
          >
              Set to default
          </span>
        </div>
      </div>
    </div>
  )
}

export default TimeBreakdownSpecialistsVsNurses;