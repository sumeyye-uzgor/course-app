import DashboardLayout from "@/components/DashboardLayout"
import InfoCard from "@/components/InfoCard"
import React from "react"

const infoArray = [
  { title: "Students", icon: "/students-home.svg", count: "243", additionalStyle: "bg-[#F0F9FF]" },
  { title: "Course", icon: "/course-home.svg", count: "13", additionalStyle: "bg-[#FEF6FB]" },
  { title: "Payments", icon: "/payment-home.svg", count: "556,000₺", additionalStyle: "bg-[#FEFBEC]" },
  { title: "Users", icon: "/users-home.svg", count: "3", additionalStyle: "bg-gradient-to-r from-[#feaf00] to-[#f8d442]" }
]
export default function Home() {
  return (
    <DashboardLayout>
      <div className="w-full grid gap-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {infoArray.map((info) => (
          <InfoCard key={info.title} additionalStyle={info.additionalStyle} title={info.title} icon={info.icon} count={info.count} />
        ))}
      </div>
    </DashboardLayout>
  )
}
