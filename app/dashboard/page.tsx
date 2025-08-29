"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronDown,
  Plus,
  Bell,
  Settings,
  MessageSquare,
  FolderOpen,
  LayoutDashboard,
  Search,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const events = [
  { title: "Prepare presentation", day: 1, start: "10:00", end: "11:30" },
  { title: "Finish UI/UX", day: 1, start: "13:00", end: "14:00" },
  { title: "Prepare script", day: 2, start: "08:30", end: "09:30" },
  { title: "Documentation", day: 2, start: "11:30", end: "12:30" },
  { title: "Meeting prep", day: 2, start: "14:00", end: "15:00" },
  { title: "Group slides", day: 3, start: "09:30", end: "11:00" },
  { title: "Group meeting", day: 3, start: "15:30", end: "16:30" },
  { title: "Add tasks Project A", day: 4, start: "12:00", end: "12:30" },
]

export default function DashboardPage() {
  const [selectedView, setSelectedView] = useState("Week")

  const hours = Array.from({ length: 12 }, (_, i) => 8 + i) // 8 AM to 8 PM
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

  // Helper to position events
  const timeToRow = (time: string) => {
    const [h, m] = time.split(":").map(Number)
    return (h - 8) * 4 + m / 15 // 4 rows per hour for 15-min granularity
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
     {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#9AA2C5]" />
            <span className="text-xl font-semibold text-gray-800">ScheduLink</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-800">ChuionMoromuro</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 text-gray-900">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Button>
            <Link href="/messages">
              <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
                <MessageSquare className="w-5 h-5" />
                Message
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
                <FolderOpen className="w-5 h-5" />
                Projects
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </div>
        </nav>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for tasks, date, or anything"
              className="pl-10 h-12 bg-gray-50 border-gray-200"
            />
          </div>
          <div className="ml-6 flex items-center gap-2">
            <span className="text-sm text-gray-600">Team members</span>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/team-member-one.png" />
              <AvatarFallback>T1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/team-member-2.png" />
              <AvatarFallback>T2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white bg-gray-100">
              <AvatarFallback>
                <MoreHorizontal className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">January</h2>
            <Button variant="outline" className="gap-2 bg-transparent">
              {selectedView} <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "80px repeat(5, 1fr)" }}>
            {/* Header row */}
            <div></div>
            {days.map((day) => (
              <div key={day} className="p-2 text-center font-medium border-b border-gray-200">
                {day}
              </div>
            ))}

            {/* Time rows */}
            {hours.map((hour) => (
              <>
                <div key={hour} className="border-t border-gray-200 text-sm text-gray-500 p-2">
                  {hour}:00
                </div>
                {days.map((_, dayIdx) => (
                  <div
                    key={`${hour}-${dayIdx}`}
                    className="relative border-t border-l border-gray-200 min-h-[60px]"
                  >
                    {/* Events in this hour */}
                    {events
                      .filter((e) => e.day === dayIdx + 1)
                      .filter((e) => {
                        const h = parseInt(e.start.split(":")[0])
                        return h === hour
                      })
                      .map((e) => (
                        <div
                          key={e.title}
                          className="absolute left-1 right-1 bg-blue-100 text-blue-800 rounded p-1 text-xs shadow"
                          style={{
                            top: `${(parseInt(e.start.split(":")[1]) / 60) * 100}%`,
                            height: `${((parseInt(e.end.split(":")[0]) - parseInt(e.start.split(":")[0])) * 60 +
                              (parseInt(e.end.split(":")[1]) - parseInt(e.start.split(":")[1]))) /
                              60 *
                              100}%`
                          }}
                        >
                          {e.title}
                        </div>
                      ))}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
