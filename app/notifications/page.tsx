"use client"

import { useState, useEffect } from "react"
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
  MoreVertical,
  Archive,
  Trash2,
  Mail,
  MailOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationsPage() {
  const [filterType, setFilterType] = useState("recents")
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "task_assignment",
      title: "Project A Task Assignment",
      content: {
        objective:
          "Create a visually engaging and informative slide presentation using Canva that effectively delivers our topic within 5 minutes.",
        instructions: [
          "Platform: Use Canva to design the presentation slides.",
          "Duration: The total presentation should last approximately 5 minutes (aim for 5-7 slides).",
        ],
        contentRequirements: [
          "Cover slide (title, group name, topic, and date)",
          "Introduction slide (brief overview or hook)",
          "2-3 main content slides (key points or arguments)",
          "Conclusion slide (summary or call-to-action)",
          "References slide (citing 2 classroom messages)",
          "(Optional) Credits or group member roles slide",
        ],
        designGuidelines: [
          "Use consistent fonts, colors, and layout throughout.",
          "Include visuals (images, icons, or infographics) to support the message.",
          "Avoid text-heavy slides—keep it concise.",
          "Ensure readability with appropriate font sizes.",
        ],
        presentationDate:
          "Each group member should be prepared to speak during the presentation (about 1 minute per person if in a group of 4-5).",
        additionalNotes:
          "Share the Canva link with editing access to the group chat or on [platform name, e.g., Google Classroom] once finalized.",
      },
      timestamp: "1 task has been assigned",
      createdAt: "2 hours ago",
      isNew: true,
      isRead: false,
      isArchived: false,
    },
  ])

  const [showActionMenu, setShowActionMenu] = useState<number | null>(null)

  const markAsRead = (notificationId: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId ? { ...notification, isRead: true, isNew: false } : notification,
      ),
    )
    setShowActionMenu(null)
  }

  const markAsUnread = (notificationId: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId ? { ...notification, isRead: false, isNew: true } : notification,
      ),
    )
    setShowActionMenu(null)
  }

  const archiveNotification = (notificationId: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId ? { ...notification, isArchived: true } : notification,
      ),
    )
    setShowActionMenu(null)
  }

  const deleteNotification = (notificationId: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== notificationId))
    setShowActionMenu(null)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showActionMenu !== null) {
        setShowActionMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showActionMenu])

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
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 text-gray-900">
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

        {/* Notifications Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32 bg-transparent border-none shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recents">Recents</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="tasks">Tasks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications
              .filter((notification) => !notification.isArchived)
              .map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm relative ${
                    !notification.isRead ? "ring-2 ring-[#9AA2C5]/20" : ""
                  }`}
                >
                  {/* Notification Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          notification.isRead ? "bg-gray-400" : "bg-[#9AA2C5]"
                        }`}
                      >
                        <span className="text-white text-sm font-medium">B</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">{notification.timestamp}</span>
                        <span className="text-xs text-gray-400 ml-2">{notification.createdAt}</span>
                      </div>
                      {!notification.isRead && <div className="w-2 h-2 bg-[#9AA2C5] rounded-full"></div>}
                    </div>

                    {/* Action Menu */}
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowActionMenu(showActionMenu === notification.id ? null : notification.id)}
                        className="p-1 h-8 w-8"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>

                      {showActionMenu === notification.id && (
                        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px]">
                          <div className="py-1">
                            {!notification.isRead ? (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <MailOpen className="w-4 h-4" />
                                Mark as read
                              </button>
                            ) : (
                              <button
                                onClick={() => markAsUnread(notification.id)}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <Mail className="w-4 h-4" />
                                Mark as unread
                              </button>
                            )}
                            <button
                              onClick={() => archiveNotification(notification.id)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Archive className="w-4 h-4" />
                              Archive
                            </button>
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Notification Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">{notification.title}</h3>

                    {/* Objective */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Objective:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{notification.content.objective}</p>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Instructions:</h4>
                      <ul className="space-y-1">
                        {notification.content.instructions.map((instruction, index) => (
                          <li key={index} className="text-gray-700 text-sm leading-relaxed">
                            {index + 1}. {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Content Requirements */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Content Requirements:</h4>
                      <ul className="space-y-1">
                        {notification.content.contentRequirements.map((requirement, index) => (
                          <li key={index} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-[#9AA2C5] mt-1">•</span>
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Design Guidelines */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Design Guidelines:</h4>
                      <ul className="space-y-1">
                        {notification.content.designGuidelines.map((guideline, index) => (
                          <li key={index} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-[#9AA2C5] mt-1">•</span>
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Presentation Date */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Presentation Date:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{notification.content.presentationDate}</p>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Additional Notes:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{notification.content.additionalNotes}</p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-6 py-2 rounded-lg">
                        Go to Task
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
