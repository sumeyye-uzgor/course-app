import DashboardLayout from "@/components/DashboardLayout"
import React from "react"
import StudentsFooter from "@/components/StudentsFooter"
import StudentsHeader from "@/components/StudentsHeader"
import StudentsTable from "@/components/StudentsTable"

const Students = () => {
  return (
    <DashboardLayout>
      <StudentsHeader />
      <StudentsTable />
      <StudentsFooter />
    </DashboardLayout>
  )
}
export default Students
