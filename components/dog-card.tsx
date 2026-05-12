'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DogCardProps {
  id: string
  name: string
  breed: string
  image: string
  phone: string
  album?: string[]
}

export function DogCard({ id, name, breed, image, phone, album = [image] }: DogCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAlbumOpen, setIsAlbumOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos = album.length > 0 ? album : [image]
  const currentPhoto = photos[currentIndex] ?? image

  function openAlbum() {
    setCurrentIndex(0)
    setIsAlbumOpen(true)
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover-3d-lift animate-float-3d">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-muted overflow-hidden shrink-0">
        <button
          type="button"
          onClick={openAlbum}
          className="absolute inset-0 z-10 cursor-zoom-in bg-transparent"
          aria-label={`Open ${name} photo album`}
        />

        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Favorite Button */}
        {/* <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white rounded-full p-2 transition-all"
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            className={`transition-colors ${isFavorite ? 'fill-accent stroke-accent' : 'stroke-foreground'
              }`}
          />
        </button> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>

        {/* Breed Badge */}
        <div className="mb-3">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {breed}
          </span>
        </div>

        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>

      <Dialog open={isAlbumOpen} onOpenChange={setIsAlbumOpen}>
        <DialogContent className="max-w-3xl sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{name}&apos;s Photo Album</DialogTitle>
            <DialogDescription>
              Explore more images from the {breed} collection.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="relative aspect-4/3 max-h-[55vh] w-full overflow-hidden rounded-3xl bg-slate-950/5 shadow-sm">
              <Image
                src={currentPhoto}
                alt={`${name} photo ${currentIndex + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} of {photos.length}
              </span>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, photos.length - 1))}
                disabled={currentIndex === photos.length - 1}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {photos.map((src, index) => (
                <button
                  key={`${id}-thumb-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    index === currentIndex
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={src}
                      alt={`${name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
