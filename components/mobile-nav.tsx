"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium text-gray-700 hover:text-[#9AA2C5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-gray-700 hover:text-[#9AA2C5] transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/product"
            className="text-lg font-medium text-gray-700 hover:text-[#9AA2C5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/feedback"
            className="text-lg font-medium text-gray-700 hover:text-[#9AA2C5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Feedback
          </Link>
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" className="border-[#9AA2C5] text-[#9AA2C5] hover:bg-[#9AA2C5]/10 bg-transparent">
              Login
            </Button>
            <Button className="bg-[#9AA2C5] hover:bg-[#8A94B8]">Sign Up</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
