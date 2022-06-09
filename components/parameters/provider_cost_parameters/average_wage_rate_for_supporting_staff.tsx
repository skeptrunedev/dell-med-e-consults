import type { NextPage } from 'next'
import { useState } from 'react';
import LargeInput from '../../util/large-input';

const  AverageWageRateForSupportingStaff: NextPage = () => {
  const [averageWageRateForSupportingStaff, setAverageWageRateForSupportingStaff] = useState('$32.64');

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between md:pr-9">
        <div className="text-lg font-semibold self-center">
          <span> Average Wage Rate for Supporting Staff ($/Hour) </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: '',
              placeholder: '',
              value: averageWageRateForSupportingStaff,
              setValue: setAverageWageRateForSupportingStaff,
              type: 'fixed2',
              disabled: false,
              errored: false
            }}
          />
          </div>
          <span className="self-center mt-2 text-casal-300 cursor-pointer select-none" onClick={() => setAverageWageRateForSupportingStaff('$100')}>
            Set to default
          </span>
        </div>
      </div>
    </div>
  )
}

export default AverageWageRateForSupportingStaff;