import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import LargeInput from '../../util/large-input';
import { DetermineErrorStateForTextWholeNumbers } from '../../../utils/helpers';

const  NumberOfDoctorsPerEConsult: NextPage = () => {
  const [numOfDoctors, setNumOfDoctors] = useState('1');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setNumOfDoctors(window.localStorage.getItem('numOfDoctors') || '1');
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('numOfDoctors', numOfDoctors);
      window.dispatchEvent(new Event('numOfDoctors'));
    }
  }, [numOfDoctors, loading]);

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border-casal-300">
      <div className="flex justify-between md:pr-9">
        <div className="text-lg font-semibold self-center">
          <span> Number Of Doctors Per E-consult </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: '',
              placeholder: '',
              value: numOfDoctors,
              setValue: setNumOfDoctors,
              type: 'integer',
              disabled: false,
              errored: !DetermineErrorStateForTextWholeNumbers(numOfDoctors).valid,
            }}
          />
          </div>
          <span className="self-center mt-2 text-casal-300 cursor-pointer select-none" onClick={() => setNumOfDoctors('1')}>
            Set to default
          </span>
        </div>
      </div>
    </div>
  )
}

export default NumberOfDoctorsPerEConsult;