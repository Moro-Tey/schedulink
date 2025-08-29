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
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "ChuionMoromuro",
    surname: "",
    about: "I love Chiikawa",
    pronouns: "they/them",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = async () => {
    setIsSubmitting(true)
    // Simulate save process
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // You could add a success message here
  }

  const handleReset = () => {
    setFormData({
      firstName: "ChuionMoromuro",
      surname: "",
      about: "I love Chiikawa",
      pronouns: "they/them",
    })
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

        {/* Edit Profile Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/settings" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              Settings
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium">Edit profile</span>
          </div>

          {/* Profile Form */}
          <div className="max-w-2xl">
            <div className="space-y-6">
              {/* Photo Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Photo</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/diverse-user-avatars.png" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="bg-[#9AA2C5] text-white border-[#9AA2C5] hover:bg-[#8A94B8]">
                    Change
                  </Button>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-12 bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname" className="text-sm font-medium text-gray-700">
                    Surname
                  </Label>
                  <Input
                    id="surname"
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    className="h-12 bg-white border-gray-200"
                  />
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-2">
                <Label htmlFor="about" className="text-sm font-medium text-gray-700">
                  About
                </Label>
                <Textarea
                  id="about"
                  value={formData.about}
                  onChange={(e) => handleInputChange("about", e.target.value)}
                  className="min-h-[120px] bg-white border-gray-200 resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Pronouns Section */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Pronouns</Label>
                <Select value={formData.pronouns} onValueChange={(value) => handleInputChange("pronouns", value)}>
                  <SelectTrigger className="w-full h-12 bg-white border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="they/them">they/them</SelectItem>
                    <SelectItem value="she/her">she/her</SelectItem>
                    <SelectItem value="he/him">he/him</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-8 py-2"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>
                <Button onClick={handleReset} variant="outline" className="px-8 py-2 bg-transparent">
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
