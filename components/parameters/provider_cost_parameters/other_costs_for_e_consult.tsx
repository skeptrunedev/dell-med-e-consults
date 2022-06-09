
import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import OtherCostsForEConsultTable from './other_costs_for_e_consult_table';

const  OtherCostsForEConsult: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [percentageOfTotalVisits, setPercentageOfTotalVisits] = useState('');
  const [averageTimeSpent, setAverageTimeSpent] = useState('');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting])

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Other Costs For E-consults </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end md:pr-9">
          <span className="h-6 w-6 ml-2 mt-2 self-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </span>
        </div>
      </div>
      <div className={expanded ? '' : 'hidden'}>
        <OtherCostsForEConsultTable />
      </div>
    </div>
  )
}

export default OtherCostsForEConsult;