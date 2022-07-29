
import type { NextPage } from 'next'
import { DecisionTreeInputProps } from '../../interfaces/utils';


const  DecisionTreeInput: NextPage<DecisionTreeInputProps> = ({placeholder, value, setValue, type, errored, disabled, borderColor}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      {/* These Are Present So Tailwind Always Loads the Dynamic Style */}
      <span className="hidden focus:outline-purple-500"> </span>
      <span className="hidden focus:outline-blue-500"> </span>
      <span className="hidden focus:outline-yellow-500"> </span>

      <div className="mt-1">
        <input
          type="text"
          className={ "border px-2 py-1 w-40 rounded-md text-casal-400 font-medium" + " focus:outline-" + borderColor + (errored ? " border-red-500" : " border-" + borderColor) }
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => setValueChecked(e.target.value)}
        />
      </div>
    </div>
  )
}

export default DecisionTreeInput;