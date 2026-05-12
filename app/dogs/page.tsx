'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DogCard } from '@/components/dog-card'
import { AnimatedBackground } from '@/components/animated-background'
import { dogsData } from '@/lib/dogs-data'
import { Input } from '@/components/ui/input'

export default function DogsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDogs = useMemo(() => {
    if (!searchTerm) return dogsData

    const term = searchTerm.toLowerCase()
    return dogsData.filter(
      (dog) =>
        dog.name.toLowerCase().includes(term) ||
        dog.breed.toLowerCase().includes(term)
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatedBackground intensity="subtle" />

      <main className="flex-1 relative z-10">
        <section className="bg-secondary border-b border-border py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">
              Browse Our Dogs
            </h1>
            <p className="text-muted-foreground animate-fade-in-up delay-200">
              Find your perfect companion from our curated collection.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search dogs by name or breed..."
                className="pl-10 border-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredDogs.length} dogs
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredDogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDogs.map((dog) => (
                  <DogCard key={dog.id} {...dog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-2">No dogs found.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact us directly. We have more dogs available and can help match you with your perfect companion.
            </p>
            <a
              href="tel:+917042602329"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

