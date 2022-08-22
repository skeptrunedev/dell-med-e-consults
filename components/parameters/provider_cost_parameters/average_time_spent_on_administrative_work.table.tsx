
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';

const  AverageTimeSpentOnAdministrativeWorkTable: NextPage = () => {
  const [zeroAdmin, setZeroAdmin] = useState<number>(0);
  const [fiveAdmin, setFiveAdmin] = useState<number>(50);
  const [tenAdmin, setTenAdmin] = useState<number>(40);
  const [fifteenAdmin, setFifteenAdmin] = useState<number>(10);
  const [twentyAdmin, setTwentyAdmin] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setZeroAdmin(Number(window.localStorage.getItem('zeroAdmin') || '0'));
    setFiveAdmin(Number(window.localStorage.getItem('fiveAdmin') || '50'));
    setTenAdmin(Number(window.localStorage.getItem('tenAdmin') || '40'));
    setFifteenAdmin(Number(window.localStorage.getItem('fifteenAdmin') || '10'));
    setTwentyAdmin(Number(window.localStorage.getItem('twentyAdmin') || '0'));
    window.dispatchEvent(new Event('averageTimeSpentOnAdministrativeWork'));
    setLoading(false);
  }, [])

  useEffect(() => {
    if(loading) {
      return;
    }
    
    window.localStorage.setItem('zeroAdmin', zeroAdmin.toString());
    window.localStorage.setItem('fiveAdmin', fiveAdmin.toString());
    window.localStorage.setItem('tenAdmin', tenAdmin.toString());
    window.localStorage.setItem('fifteenAdmin', fifteenAdmin.toString());
    window.localStorage.setItem('twentyAdmin', twentyAdmin.toString());
    window.dispatchEvent(new Event('averageTimeSpentOnAdministrativeWork'));
  }, [zeroAdmin, fiveAdmin, tenAdmin, fifteenAdmin, twentyAdmin, loading]);

  return (
    <div className="grid mt-6 border-t border-casal-300">
      {/* Row */}
      <div className="grid grid-cols-3 mt-6 font-medium">
        <div>
          Time Spent
        </div>
        <div>
          Percentage
        </div>
        <span></span>
      </div>
      <div className="grid grid-cols-3 mt-6 space-y-4">
        {/* Row */}
        <div className="text-md font-medium mt-5">
          <span> 0 mins </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"seven_point_five"}
            id={"seven_point_five_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={zeroAdmin}
            onChange={(e) => { setZeroAdmin(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setZeroAdmin(0) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-5">
          <span> 5 mins </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"seven_point_five"}
            id={"seven_point_five_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={fiveAdmin}
            onChange={(e) => { setFiveAdmin(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setFiveAdmin(50) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 10 mins </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"fourty_five"}
            id={"fourty_five_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={tenAdmin}
            onChange={(e) => { setTenAdmin(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setTenAdmin(40) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 15 mins </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"fifteen"}
            id={"fifteen_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={fifteenAdmin}
            onChange={(e) => { setFifteenAdmin(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setFifteenAdmin(10) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 20 mins </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-[45%] flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="number"
            min="0.00"
            max="100.00"
            step="0.1"
            name={"twenty_five"}
            id={"twenty_five_Id"}
            className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 pl-6 border-casal-300 rounded-md text-casal-400 font-medium"
            placeholder={"00000"}
            disabled={false}
            value={twentyAdmin}
            onChange={(e) => { setTwentyAdmin(Number(e.target.value)) }}
          />
        </div>
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setTwentyAdmin(0) }}>
          Set to default
        </span>
      </div>
    </div>
  )
}

export default AverageTimeSpentOnAdministrativeWorkTable;