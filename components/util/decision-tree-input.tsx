import type { NextPage } from "next";
import { DecisionTreeInputProps } from "../../interfaces/utils";

const DecisionTreeInput: NextPage<DecisionTreeInputProps> = ({
  placeholder,
  value,
  setValue,
  type,
  errored,
  disabled,
  borderColor,
}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* These Are Present So Tailwind Always Loads the Dynamic Style */}
      <span className="hidden focus:outline-purple-500"> </span>
      <span className="hidden focus:outline-blue-500"> </span>
      <span className="hidden focus:outline-yellow-500"> </span>
      <span className="hidden focus:outline-orange-500"> </span>

      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm">%</span>
        </div>
        <input
          type="text"
          className={
            "w-40 rounded-md border px-2 py-1 text-center font-medium text-casal-400" +
            " focus:outline-" +
            borderColor +
            (errored ? " border-red-500 focus:outline-red-500" : " border-" + borderColor)
          }
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => setValueChecked(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DecisionTreeInput;
