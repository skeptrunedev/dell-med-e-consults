
import type { NextPage } from 'next'
import { SmallInputProps } from '../../interfaces/utils';


const  SmallInput: NextPage<SmallInputProps> = ({placeholder, value, setValue, type, errored, disabled}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{type == 'USD' ? '$' : type == "percentage" ? '%' : ''}</span>
        </div>
        <input
          type="text"
          className={ "focus:border focus:outline-casal-300 w-full border px-2 py-1 rounded-md text-casal-400 font-medium" + (errored ? " border-red-500" : " border-casal-300") + (type == 'USD' ? ' pl-6' : type == "percentage" ? ' pl-6' : '')}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => setValueChecked(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SmallInput;