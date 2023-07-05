import React, { ReactNode } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar/Sidebar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="block sm:hidden">
        <Sidebar />
        {children}
      </div>
      <div className="hidden w-full sm:inline-grid gap-2 pl-[17rem] pr-3 ">
        <Sidebar />
        <div className="block">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
