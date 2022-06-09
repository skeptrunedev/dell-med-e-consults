
import type { NextPage } from 'next'
import { SmallInputProps } from '../../interfaces/utils';


const  SmallInput: NextPage<SmallInputProps> = ({placeholder, value, setValue, type, errored, disabled}) => {
  const setValueChecked = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      <div className="mt-1">
        <input
          type="text"
          className="focus:border focus:outline-casal-300 w-full border px-2 py-1 border-casal-300 rounded-md text-casal-400 font-medium"
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