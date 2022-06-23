
import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import AmountForEConsultsTable from './amount_for_econsults.table';
import LargeInput from '../../util/large-input';

const  AmountForEConsults: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [percentageOfTotalVisits, setPercentageOfTotalVisits] = useState('');
  const [averageTimeSpent, setAverageTimeSpent] = useState('');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting])

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
          <span className="self-center mt-2 text-casal-300 cursor-pointer select-none">
            Set to default
          </span>
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