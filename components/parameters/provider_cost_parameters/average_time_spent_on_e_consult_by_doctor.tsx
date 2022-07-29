import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import LargeInput from '../../util/large-input';
import AverageTimeSpentOnEConsultByDoctorTable from './average_time_spent_on_e_consult_by_doctor.table';

const calculateAverageTimeSpentOnEConsultByDoctor = () => {
  let averageTimeSpentOnEConsultByDoctor = 0;
  averageTimeSpentOnEConsultByDoctor += 7.5 * parseInt(window.localStorage.getItem('sevenPointFive') || '0') / 100;
  averageTimeSpentOnEConsultByDoctor += 15 * parseInt(window.localStorage.getItem('fifteen') || '0') / 100;
  averageTimeSpentOnEConsultByDoctor += 25 * parseInt(window.localStorage.getItem('twentyFive') || '0') / 100;
  averageTimeSpentOnEConsultByDoctor += 45 * parseInt(window.localStorage.getItem('fourtyFive') || '0') / 100;
  return String(averageTimeSpentOnEConsultByDoctor);
}

const  AverageTimeSpentOnEConsultByDoctor: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [totalAmount, setTotalAmount] = useState('0');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting])

  useEffect(() => {
    const handleStorageEvent = () => {
      setTotalAmount(calculateAverageTimeSpentOnEConsultByDoctor());
    }
    handleStorageEvent();

    window.addEventListener('averageTimeSpentOnEConsultByDoctor', handleStorageEvent);

    return () => window.removeEventListener('averageTimeSpentOnEConsultByDoctor', handleStorageEvent);
  }, [])

  const displayExpandedTable = () => {
    if(expanded) {
      return (
        <AverageTimeSpentOnEConsultByDoctorTable />
      )
    }
  }

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Average Time Spent on E-consult by Doctor </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: 'Time (In Minutes)',
              placeholder: '',
              value: totalAmount,
              setValue: () => {},
              type: 'fixed2',
              disabled: true,
              errored: false
            }}
          />
          </div>
          <span className="h-6 w-6 ml-2 mt-2 self-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </span>
        </div>
      </div>
      { displayExpandedTable() }
    </div>
  )
}

export default AverageTimeSpentOnEConsultByDoctor;