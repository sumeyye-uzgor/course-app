"use client"
import React, { useState } from "react"
import CustomButton from "./CustomButton"
import CustomInput from "./CustomInput"
import Link from "next/link"

const SignInForm = () => {
  const [password, setPassword] = useState("")
  const [passwordAgain, setPasswordAgain] = useState("")

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="text-xl uppercase mt-11 mb-3">Reset Password</h3>
      <p className="text-sm text-gray-400 mb-12">Enter your new password to reset</p>
      <form className="grid gap-6 w-full">
        <CustomInput label="Password" placeholder="Enter your password" value={password} setValue={setPassword} type="password" />
        <CustomInput label="Password Again" placeholder="Repeat your password" value={passwordAgain} setValue={setPasswordAgain} type="password" />
        <CustomButton type="submit" text="Reset Password" />
        <p className=" text-[#6c6c6c] text-sm">
          You already have a password?{" "}
          <Link href="/auth/login" aria-disabled="true" className="text-[#FEAF00] underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignInForm
