
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import SmallInput from '../../util/small-input';

const  OtherCostsForEConsultTable: NextPage = () => {
  const [equipmentTechPerHour, setEquipmentTechPerHour] = useState('0.43');
  const [phoneInternetPerHour, setPhoneInternetPerHour] = useState('0.04');
  const [roomSpaceSqFeet, setRoomSpaceSqFeet] = useState('150');
  const [costOfSqFtPerHour, setCostOfSqFtPerHour] = useState('0.01');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setEquipmentTechPerHour(window.localStorage.getItem('equipmentTechPerHour') || '0.43');
    setPhoneInternetPerHour(window.localStorage.getItem('phoneInternetPerHour') || '0.04');
    setRoomSpaceSqFeet(window.localStorage.getItem('roomSpaceSqFeet') || '150');
    setCostOfSqFtPerHour(window.localStorage.getItem('costOfSqFtPerHour') || '0.01');
    setLoading(false);
  }, []);

  useEffect(() => {
    if(loading) {
      return;
    }
    
    window.localStorage.setItem('equipmentTechPerHour', equipmentTechPerHour);
    window.localStorage.setItem('phoneInternetPerHour', phoneInternetPerHour);
    window.localStorage.setItem('roomSpaceSqFeet', roomSpaceSqFeet);
    window.localStorage.setItem('costOfSqFtPerHour', costOfSqFtPerHour);
    window.dispatchEvent(new Event('otherCostsForEConsults'));
  }, [equipmentTechPerHour, phoneInternetPerHour, roomSpaceSqFeet, costOfSqFtPerHour, loading]);

  return (
    <div className="grid md:grid-cols-2 mt-6 space-y-4">
      {/* Row */}
      <div className="text-md font-medium mt-5">
        <span> Equipment / Technology ($/Hour) </span>
      </div>
      <div className="flex space-x-4">
        <SmallInput
          {...{
            label: '',
            placeholder: '',
            value: equipmentTechPerHour,
            setValue: setEquipmentTechPerHour,
            type: 'integer',
            disabled: false,
            errored: false
          }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setEquipmentTechPerHour('0.43')}>
          Set to default
        </span>
      </div>
      {/* Row */}
      <div className="text-md font-medium mt-1">
        <span> Phone and Internet ($/Hour) </span>
      </div>
      <div className="flex space-x-4">
        <SmallInput
          {...{
            label: '',
            placeholder: '',
            value: phoneInternetPerHour,
            setValue: setPhoneInternetPerHour,
            type: 'integer',
            disabled: false,
            errored: false
          }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setPhoneInternetPerHour('0.04')}>
          Set to default
        </span>
      </div>
      {/* Row */}
      <div className="text-md font-medium mt-1">
        <span> Room Space (Sq. Feet) </span>
      </div>
      <div className="flex space-x-4">
        <SmallInput
          {...{
            label: '',
            placeholder: '',
            value: roomSpaceSqFeet,
            setValue: setRoomSpaceSqFeet,
            type: 'integer',
            disabled: false,
            errored: false
          }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setRoomSpaceSqFeet('150')}>
          Set to default
        </span>
      </div>
      {/* Row */}
      <div className="text-md font-medium mt-1">
        <span> Cost of Space ($/Sq. Feet/Hour) </span>
      </div>
      <div className="flex space-x-4">
        <SmallInput
          {...{
            label: '',
            placeholder: '',
            value: costOfSqFtPerHour,
            setValue: setCostOfSqFtPerHour,
            type: 'integer',
            disabled: false,
            errored: false
          }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setCostOfSqFtPerHour('0.01')}>
          Set to default
        </span>
      </div>
    </div>
  )
}

export default OtherCostsForEConsultTable;