"use client"
import React, { ReactNode, useState } from "react"
import Image from "next/image"
import Sidebar from "./Sidebar/Sidebar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div>
      <div className="block sm:hidden">
        <Sidebar />
        {children}
      </div>
      <div className="hidden sm:inline-grid gap-2 pl-[17rem]">
        <Sidebar />
        <div className="block">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
