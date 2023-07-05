import React, { ButtonHTMLAttributes } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}
const CustomButton = ({ text, ...otherProps }: CustomButtonProps) => {
  return (
    <button className="bg-[#FEAF00] rounded p-4 text-white uppercase" {...otherProps}>
      {text}
    </button>
  )
}

export default CustomButton
