
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
      <div className="mt-1">
        <input
          type="text"
          name={label}
          id={label + "Id"}
          className="focus:border focus:outline-casal-300 w-full border px-3 py-2 border-casal-300 rounded-md text-casal-400 font-medium"
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