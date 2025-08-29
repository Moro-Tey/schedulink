"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff, ChevronDown } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.password) return

    setIsSubmitting(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)

    // Redirect to dashboard after successful login
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-6">
      {/* Login Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-10 pr-10 h-12 bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-[#9AA2C5] hover:bg-[#8A94B8] text-white font-medium rounded-lg"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#9AA2C5] hover:text-[#8A94B8] font-medium underline">
              Sign Up
            </Link>{" "}
            here
          </p>
        </form>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500">
        <Link href="/help" className="hover:text-gray-700">
          Help
        </Link>
        <Link href="/legal" className="hover:text-gray-700">
          Legal notice
        </Link>
        <Link href="/privacy" className="hover:text-gray-700">
          Privacy Settings
        </Link>
        <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
          English <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
