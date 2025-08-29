"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Search,
  Plus,
  Bell,
  Settings,
  MessageSquare,
  FolderOpen,
  LayoutDashboard,
  Phone,
  Info,
  Users,
  Send,
  MoreHorizontal,
  Camera,
  Copy,
  Share,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number;
  sender: string;
  content: string;
  time: string;
  isOwn: boolean;
  avatar?: string;
  isSystem?: boolean;
};

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState("Team A")
  const [messageInput, setMessageInput] = useState("")
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [inviteLink, setInviteLink] = useState("sch.me/+-PG8ZoYGY5QzZmQ9")
  const [conversations, setConversations] = useState([
    {
      id: "team-a",
      name: "Team A",
      lastMessage: "Sounds great!",
      time: "2:01 AM",
      avatar: "/team-avatar-a.png",
      isGroup: true,
    },
    {
      id: "business",
      name: "Business",
      lastMessage: "Combo file can do!",
      time: "14:21 PM",
      avatar: "/business-avatar.png",
      isGroup: true,
    },
    {
      id: "pongmoro",
      name: "PongMoro",
      lastMessage: "Ohayoung Yeah no",
      time: "20:14 AM",
      avatar: "/pongmoro-avatar.png",
      isGroup: false,
    },
    {
      id: "sheets",
      name: "Sheets",
      lastMessage: "Shikamaru Idea! I",
      time: "12:25 PM",
      avatar: "/sheets-avatar.png",
      isGroup: false,
    },
    {
      id: "nanndo",
      name: "Nanndo",
      lastMessage: "Hachikawa: だそうです",
      time: "8:52 AM",
      avatar: "/nanndo-avatar.png",
      isGroup: false,
    },
    {
      id: "amewa",
      name: "Amewa",
      lastMessage: "Usagi: Qua sera sera",
      time: "0:01 AM",
      avatar: "/amewa-avatar.png",
      isGroup: false,
    },
  ])

  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({
    "Team A": [
      {
        id: 1,
        sender: "Team Member",
        content: "Hey everyone! How's the project coming along?",
        time: "2:00 PM",
        isOwn: false,
        avatar: "/team-member-message.png",
      },
      {
        id: 2,
        sender: "You",
        content: "Going well! Just finished the UI mockups.",
        time: "2:01 PM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Another Member",
        content: "Great work! Can you share them in the project folder?",
        time: "2:02 PM",
        isOwn: false,
        avatar: "/another-member.png",
      },
    ],
  })

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    const newMessage = {
      id: Date.now(),
      sender: "You",
      content: messageInput,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
    }

    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMessage],
    }))

    setMessageInput("")
  }

  const handleCreateGroup = () => {
    if (!groupName.trim()) return

    const newGroupId = `group-${Date.now()}`
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    // Add new group to conversations list at the top
    const newGroup = {
      id: newGroupId,
      name: groupName,
      lastMessage: "You were added in...",
      time: currentTime,
      avatar: "/anime-character-avatar.png",
      isGroup: true,
    }

    setConversations((prev) => [newGroup, ...prev])

    // Create initial system message for the new group
    const systemMessage = {
      id: 1,
      sender: "System",
      content: "You were added into the group",
      time: currentTime,
      isOwn: false,
      isSystem: true,
    }

    setMessages((prev) => ({
      ...prev,
      [groupName]: [systemMessage],
    }))

    // Select the new group and close modal
    setSelectedChat(groupName)
    setShowCreateGroupModal(false)
    setGroupName("")
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    // You could add a toast notification here
  }

  const handleShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join my ScheduLink group",
        text: `Join "${groupName}" on ScheduLink`,
        url: inviteLink,
      })
    }
  }

  const currentMessages = messages[selectedChat] || []
  const isNewGroup = selectedChat !== "Team A" && conversations.find((c) => c.name === selectedChat)?.isGroup

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
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100 text-gray-900">
              <MessageSquare className="w-5 h-5" />
              Message
            </Button>
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

        {/* Messages Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Messages</h2>

          <div className="flex gap-6 h-[600px]">
            {/* Conversations List */}
            <div className="w-80 bg-white rounded-lg border border-gray-200 flex flex-col">
              {/* New Group Button */}
              <div className="p-4 border-b border-gray-200">
                <Button
                  className="w-full justify-start gap-3 bg-gray-100 text-gray-700 hover:bg-gray-200"
                  onClick={() => setShowCreateGroupModal(true)}
                >
                  <Users className="w-5 h-5" />
                  New Group
                </Button>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                      selectedChat === conversation.name ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedChat(conversation.name)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {conversation.isGroup && <Users className="w-4 h-4 text-gray-400" />}
                          <span className="font-medium text-gray-800 truncate">{conversation.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      <span className="text-xs text-gray-400">{conversation.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-white rounded-lg border border-gray-200 flex flex-col relative overflow-hidden">
              {/* Background for new groups */}
              {isNewGroup && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/planet-background.png"
                    alt="Planet background"
                    className="w-full h-full object-cover opacity-60"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover', opacity: 0.6 }}
                  />
                </div>
              )}

              {/* Chat Header */}
              <div className="relative z-10 p-4 border-b border-gray-200 flex items-center justify-between bg-white/90 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-800">{selectedChat}</h3>
                  <span className="text-sm text-gray-500">{isNewGroup ? "1 members" : "5 members"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Users className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="relative z-10 flex-1 p-4 overflow-y-auto space-y-4">
                {isNewGroup && currentMessages.length === 1 && (
                  <div className="flex justify-center mb-8">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/images/anime-character-avatar.png" />
                      <AvatarFallback>GR</AvatarFallback>
                    </Avatar>
                  </div>
                )}

                {currentMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-center"}`}>
                    {message.isSystem ? (
                      <div className="bg-[#9AA2C5] text-white px-4 py-2 rounded-full text-sm">{message.content}</div>
                    ) : (
                      <div className={`flex gap-3 max-w-xs ${message.isOwn ? "flex-row-reverse" : ""}`}>
                        {!message.isOwn && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={message.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`px-4 py-2 rounded-lg ${
                            message.isOwn ? "bg-[#9AA2C5] text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="relative z-10 p-4 border-t border-gray-200 bg-white/90 backdrop-blur-sm">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <div className="flex-1 relative">
                    <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Write a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="pl-10 h-12 bg-gray-50 border-gray-200"
                    />
                  </div>
                  <Button type="submit" size="sm" className="h-12 px-4 bg-[#9AA2C5] hover:bg-[#8A94B8]">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Group Modal */}
        {showCreateGroupModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create New Group</h2>

              {/* Group Photo Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#9AA2C5] rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Group Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Group name</label>
                <Input
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter group name"
                  className="w-full h-12 bg-gray-50 border-gray-200"
                />
              </div>

              {/* Invite Links Section */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">Invite Links</h3>
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 font-mono break-all">{inviteLink}</p>
                </div>

                <div className="flex gap-3 mb-4">
                  <Button onClick={handleCopyLink} className="flex-1 bg-[#9AA2C5] hover:bg-[#8A94B8] text-white gap-2">
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </Button>
                  <Button onClick={handleShareLink} className="flex-1 bg-[#9AA2C5] hover:bg-[#8A94B8] text-white gap-2">
                    <Share className="w-4 h-4" />
                    Share Link
                  </Button>
                </div>

                <p className="text-sm text-gray-500">You can generate invite links that expire after they are used</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleCreateGroup}
                  disabled={!groupName.trim()}
                  className="flex-1 bg-[#9AA2C5] hover:bg-[#8A94B8] text-white"
                >
                  Done
                </Button>
                <Button
                  onClick={() => {
                    setShowCreateGroupModal(false)
                    setGroupName("")
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
