
import type { NextPage } from 'next'
import { LargeInputProps } from '../../interfaces/utils';


const  LargeInput: NextPage<LargeInputProps> = ({label, placeholder, value, setValue, type, errored, disabled}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      <label htmlFor="email" className="w-fit font-medium">
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{type == 'USD' ? '$' : type == "percentage" ? '%' : ''}</span>
        </div>
        <input
          type="text"
          name={label}
          id={label + "Id"}
          className={ "focus:border w-11/12 border px-3 py-2 rounded-md text-casal-400 font-medium" + (errored ? " border-red-500 focus:outline-red-500" : " border-casal-300 focus:outline-casal-300") + (type == 'USD' ? ' pl-6' : type == "percentage" ? ' pl-6' : '')}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => setValueChecked(e.target.value)}
        />
      </div>
    </div>
  )
}

export default LargeInput;