
import type { NextPage } from 'next'


const  ResultsHeading: NextPage = () => {
  return (
    <div className="grid grid-cols-3 mt-14 px-4 md:px-28">
      <div className="text-center">
        <p className="text-2xl font-semibold"> $ 60.00 </p>
        <p className=""> Payor Average cost/savings e-consult </p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold"> $ 60.00 </p>
        <p className=""> Payor Average cost/savings e-consult </p>
      </div>
       <div className="text-center">
        <p className="text-2xl font-semibold"> $ 60.00 </p>
        <p className=""> Payor Average cost/savings e-consult </p>
      </div>
    </div>
  )
}

export default ResultsHeading;