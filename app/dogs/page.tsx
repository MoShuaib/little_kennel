'use client'

import { useState, useMemo } from 'react'
import { Search, ArrowLeft, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DogCard } from '@/components/dog-card'
import { AnimatedBackground } from '@/components/animated-background'
import { breedsData, Breed, Dog } from '@/lib/dogs-data'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

export default function DogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBreedId, setSelectedBreedId] = useState<string>('all')
  const [view, setView] = useState<'breeds' | 'dogs'>('breeds')
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null)

  // Filter breeds based on search
  const filteredBreeds = useMemo(() => {
    if (!searchTerm) return breedsData
    return breedsData.filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // Filter dogs based on breed selection
  const filteredDogs = useMemo(() => {
    if (selectedBreedId === 'all') return breedsData.flatMap((b) => b.dogs)
    const breed = breedsData.find((b) => b.id === selectedBreedId)
    return breed ? breed.dogs : []
  }, [selectedBreedId])

  const handleBreedClick = (breed: Breed) => {
    setSelectedBreed(breed)
    setSelectedBreedId(breed.id)
    setView('dogs')
  }

  const handleBackToBreeds = () => {
    setView('breeds')
    setSelectedBreed(null)
    setSelectedBreedId('all')
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatedBackground intensity="subtle" />

      <main className="flex-1 relative z-10">
        {/* Page Header */}
        <section className="bg-secondary border-b border-border py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {view === 'dogs' && selectedBreed ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBackToBreeds}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Breeds</span>
                </button>
              </div>
            ) : null}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">
              {view === 'dogs' && selectedBreed ? selectedBreed.name : 'Browse Our Dogs'}
            </h1>
            <p className="text-muted-foreground animate-fade-in-up delay-200">
              {view === 'dogs' && selectedBreed
                ? `${selectedBreed.dogs.length} dogs available`
                : 'Find your perfect companion from our curated collection'}
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder={view === 'dogs' ? "Search dogs by name..." : "Search breeds..."}
                className="pl-10 border-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              {view === 'dogs'
                ? `Showing ${filteredDogs.length} dogs`
                : `Showing ${filteredBreeds.length} breeds`}
            </div>
          </div>
        </section>

        {/* Breeds Grid */}
        {view === 'breeds' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredBreeds.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBreeds.map((breed) => (
                    <Card
                      key={breed.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden group"
                      onClick={() => handleBreedClick(breed)}
                    >
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={breed.image}
                          alt={breed.name}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/dogs/dog-1.jpg'
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-medium flex items-center gap-1">
                            View {breed.dogs.length} dogs <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">{breed.name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{breed.description}</p>
                        <div className="mt-3 text-sm font-medium text-primary">
                          {breed.dogs.length} {breed.dogs.length === 1 ? 'dog' : 'dogs'} available
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-2">No breeds found</p>
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
        )}

        {/* Dogs Grid */}
        {view === 'dogs' && (
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
                  <p className="text-lg text-muted-foreground mb-2">No dogs found</p>
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
        )}

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
