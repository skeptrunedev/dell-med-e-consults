import type { NextPage } from "next";
import { SmallInputProps } from "../../interfaces/utils";

const SmallInput: NextPage<SmallInputProps> = ({
  placeholder,
  value,
  setValue,
  type,
  errored,
  disabled,
}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center">
          <span className="text-gray-500 sm:text-sm">
            {type == "USD" ? "$" : type == "percentage" ? "%" : ""}
          </span>
        </div>
        <input
          type="text"
          className={
            "w-full rounded-md border px-2 py-1 font-medium text-casal-400 focus:border focus:outline-casal-300" +
            (errored
              ? " border-red-500 focus:outline-red-500"
              : " border-casal-300") +
            (type == "USD" ? " pl-6" : type == "percentage" ? " pl-6" : " pr-6")
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

export default SmallInput;
