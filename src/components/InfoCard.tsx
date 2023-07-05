import Image from "next/image"
import Link from "next/link"
import React from "react"

interface InfoCardProps {
  additionalStyle: string
  icon: string
  title: string
  link: string
  count: string
}

const InfoCard = ({ additionalStyle, icon, title, count, link }: InfoCardProps) => {
  return (
    <Link className="w-full" href={link}>
      <div className={`w-full rounded-lg flex flex-col h-40 p-5 ${additionalStyle}`}>
        <div className="relative w-9 h-9">
          <Image src={icon} alt={`${title} icon`} fill />
        </div>
        <p className="text-sm text-[#6C6C6C]">{title}</p>
        <p className="text-3xl mt-auto ml-auto">{count}</p>
      </div>
    </Link>
  )
}

export default InfoCard
