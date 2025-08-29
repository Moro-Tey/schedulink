import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'
import { NavigationWithUnderline } from "@/components/navigation-with-underline"

export default function AboutPage() {
  const newLocal = "container mx-auto px-6 py-16"
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

      {/* About Content */}
      <main className={newLocal}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/notebooks.png"
              alt="Study setup with laptop, tablet, notebooks and handwritten notes"
              width={200}
              height={100}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>ScheduLink was created with one goal:</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make studying together simple, stress-free, and effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We know how frustrating it can be to organize group sessions — endless messages, scheduling conflicts, and last-minute changes. That's why we built a tool to help students coordinate, communicate, and stay productive.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">
                With ScheduLink, you can:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA2C5] mt-1">•</span>
                  Create or join study groups for your classes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA2C5] mt-1">•</span>
                  Easily schedule sessions that fit everyone's availability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA2C5] mt-1">•</span>
                  Set reminders, share resources, and stay on the same page
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're preparing for exams, working on group projects, or just want accountability partners — we're here to help you study smarter, not harder.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
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
