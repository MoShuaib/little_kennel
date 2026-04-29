import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Phone } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DogCard } from '@/components/dog-card'
import { AnimatedBackground } from '@/components/animated-background'
import { dogsData } from '@/lib/dogs-data'

export default function Home() {
  const featuredDogs = dogsData.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatedBackground intensity="medium" />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-secondary to-background py-16 sm:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-slide-in-left-3d">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                  Find Your Perfect Companion
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover premium quality dogs and puppies from trusted breeders. Every dog is carefully selected to ensure health, happiness, and a wonderful addition to your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/dogs"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Dogs
                    <ArrowRight size={20} />
                  </Link>
                  <a
                    href="tel:+917533998861"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone size={20} />
                    Call Us
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-slide-in-right-3d">
                <div className="relative w-full h-96 bg-primary/10 rounded-2xl overflow-hidden hover-3d-lift">
                  <Image
                    src="/dogs/dog-1.jpg"
                    alt="Happy dog"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
                  100+ Dogs Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Dogs Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Featured Dogs
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse our handpicked selection of premium puppies and dogs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDogs.map((dog) => (
                <DogCard key={dog.id} {...dog} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/dogs"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Dogs
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Little Kennel?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Health Certified</h3>
                <p className="text-muted-foreground">
                  All our dogs come with complete health certifications and vaccination records
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Expert Breeders</h3>
                <p className="text-muted-foreground">
                  Carefully selected puppies from experienced and reputable breeders
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Lifetime Support</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and guidance throughout your dog&apos;s life
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Meet Your Perfect Dog?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get in touch with us today. Our team is ready to help you find the perfect companion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href="tel:+917533998861"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Call: +91 7533998861
              </a>
              <a
                href="https://wa.me/917533998861"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors border border-primary-foreground/30"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
