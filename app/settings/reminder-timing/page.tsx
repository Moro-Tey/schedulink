"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Calendar,
  Search,
  Bell,
  Settings,
  MessageSquare,
  FolderOpen,
  LayoutDashboard,
  MoreHorizontal,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReminderTimingPage() {
  const [timingSettings, setTimingSettings] = useState({
    taskReminder: "1-day",
    meetingReminder: "30-minutes",
    deadlineReminder: "3-days",
    quietHoursStart: "22:00",
    quietHoursEnd: "08:00",
  })

  const handleTimingChange = (setting: string, value: string) => {
    setTimingSettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleSave = async () => {
    console.log("Saving timing settings:", timingSettings)
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
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Button>
            </Link>
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
            <Link href="/notifications">
              <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5" />
                Notifications
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 text-gray-900">
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for tasks, date, or anything"
                  className="pl-10 h-12 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="ml-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Team members</span>
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/team-member-one.png" />
                    <AvatarFallback>T1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/team-member-2.png" />
                    <AvatarFallback>T2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/diverse-team-member-3.png" />
                    <AvatarFallback>T3</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white bg-gray-100">
                    <AvatarFallback>
                      <MoreHorizontal className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reminder Timing Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/settings" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              Settings
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium">Set when you want to be reminded</span>
          </div>

          {/* Timing Settings */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reminder Timing</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-6">
                  {/* Task Reminders */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-gray-800">Task Reminders</Label>
                    <p className="text-sm text-gray-600 mb-3">How far in advance should we remind you about tasks?</p>
                    <Select
                      value={timingSettings.taskReminder}
                      onValueChange={(value) => handleTimingChange("taskReminder", value)}
                    >
                      <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15-minutes">15 minutes before</SelectItem>
                        <SelectItem value="1-hour">1 hour before</SelectItem>
                        <SelectItem value="1-day">1 day before</SelectItem>
                        <SelectItem value="3-days">3 days before</SelectItem>
                        <SelectItem value="1-week">1 week before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Meeting Reminders */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-gray-800">Meeting Reminders</Label>
                    <p className="text-sm text-gray-600 mb-3">When should we remind you about upcoming meetings?</p>
                    <Select
                      value={timingSettings.meetingReminder}
                      onValueChange={(value) => handleTimingChange("meetingReminder", value)}
                    >
                      <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-minutes">5 minutes before</SelectItem>
                        <SelectItem value="15-minutes">15 minutes before</SelectItem>
                        <SelectItem value="30-minutes">30 minutes before</SelectItem>
                        <SelectItem value="1-hour">1 hour before</SelectItem>
                        <SelectItem value="1-day">1 day before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Deadline Reminders */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-gray-800">Deadline Reminders</Label>
                    <p className="text-sm text-gray-600 mb-3">How early should we warn you about deadlines?</p>
                    <Select
                      value={timingSettings.deadlineReminder}
                      onValueChange={(value) => handleTimingChange("deadlineReminder", value)}
                    >
                      <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-day">1 day before</SelectItem>
                        <SelectItem value="3-days">3 days before</SelectItem>
                        <SelectItem value="1-week">1 week before</SelectItem>
                        <SelectItem value="2-weeks">2 weeks before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Quiet Hours */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Quiet Hours</h3>
                <p className="text-sm text-gray-600 mb-4">Set times when you don&apos;t want to receive notifications</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Start Time</Label>
                    <Select
                      value={timingSettings.quietHoursStart}
                      onValueChange={(value) => handleTimingChange("quietHoursStart", value)}
                    >
                      <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, "0")
                          return (
                            <SelectItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">End Time</Label>
                    <Select
                      value={timingSettings.quietHoursEnd}
                      onValueChange={(value) => handleTimingChange("quietHoursEnd", value)}
                    >
                      <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, "0")
                          return (
                            <SelectItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex gap-3">
                <Button onClick={handleSave} className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-8 py-2">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
