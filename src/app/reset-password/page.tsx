import Image from "next/image"
import React from "react"
import ResetForm from "@/components/ResetForm"

const ResetPassword = () => {
  return (
    <div className="bg-gradient-to-r from-[#feaf00] to-[#f8d442] min-h-screen flex items-center justify-center p-2 p-sm-0">
      <div className="flex flex-col items-center justify-center bg-white container rounded-[20px] shadow-[2px 5px 10px 0px rgba(0, 0, 0, 0.1)] w-full md:w-[26rem] h-min py-11 px-8">
        <div className="flex gap-2 justify-center items-center">
          <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          <h1 className="text-3xl uppercase">MANAGE COURSES</h1>
        </div>
        <ResetForm />
      </div>
    </div>
  )
}
export default ResetPassword
