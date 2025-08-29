"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Send } from "lucide-react"
import { NavigationWithUnderline } from "@/components/navigation-with-underline"
import { useState } from "react"

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFeedback("")
    // You could add a success message here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-[#9AA2C5]" />
          <span className="text-xl font-semibold text-gray-800">ScheduLink</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 relative">
          <NavigationWithUnderline />
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-[#9AA2C5] text-[#9AA2C5] hover:bg-[#9AA2C5]/10 bg-transparent">
            Login
          </Button>
          <Button className="bg-[#9AA2C5] hover:bg-[#8A94B8]">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">Feedback</h1>

          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your experience matters to us. Help us make ScheduLink better by sharing your thoughts, suggestions, or any
            issues you&apos;ve encountered.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Textarea
              placeholder="Write comment here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="flex-1 h-[60px] bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 resize-none"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting || !feedback.trim()}
              className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-8 h-[60px] flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-32">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">ScheduLink</h3>
              <p className="text-sm text-gray-600">Helping students connect, study, and succeed.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-800">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-[#9AA2C5]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-[#9AA2C5]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#9AA2C5]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#9AA2C5]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#9AA2C5]">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-800">Follow us on</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-800">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    Study Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#9AA2C5]">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6">
            <p className="text-center text-sm text-gray-500">
              © 2025 ScheduLink. Built for students, by students. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
