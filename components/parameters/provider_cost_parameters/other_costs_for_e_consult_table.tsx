
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import SmallInput from '../../util/small-input';

const  OtherCostsForEConsultTable: NextPage = () => {
  const [equipmentTechPerHour, setEquipmentTechPerHour] = useState('10');
  const [phoneInternetPerHour, setPhoneInternetPerHour] = useState('10');
  const [roomSpaceSqFeet, setRoomSpaceSqFeet] = useState('1000');
  const [costOfSqFtPerHour, setCostOfSqFtPerHour] = useState('10');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setEquipmentTechPerHour(window.localStorage.getItem('equipmentTechPerHour') || '10');
    setPhoneInternetPerHour(window.localStorage.getItem('phoneInternetPerHour') || '10');
    setRoomSpaceSqFeet(window.localStorage.getItem('roomSpaceSqFeet') || '1000');
    setCostOfSqFtPerHour(window.localStorage.getItem('costOfSqFtPerHour') || '10');
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('equipmentTechPerHour', equipmentTechPerHour);
      window.localStorage.setItem('phoneInternetPerHour', phoneInternetPerHour);
      window.localStorage.setItem('roomSpaceSqFeet', roomSpaceSqFeet);
      window.localStorage.setItem('costOfSqFtPerHour', costOfSqFtPerHour);
      window.dispatchEvent(new Event('otherCostsForEConsults'));
    }
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
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setEquipmentTechPerHour('10')}>
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
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setPhoneInternetPerHour('10')}>
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
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setRoomSpaceSqFeet('1000')}>
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
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => setCostOfSqFtPerHour('10')}>
          Set to default
        </span>
      </div>
    </div>
  )
}

export default OtherCostsForEConsultTable;