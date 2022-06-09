import type { NextPage } from 'next'
import { GetExpandedAll } from '../../../interfaces/parameters';
import { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import LargeInput from '../../util/large-input';

const  AmountForOfficeVisit: NextPage<GetExpandedAll> = ({expandAllSetting}) => {
  const [expanded, setExpanded] = useState(false);
  const [totalAmount, setTotalAmount] = useState('$100');

  useEffect(() => {
    setExpanded(expandAllSetting == 'expanded');
  }, [expandAllSetting])

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between">
        <div className="text-lg font-semibold self-center">
          <span> Amount For Office Visits </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: 'Total Amount',
              placeholder: '',
              value: totalAmount,
              setValue: () => {},
              type: 'usd',
              disabled: true,
              errored: false
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
    </div>
  )
}

export default AmountForOfficeVisit;