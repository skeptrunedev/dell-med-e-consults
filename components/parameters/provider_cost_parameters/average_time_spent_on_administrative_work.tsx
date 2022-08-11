import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import LargeInput from '../../util/large-input';
import AverageTimeSpentOnAdministrativeWorkTable from './average_time_spent_on_administrative_work.table';

const calculateAverageTimeSpentOnAdministrativeWork = () => {
  let averageTimeSpentOnAdministrativeWork = 0;
  averageTimeSpentOnAdministrativeWork += 5 * Number(window.localStorage.getItem('fiveAdmin') || '0') / 100;
  averageTimeSpentOnAdministrativeWork += 10 * Number(window.localStorage.getItem('tenAdmin') || '0') / 100;
  averageTimeSpentOnAdministrativeWork += 15 * Number(window.localStorage.getItem('fifteenAdmin') || '0') / 100;
  averageTimeSpentOnAdministrativeWork += 20 * Number(window.localStorage.getItem('twentyAdmin') || '0') / 100;
  window.localStorage.setItem('averageTimeSpentAdministrativeWork', averageTimeSpentOnAdministrativeWork.toString());

  return String(averageTimeSpentOnAdministrativeWork);
}

const  AverageTimeSpentOnAdministrativeWork: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [totalAmount, setTotalAmount] = useState('0');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting])

  useEffect(() => {
    const handleStorageEvent = () => {
      setTotalAmount(calculateAverageTimeSpentOnAdministrativeWork());
    }
    handleStorageEvent();

    window.addEventListener('averageTimeSpentOnAdministrativeWork', handleStorageEvent);

    return () => window.removeEventListener('averageTimeSpentOnAdministrativeWork', handleStorageEvent);
  }, [])

  const displayExpandedTable = () => {
    if(expanded) {
      return (
        <AverageTimeSpentOnAdministrativeWorkTable />
      )
    }
  }

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Average Time Spent on Administrative Work</span>
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

export default AverageTimeSpentOnAdministrativeWork;