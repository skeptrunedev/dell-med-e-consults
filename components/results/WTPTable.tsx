
import type { NextPage } from 'next'

const  WTPTable: NextPage = () => {
  return (
    <div className="mt-16 mx-4 md:mx-28 text-casal-400">
      <span className="text-2xl font-semibold"> Calculated Results </span>
      <div className="grid px-6 py-6 mt-6 border rounded-xl border border-casal-300">
        <div className="flex justify-between">
          <div className="text-lg font-semibold self-center">
            <span> Willingness to pay (WTP) per e-consult </span>
          </div>
        </div>
        <div className="grid mt-6 border-t border-casal-300">
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average price per usual care
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average price per e-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Average cost/savings per e-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Cost per e-consult averaged over entire program
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Total cost per 3-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
          {/* Row */}
          <div className="grid grid-cols-2 mt-6 font-medium">
            <div>
              Loss/Gain per e-consult
            </div>
            <span>
              $ 60.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-20">
        <a className="mr-6 cursor-pointer" href="/parameters">
          Go Back
        </a>
        <button
          type="button"
          className="self-center w-fit h-fit px-16 py-4 font-medium rounded-xl text-white text-xl bg-casal-400 hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => { window.print() }}
        >
          Print
        </button>
      </div>
    </div>
  )
}

export default WTPTable;