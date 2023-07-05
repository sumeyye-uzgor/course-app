"use client"
import React, { useState } from "react"
import CustomButton from "./CustomButton"
import CustomInput from "./CustomInput"
import Link from "next/link"

const SignInForm = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col items-center content-center justify-center w-full">
      <h3 className="text-xl uppercase mt-11 mb-3">Sign In</h3>
      <p className="text-sm text-gray-400 mb-12">Enter your credentials to access your account</p>
      <form className="grid gap-6 w-full">
        <CustomInput label="email" placeholder="Enter your email" value={email} setValue={setEmail} autoComplete="true" />
        <CustomInput label="Password" placeholder="Enter your password" value={password} setValue={setPassword} type="password" autoComplete="true" />
        <CustomButton type="submit" text="Sign In" />
        <p className="text-[#6c6c6c] text-sm">
          Forgot your password?{" "}
          <Link href="/auth/reset-password" aria-disabled="true" className="text-[#FEAF00] underline">
            Reset Password
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignInForm
