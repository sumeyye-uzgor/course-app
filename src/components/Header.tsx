import Image from "next/image"
import React from "react"

const Header = () => {
  return (
    <div className="flex justify-between p-3 mb-5">
      <Image src="/caret.svg" width={20} height={20} alt="caret icon" />
      <Image src="/bell.svg" width={20} height={20} alt="bell icon" />
    </div>
  )
}

export default Header
