
import type { NextPage } from 'next'
import { PayerCostParametersHeadingProps } from '../../../interfaces/parameters';


const  PayerCostParametersHeading: NextPage<PayerCostParametersHeadingProps> = ({ setExpandAllSetting }) => {
  return (
    <div className="mt-8 px-4 md:px-28 text-casal-400">
      <div className="grid grid-cols-2">
        <div className='flex'>
          <span className="text-2xl font-semibold"> Payer Cost </span>
        </div>
        <div className="flex self-center text-sm md:text-base mt-2 justify-self-end mr-6 select-none">
          <span className="cursor-pointer" onClick={() => setExpandAllSetting('expanded')}> Expand All </span>
          <span className="px-3"> | </span>
          <span className="cursor-pointer" onClick={() => setExpandAllSetting('collapsed')}> Collapse All </span>
        </div>
      </div>
    </div>
  )
}

export default PayerCostParametersHeading;
