"use client"
import * as React from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  MessageSquare,
  FolderOpen,
  Bell,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SidebarNav() {
  return (
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
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900">
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
  )
}