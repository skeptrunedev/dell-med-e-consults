import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import LargeInput from '../../util/large-input';

const  WageRateForSpecialist: NextPage = () => {
  const [specialistWageRate, setSpecialistWageRate] = useState('0');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSpecialistWageRate(window.localStorage.getItem('specialistWageRate') || '0');
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('specialistWageRate', specialistWageRate);
      window.dispatchEvent(new Event('specialistWageRate'));
    }
  }, [specialistWageRate, loading]);

  return (
    <div className="grid mt-4 mx-4 px-6 py-6 md:mx-28 border rounded-xl border border-casal-300">
      <div className="flex justify-between md:pr-9">
        <div className="text-lg font-semibold self-center">
          <span> Wage Rate for Specialist ($/Hour) </span>
        </div>
        <div className="flex space-x-4 col-span-2 justify-self-end">
          <div className="grid">
          <LargeInput
            {...{
              label: '',
              placeholder: '',
              value: specialistWageRate,
              setValue: setSpecialistWageRate,
              type: 'fixed2',
              disabled: false,
              errored: false
            }}
          />
          </div>
          <span className="self-center mt-2 text-casal-300 cursor-pointer select-none" onClick={() => setSpecialistWageRate('100')}>
            Set to default
          </span>
        </div>
      </div>
    </div>
  )
}

export default WageRateForSpecialist;