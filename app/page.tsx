

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { NavigationWithUnderline } from "@/components/navigation-with-underline"

export default function HomePage() {

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
          <Link href="/login">
            <Button variant="outline" className="border-[#9AA2C5] text-[#9AA2C5] hover:bg-[#9AA2C5]/10 bg-transparent">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#9AA2C5] hover:bg-[#8A94B8]">Sign Up</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">Welcome to ScheduLink</h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you&apos;re prepping for finals, tackling tough topics, or just need some accountability, we&apos;ve got you
              covered. Organize your study sessions, find groupmates, and stay on track — all in one place.
            </p>

            <Link href="/signup">
              <Button
                size="lg"
                className="bg-[#9AA2C5] hover:bg-[#8A94B8] text-white px-8 py-3 rounded-full text-lg font-medium"
              >
                Try it now!
              </Button>
            </Link>
          </div>

          <div className="relative">
                <Image
                  src="/home_about.png"
                  alt="Study materials and planners with floral designs"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
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
