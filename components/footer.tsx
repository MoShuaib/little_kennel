import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { AnimatedBackground } from './animated-background'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <AnimatedBackground intensity="subtle" className="opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Little Kennel</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted source for premium quality dogs and puppies. We are committed to connecting you with healthy, well-bred companions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-primary-foreground/80 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/dogs" className="hover:text-primary-foreground/80 transition-colors">
                  Browse Dogs
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary-foreground/80 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+917533998861"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              >
                <Phone size={16} />
                <span>+91 7533998861</span>
              </a>
              <a
                href="https://wa.me/917533998861"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Little Kennel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
