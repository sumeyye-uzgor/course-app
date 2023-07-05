import "./globals.css"
import { Montserrat } from "next/font/google"
import React from "react"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Course App",
  description: "Course App - Perfect Match Between Tutors and Students"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
