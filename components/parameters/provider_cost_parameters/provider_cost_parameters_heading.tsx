
import type { NextPage } from 'next'
import { InformationCircleIcon } from '@heroicons/react/outline';


const  ProviderCostParametersHeading: NextPage = () => {
  return (
    <div className="mt-8 px-4 md:px-28 text-casal-400">
      <div className="grid grid-cols-2">
        <div className='flex'>
          {/* Formerly "Enter Costs From A Provider Perspective" */}
          <span className="text-2xl font-semibold"> Payor Costs </span>
          <a href="/faq#provider-costs">
            <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-casal-600" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProviderCostParametersHeading;
