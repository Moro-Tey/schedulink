"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/feedback", label: "Feedback" },
]

export function NavigationWithUnderline() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(pathname)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  const updateUnderline = (href: string) => {
    const element = itemRefs.current[href]
    if (element && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      
      setUnderlineStyle({
        left: elementRect.left - navRect.left,
        width: elementRect.width,
      })
    }
  }

  useEffect(() => {
    // Set initial underline position based on current path
    const currentItem = navItems.find(item => item.href === pathname) || navItems[0]
    setActiveItem(currentItem.href)
    updateUnderline(currentItem.href)
  }, [pathname])

  useEffect(() => {
    // Update underline when hovering or when active item changes
    const targetItem = hoveredItem || activeItem
    updateUnderline(targetItem)
  }, [hoveredItem, activeItem])

  return (
    <div ref={navRef} className="relative flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          ref={(el) => {
            itemRefs.current[item.href] = el
          }}
          className="text-gray-700 hover:text-[#9AA2C5] transition-colors py-2 relative"
          onMouseEnter={() => setHoveredItem(item.href)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setActiveItem(item.href)}
        >
          {item.label}
        </Link>
      ))}
      
      {/* Animated underline */}
      <div
        className="absolute bottom-0 h-0.5 bg-[#9AA2C5] transition-all duration-300 ease-out"
        style={{
          left: `${underlineStyle.left}px`,
          width: `${underlineStyle.width}px`,
        }}
      />
    </div>
  )
}
