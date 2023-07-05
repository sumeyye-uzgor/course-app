import Image from "next/image"
import React from "react"
import SidebarButton from "./SidebarButton"

const SidebarContent = () => {
  return (
    <div className="flex flex-col items-center justify-between h-[100%] mt-4 sm:mt-9 pb-[120px] sm:pb-0">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="w-32 h-32 rounded-full relative">
          <Image alt="profile picture" src="/avatar.png" fill className="rounded-full" />
        </div>
        <p className="text-lg">John Doe</p>
        <p className="text-sm text-[#FEAF00] font-medium">Admin</p>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <SidebarButton text="Home" path="/" iconLeft="/home.svg" />
        <SidebarButton text="Course" path="/course" iconLeft="/course.svg" />
        <SidebarButton text="Students" path="/students" iconLeft="/students.svg" />
        <SidebarButton text="Payment" path="/payment" iconLeft="/payment.svg" />
        <SidebarButton text="Report" path="/report" iconLeft="/report.svg" />
        <SidebarButton text="Settings" path="/settings" iconLeft="/settings.svg" />
      </div>
      <SidebarButton text="Logout" path="/auth/login" iconRight="/logout.svg" onClick={() => console.log("log out")} />
    </div>
  )
}

export default SidebarContent
