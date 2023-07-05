import React, { Dispatch, InputHTMLAttributes, SetStateAction } from "react"

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  setValue: Dispatch<SetStateAction<string>>
  label?: string
}

const CustomInput = ({ placeholder, label, value, setValue, ...otherProps }: ICustomInput) => {
  return (
    <div className="grid gap-2 ">
      {label && (
        <label htmlFor="password" className="capitalize text-[#6c6c6c] text-sm font-medium">
          {label}
        </label>
      )}
      <input
        className="rounded border border-[#E5E5E5] bg-white p-4 focus:outline-0 focus:border-black focus:border-2"
        id="password"
        name="password"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...otherProps}
      />
    </div>
  )
}

export default CustomInput
