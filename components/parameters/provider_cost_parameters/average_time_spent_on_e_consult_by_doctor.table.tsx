
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import SmallInput from '../../util/small-input';

const  AverageTimeSpentOnEConsultByDoctorTable: NextPage = () => {
  const [sevenPointFive, setSevenPointFive] = useState<number>(30);
  const [fifteen, setFifteen] = useState<number>(50);
  const [twentyFive, setTwentyFive] = useState<number>(14);
  const [fourtyFive, setFourtyFive] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setSevenPointFive(Number(window.localStorage.getItem('sevenPointFive') || '30'));
    setFifteen(Number(window.localStorage.getItem('fifteen') || '50'));
    setTwentyFive(Number(window.localStorage.getItem('twentyFive') || '14'));
    setFourtyFive(Number(window.localStorage.getItem('fourtyFive') || '6'));
    window.dispatchEvent(new Event('averageTimeSpentOnEConsultByDoctor'));
    setLoading(false);
  }, [])

  useEffect(() => {
    if(!loading) {
      window.localStorage.setItem('sevenPointFive', sevenPointFive.toString());
      window.localStorage.setItem('fifteen', fifteen.toString());
      window.localStorage.setItem('twentyFive', twentyFive.toString());
      window.localStorage.setItem('fourtyFive', fourtyFive.toString());
      window.dispatchEvent(new Event('averageTimeSpentOnEConsultByDoctor'));
    }
  }, [sevenPointFive, fifteen, twentyFive, fourtyFive, loading]);

  return (
    <div className="grid mt-6 border-t border-casal-300">
      {/* Row */}
      <div className="grid grid-cols-3 mt-6 font-medium">
        <div>
          CPT code range midpoint
        </div>
        <div>
          Percentage
        </div>
        <span></span>
      </div>
      <div className="grid grid-cols-3 mt-6 space-y-4">
        {/* Row */}
        <div className="text-md font-medium mt-5">
          <span> 7.5 mins </span>
        </div>
        <input
          type="number"
          min="0.00"
          max="100.00"
          step="0.1"
          name={"seven_point_five"}
          id={"seven_point_five_Id"}
          className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"00000"}
          disabled={false}
          value={sevenPointFive}
          onChange={(e) => { setSevenPointFive(Number(e.target.value)) }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setSevenPointFive(30) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 15 mins </span>
        </div>
        <input
          type="number"
          min="0.00"
          max="100.00"
          step="0.1"
          name={"fifteen"}
          id={"fifteen_Id"}
          className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"00000"}
          disabled={false}
          value={fifteen}
          onChange={(e) => { setFifteen(Number(e.target.value)) }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setFifteen(50) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 25 mins </span>
        </div>
        <input
          type="number"
          min="0.00"
          max="100.00"
          step="0.1"
          name={"twenty_five"}
          id={"twenty_five_Id"}
          className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"00000"}
          disabled={false}
          value={twentyFive}
          onChange={(e) => { setTwentyFive(Number(e.target.value)) }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setTwentyFive(14) }}>
          Set to default
        </span>
        {/* Row */}
        <div className="text-md font-medium mt-1">
          <span> 45 mins </span>
        </div>
        <input
          type="number"
          min="0.00"
          max="100.00"
          step="0.1"
          name={"fourty_five"}
          id={"fourty_five_Id"}
          className="focus:border focus:outline-casal-300 w-3/5 border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
          placeholder={"00000"}
          disabled={false}
          value={fourtyFive}
          onChange={(e) => { setFourtyFive(Number(e.target.value)) }}
        />
        <span className="self-center text-casal-300 cursor-pointer select-none" onClick={() => { setFourtyFive(6) }}>
          Set to default
        </span>
      </div>
    </div>
  )
}

export default AverageTimeSpentOnEConsultByDoctorTable;