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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function UpdatesPage() {
  const [deliveryMethod, setDeliveryMethod] = useState("both")
  const [updateTypes, setUpdateTypes] = useState({
    taskAssignments: true,
    projectUpdates: true,
    groupMessages: false,
    systemUpdates: true,
    weeklyReports: true,
  })

  const handleUpdateTypeChange = (type: string, checked: boolean) => {
    setUpdateTypes((prev) => ({
      ...prev,
      [type]: checked,
    }))
  }

  const handleSave = async () => {
    console.log("Saving update settings:", { deliveryMethod, updateTypes })
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

        {/* Updates Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/settings" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              Settings
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium">Choose how you get updates</span>
          </div>

          {/* Update Settings */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Preferences</h2>

            <div className="space-y-8">
              {/* Delivery Method */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">How would you like to receive updates?</h3>
                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email">Email only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="web" id="web" />
                    <Label htmlFor="web">In-app notifications only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Both email and in-app notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">No notifications</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Update Types */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">What updates would you like to receive?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="taskAssignments"
                      checked={updateTypes.taskAssignments}
                      onCheckedChange={(checked) => handleUpdateTypeChange("taskAssignments", checked as boolean)}
                    />
                    <Label htmlFor="taskAssignments" className="text-sm">
                      Task assignments and updates
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="projectUpdates"
                      checked={updateTypes.projectUpdates}
                      onCheckedChange={(checked) => handleUpdateTypeChange("projectUpdates", checked as boolean)}
                    />
                    <Label htmlFor="projectUpdates" className="text-sm">
                      Project status updates
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="groupMessages"
                      checked={updateTypes.groupMessages}
                      onCheckedChange={(checked) => handleUpdateTypeChange("groupMessages", checked as boolean)}
                    />
                    <Label htmlFor="groupMessages" className="text-sm">
                      Group messages and discussions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="systemUpdates"
                      checked={updateTypes.systemUpdates}
                      onCheckedChange={(checked) => handleUpdateTypeChange("systemUpdates", checked as boolean)}
                    />
                    <Label htmlFor="systemUpdates" className="text-sm">
                      System updates and announcements
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="weeklyReports"
                      checked={updateTypes.weeklyReports}
                      onCheckedChange={(checked) => handleUpdateTypeChange("weeklyReports", checked as boolean)}
                    />
                    <Label htmlFor="weeklyReports" className="text-sm">
                      Weekly activity reports
                    </Label>
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
