
import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import AmountForMedicaidConsultsTable from './amount_for_medicaid_table';
import LargeInput from '../../util/large-input';
import { Medicare_Medicaid_Code } from '../../../interfaces/tables';

const calculateAmountForMedicaid = () => {
  let percentageOfTotalVisits = 0;
  let weightedCostPerVisit = 0;
  const codes: Medicare_Medicaid_Code[] = JSON.parse(window.localStorage.getItem('codes') || '[]');
  codes.forEach(code => {
    percentageOfTotalVisits += Number(code.percentage_of_total_visits || '0');
    weightedCostPerVisit += Number(code.CMS_non_facility_price || '0') * Number(code.percentage_of_total_visits || '0');
  });
  window.localStorage.setItem('amountForMedicaidPercentageOfTotalVisits', percentageOfTotalVisits.toString());
  window.localStorage.setItem('amountForMedicaidWeightedCostPerVisit', weightedCostPerVisit.toString());

  return { percentageOfTotalVisits, weightedCostPerVisit };
}

const  AmountForMedicaidConsults: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [weightedCostPerVisit, setWeightedCostPerVisit] = useState('');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting]);

  useEffect(() => {
    const handleStorageEvent = () => {
      const { weightedCostPerVisit } = calculateAmountForMedicaid();
      setWeightedCostPerVisit(String(weightedCostPerVisit));
    }
    handleStorageEvent();

    window.addEventListener('amountForMedicaid', handleStorageEvent);

    return () => window.removeEventListener('amountForEConsults', handleStorageEvent);
  }, []);

  const displayExpandedTable = () => {
    if(expanded) {
      return (
        <AmountForMedicaidConsultsTable />
      )
    }
  }

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Amount For Medicare/Medicaid Consults </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid grid-cols-1">
          <LargeInput
            {...{
              label: 'Weighted cost per visit ($)',
              placeholder: '',
              value: weightedCostPerVisit,
              setValue: setWeightedCostPerVisit,
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

export default AmountForMedicaidConsults;