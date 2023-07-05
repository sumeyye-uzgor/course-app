"use client"
import React, { useState } from "react"
import CustomButton from "./CustomButton"
import CustomInput from "./CustomInput"

const StudentsHeader = () => {
  const [searchKey, setSearchKey] = useState("")

  return (
    <div className="border-bottom border-bottom-[#E5E5E5] flex flex-col md:flex-row gap-5 justify-between p-3 py-5 sm:px-0">
      <h2 className="text-2xl font-bold">Students List</h2>
      <div className="flex flex-col sm:flex-row gap-5">
        <CustomInput placeholder="Search" setValue={setSearchKey} value={searchKey} />
        <CustomButton text="Add New Student" onClick={() => console.log("add new student")} />
      </div>
    </div>
  )
}

export default StudentsHeader
