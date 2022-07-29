
import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import AmountForEConsultsTable from './amount_for_econsults.table';
import LargeInput from '../../util/large-input';
import { Code } from '../../../interfaces/tables';

const calculateAmountForEConsults = () => {
  let percentageOfTotalVisits = 0;
  let averagePhysicianTime = 0;
  const codes: Code[] = JSON.parse(window.localStorage.getItem('codes') || '[]');
  codes.forEach(code => {
    percentageOfTotalVisits += Number(code.percentage_of_total_visits || '0');
    averagePhysicianTime += Number(code.avg_physician_time_spent || '0') * Number(code.percentage_of_total_visits || '0') / 100;
  });
  window.localStorage.setItem('amountForEConsultsPercentageOfTotalVisits', percentageOfTotalVisits.toString());
  window.localStorage.setItem('amountForEConsultsAveragePhysicianTime', averagePhysicianTime.toString());

  return { percentageOfTotalVisits, averagePhysicianTime };
}

const  AmountForEConsults: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [percentageOfTotalVisits, setPercentageOfTotalVisits] = useState('');
  const [averageTimeSpent, setAverageTimeSpent] = useState('');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting]);

  useEffect(() => {
    const handleStorageEvent = () => {
      const { percentageOfTotalVisits, averagePhysicianTime } = calculateAmountForEConsults();
      setPercentageOfTotalVisits(String(percentageOfTotalVisits));
      setAverageTimeSpent(String(averagePhysicianTime));
    }
    handleStorageEvent();

    window.addEventListener('amountForEConsults', handleStorageEvent);

    return () => window.removeEventListener('amountForEConsults', handleStorageEvent);
  }, []);

  const displayExpandedTable = () => {
    if(expanded) {
      return (
        <AmountForEConsultsTable />
      )
    }
  }

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Amount For E-consults </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
          <LargeInput
            {...{
              label: 'Percentage of total visits',
              placeholder: '',
              value: percentageOfTotalVisits,
              setValue: setPercentageOfTotalVisits,
              type: 'percentage',
              errored: false,
              disabled: true
            }}
          />
          <LargeInput
            {...{
              label: 'Average time spent (in minutes)',
              placeholder: '',
              value: averageTimeSpent,
              setValue: setAverageTimeSpent,
              type: 'fixed2',
              errored: false,
              disabled: true
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

export default AmountForEConsults;