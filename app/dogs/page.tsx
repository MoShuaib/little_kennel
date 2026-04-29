'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DogCard } from '@/components/dog-card'
import { AnimatedBackground } from '@/components/animated-background'
import { dogsData, Dog } from '@/lib/dogs-data'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function DogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBreed, setSelectedBreed] = useState<string>('all')

  // Get unique breeds
  const breeds = ['all', ...new Set(dogsData.map((dog) => dog.breed))]

  // Filter dogs based on search and breed
  const filteredDogs = useMemo(() => {
    return dogsData.filter((dog) => {
      const matchesSearch =
        dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dog.breed.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesBreed = selectedBreed === 'all' || dog.breed === selectedBreed

      return matchesSearch && matchesBreed
    })
  }, [searchTerm, selectedBreed])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatedBackground intensity="subtle" />

      <main className="flex-1 relative z-10">
        {/* Page Header */}
        <section className="bg-secondary border-b border-border py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">
              Browse Our Dogs
            </h1>
            <p className="text-muted-foreground animate-fade-in-up delay-200">
              Find your perfect companion from our curated collection
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute  left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search by name or breed..." 
                  className="pl-10 border-black "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Breed Filter */}
              <Select value={selectedBreed} onValueChange={setSelectedBreed}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by breed" />
                </SelectTrigger>
                <SelectContent>
                  {breeds.map((breed) => (
                    <SelectItem key={breed} value={breed}>
                      {breed === 'all' ? 'All Breeds' : breed}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredDogs.length} of {dogsData.length} dogs
            </div>
          </div>
        </section>

        {/* Dogs Grid */}
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
                <p className="text-lg text-muted-foreground mb-2">No dogs found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedBreed('all')
                  }}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact us directly. We have more dogs available and can help match you with your perfect companion.
            </p>
            <a
              href="tel:+917533998861"
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
