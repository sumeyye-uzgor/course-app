import Image from "next/image"
import React from "react"

interface InfoCardProps {
  additionalStyle: string
  icon: string
  title: string
  count: string
}

const InfoCard = ({ additionalStyle, icon, title, count }: InfoCardProps) => {
  return (
    <div className={`w-full rounded-lg flex flex-col h-40 p-5 ${additionalStyle}`}>
      <div className="relative w-9 h-9">
        <Image src={icon} alt={`${title} icon`} fill />
      </div>
      <p className="text-sm">{title}</p>
      <p className="text-3xl">{count}</p>
    </div>
  )
}

export default InfoCard
