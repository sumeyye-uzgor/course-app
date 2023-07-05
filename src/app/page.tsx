import DashboardLayout from "@/components/DashboardLayout"
import InfoCard from "@/components/InfoCard"
import React from "react"

const infoArray = [
  { title: "Students", icon: "/students-home.svg", count: "243", additionalStyle: "bg-[#F0F9FF]", link: "/students" },
  { title: "Course", icon: "/course-home.svg", count: "13", additionalStyle: "bg-[#FEF6FB]", link: "/course" },
  { title: "Payments", icon: "/payment-home.svg", count: "556,000₺", additionalStyle: "bg-[#FEFBEC]", link: "/payments" },
  { title: "Users", icon: "/users-home.svg", count: "3", additionalStyle: "bg-gradient-to-r from-[#feaf00] to-[#f8d442]", link: "/" }
]
export default function Home() {
  return (
    <DashboardLayout>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {infoArray.map((info) => (
          <InfoCard key={info.title} {...info} />
        ))}
      </div>
    </DashboardLayout>
  )
}
