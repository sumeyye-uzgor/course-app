"use client"
import React, { useState } from "react"
import BarHeader from "./BarHeader"
import Image from "next/image"
import SidebarContent from "./SidebarContent"

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="bg-[#F2EAE1] block sm:hidden">
        <div className="flex justify-between gap-2 w-full p-1 sticky top-0 left-0">
          <BarHeader />
          <button className="p-2 rounded-r-md focus:outline-none" onClick={() => setShowMenu((prevShow) => !prevShow)}>
            <Image src="/burger-menu.svg" width={40} height={20} alt="burger menu" />
          </button>
        </div>
        {showMenu && (
          <div className="h-screen w-full fixed bottom-0 top-0 right-0 left-0 bg-[#F2EAE1] overflow-hidden">
            <div className="flex justify-between gap-2 w-full p-1">
              <BarHeader />
              <button className="p-2 rounded-r-md focus:outline-none" onClick={() => setShowMenu((prevShow) => !prevShow)}>
                <Image src="/burger-menu.svg" width={40} height={20} alt="burger menu" />
              </button>
            </div>
            <SidebarContent />
          </div>
        )}
      </div>
      <div className="bg-[#F2EAE1] hidden sm:flex sm:flex-col h-screen fixed left-0 top-0 sm:w-[16.8rem] p-6">
        <BarHeader />
        <SidebarContent />
      </div>
    </>
  )
}

export default Sidebar
