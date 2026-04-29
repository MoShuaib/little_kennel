'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-md backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex justify-between items-center h-16"> 
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:animate-rotate-3d transition-all">
              <span className="text-primary-foreground font-bold text-lg">🐕</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Little Kennel
            </span>
          </Link>
 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/dogs" className="text-foreground hover:text-primary transition-colors">
              Dogs
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/dogs"
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Dogs
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="block px-3 py-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
