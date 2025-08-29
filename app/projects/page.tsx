"use client"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Search,
  Bell,
  Settings,
  MessageSquare,
  FolderOpen,
  LayoutDashboard,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProjectsPage() {
  const projects = [
    {
      id: "project-a",
      name: "Project A",
      members: 5,
      backgroundImage: "/colorful-geometric-abstract.png",
      backgroundColor: "bg-gradient-to-br from-blue-200 to-purple-300",
    },
    {
      id: "project-b",
      name: "Project B",
      members: 5,
      backgroundImage: "/minimalist-workspace.png",
      backgroundColor: "bg-gradient-to-br from-gray-200 to-blue-200",
    },
    {
      id: "project-c",
      name: "Project C",
      members: 5,
      backgroundImage: "/dark-modern-tech-interface.png",
      backgroundColor: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
    {
      id: "project-d",
      name: "Project D",
      members: 5,
      backgroundImage: "/mountain-sky-scene.png",
      backgroundColor: "bg-gradient-to-br from-blue-300 to-green-300",
    },
    {
      id: "project-e",
      name: "Project E",
      members: 5,
      backgroundImage: "/placeholder-e16lp.png",
      backgroundColor: "bg-gradient-to-br from-orange-200 to-red-300",
    },
  ]

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

        {/* Projects Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Projects</h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer h-48">
                  {/* Background Image/Gradient */}
                  <div className={`absolute inset-0 ${project.backgroundColor}`}>
                    <Image
                      src={project.backgroundImage || "/placeholder.svg"}
                      alt={`${project.name} background`}
                      className="w-full h-full object-cover opacity-80"
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'cover', opacity: 0.8 }}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                      <p className="text-white/90 text-sm">{project.members} members</p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#9AA2C5]/50 rounded-2xl transition-all duration-200" />
                </div>
              </Link>
            ))}
          </div>

          {/* Create New Project Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-8 py-4 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              Create or Join a New Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
