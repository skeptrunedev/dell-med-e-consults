import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import LargeInput from '../../util/large-input';

const  NumberOfSupportingStaffPerEConsult: NextPage = () => {
  const [numOfSupportingStaff, setNumOfSupportingStaff] = useState('1');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setNumOfSupportingStaff(window.localStorage.getItem('numOfSupportingStaff') || '1');
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('numOfSupportingStaff', numOfSupportingStaff);
      window.dispatchEvent(new Event('numOfSupportingStaff'));
    }
  }, [numOfSupportingStaff, loading]);

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between md:pr-9">
        <div className="text-lg font-semibold self-center">
          <span> Number Of Support Staff Per E-consult </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: '',
              placeholder: '',
              value: numOfSupportingStaff,
              setValue: setNumOfSupportingStaff,
              type: 'integer',
              disabled: false,
              errored: false
            }}
          />
          </div>
          <span className="self-center mt-2 text-casal-300 cursor-pointer select-none" onClick={() => setNumOfSupportingStaff('1')}>
            Set to default
          </span>
        </div>
      </div>
    </div>
  )
}

export default NumberOfSupportingStaffPerEConsult;