"use client"
import React, { ReactNode, useState } from "react"
import Image from "next/image"
import Sidebar from "./Sidebar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
      <div className="flex">
        <div className="w-64 py-8 px-4">
          <Sidebar />
        </div>

        <button className="p-2 rounded-r-md focus:outline-none">
          <Image src="/burger-menu.svg" width={100} height={20} alt="burger menu" />
        </button>
      </div>
      {children}
    </>
  )
}

export default DashboardLayout
