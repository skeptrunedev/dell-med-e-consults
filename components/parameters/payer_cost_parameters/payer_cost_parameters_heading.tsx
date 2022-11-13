import type { NextPage } from "next";
import { PayerCostParametersHeadingProps } from "../../../interfaces/parameters";
import { InformationCircleIcon } from "@heroicons/react/outline";

const PayerCostParametersHeading: NextPage<PayerCostParametersHeadingProps> = ({
  setExpandAllSetting,
}) => {
  return (
    <div className="mt-8 px-4 text-casal-400 md:px-28">
      <div className="grid grid-cols-2">
        <div className="flex">
          <span className="text-2xl font-semibold"> Payor Costs </span>
          <a href="/faq#payor-costs">
            <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-casal-600" />
          </a>
        </div>
        <div className="mt-2 mr-6 flex select-none self-center justify-self-end text-sm md:text-base">
          <span
            className="cursor-pointer"
            onClick={() => setExpandAllSetting("expanded")}
          >
            {" "}
            Expand All{" "}
          </span>
          <span className="px-3"> | </span>
          <span
            className="cursor-pointer"
            onClick={() => setExpandAllSetting("collapsed")}
          >
            {" "}
            Collapse All{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayerCostParametersHeading;
