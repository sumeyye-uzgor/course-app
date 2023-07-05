import Image from "next/image"
import React from "react"

const BarHeader = () => {
  return (
    <div className="w-max flex gap-2 justify-center items-center">
      <Image src="/line.svg" alt="Yellow Line" width={6} height={39} />
      <h1 className="w-max text-md uppercase">MANAGE COURSES</h1>
    </div>
  )
}

export default BarHeader
