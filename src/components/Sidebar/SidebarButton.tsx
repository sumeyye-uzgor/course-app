"use client"
import React, { ButtonHTMLAttributes, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  iconRight?: string
  iconLeft?: string
  path: string
}

const SidebarButton = ({ text, path, iconRight, iconLeft, ...otherProps }: SidebarButtonProps) => {
  const [active, setActive] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    setActive(pathName === path)
  }, [pathName, path])
  return (
    <Link href={path} className="w-full">
      <button className={`${active ? "bg-[#FEAF00]" : "bg-transparent"} flex items-center justify-between w-full rounded py-2 px-12`} {...otherProps}>
        {iconLeft && <Image src={iconLeft} width={18} height={18} alt={`${text} icon`} />}
        {text}
        {iconRight && <Image src={iconRight} width={18} height={18} alt={`${text} icon`} />}
      </button>
    </Link>
  )
}

export default SidebarButton
