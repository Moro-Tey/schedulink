"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Calendar,
  Search,
  Plus,
  Bell,
  Settings,
  MessageSquare,
  FolderOpen,
  LayoutDashboard,
  ChevronLeft,
  MoreHorizontal,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProjectDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("Tasks")
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)

  // Mock project data - in real app this would come from API based on params.id
  const project = {
    id: params.id,
    name: "Project A",
    members: 5,
    backgroundImage: "/colorful-geometric-abstract.png",
    backgroundColor: "bg-gradient-to-br from-blue-200 to-purple-300",
  }

  const tasks = [
    {
      id: 1,
      title: "Prepare presentation",
      dueDate: "01/01/2025",
      dueTime: "10:40 AM",
      completed: false,
    },
    {
      id: 2,
      title: "Finish UI/UX",
      dueDate: "01/01/2025",
      dueTime: "1:00 PM",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare script",
      dueDate: "02/01/2025",
      dueTime: "8:30 AM",
      completed: false,
    },
    {
      id: 4,
      title: "Start on documentation",
      dueDate: "02/01/2025",
      dueTime: "11:30 AM",
      completed: false,
    },
    {
      id: 5,
      title: "Meeting for preparation of presentation next week",
      dueDate: "02/01/2025",
      dueTime: "2:00 PM",
      completed: false,
    },
  ]

  const members = [
    {
      id: 1,
      name: "Virak Bochhuttey",
      avatar: "/member-virak.png",
      role: "admin",
      isLeader: true,
    },
    {
      id: 2,
      name: "Hort Sopheackanha",
      avatar: "/member-hort.png",
      role: "member",
      isLeader: false,
    },
    {
      id: 3,
      name: "Moeun Liza",
      avatar: "/member-moeun.png",
      role: "member",
      isLeader: false,
    },
    {
      id: 4,
      name: "Ny Lisa",
      avatar: "/member-ny.png",
      role: "member",
      isLeader: false,
    },
  ]

  const tabs = ["Tasks", "Schedule", "Members"]

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
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 text-gray-900">
              <FolderOpen className="w-5 h-5" />
              Projects
            </Button>
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

        {/* Project Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/projects" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ChevronLeft className="w-4 h-4" />
              Projects
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium">{project.name}</span>
          </div>

          {/* Project Header */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm mb-6 h-48">
            {/* Background */}
            <div className={`absolute inset-0 ${project.backgroundColor}`}>
              <img
                src={project.backgroundImage || "/placeholder.svg"}
                alt={`${project.name} background`}
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
                <p className="text-white/90">{project.members} members</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`px-6 py-2 rounded-full ${
                  activeTab === tab
                    ? "bg-[#9AA2C5] text-white hover:bg-[#8A94B8]"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <div className="w-80">
              <Button
                onClick={() => setShowAddTaskModal(true)}
                className="w-full justify-start gap-3 bg-[#9AA2C5] hover:bg-[#8A94B8] text-white mb-4"
              >
                <Plus className="w-5 h-5" />
                Add new task
              </Button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "Tasks" && (
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            className="w-4 h-4 text-[#9AA2C5] rounded border-gray-300"
                            readOnly
                          />
                          <span className={`${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                            {task.title}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-800">{task.dueDate}</div>
                          <div className="text-sm text-gray-500">{task.dueTime}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Schedule" && (
                <div className="space-y-4">
                  {tasks
                    .sort((a, b) => {
                      // Sort by date and time
                      const dateA = new Date(`${a.dueDate} ${a.dueTime}`)
                      const dateB = new Date(`${b.dueDate} ${b.dueTime}`)
                      return dateA.getTime() - dateB.getTime()
                    })
                    .map((task) => (
                      <div
                        key={task.id}
                        className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-gray-800 font-medium">{task.title}</h3>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-sm font-medium text-gray-800">{task.dueDate}</div>
                            <div className="text-sm text-gray-500">{task.dueTime}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === "Members" && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="space-y-4">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500 capitalize">{member.role}</p>
                          </div>
                        </div>
                        {member.isLeader && <Crown className="w-5 h-5 text-yellow-500" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
