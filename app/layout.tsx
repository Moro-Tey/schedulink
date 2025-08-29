import type React from "react"
import type { Metadata } from "next"
import { Shantell_Sans } from 'next/font/google'
import "./globals.css"

const shantellSans = Shantell_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScheduLink - Enhance Your Study Sessions",
  description: "Connect with study groups, organize sessions, and stay on track with your academic goals.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={shantellSans.className}>{children}</body>
    </html>
  )
}
