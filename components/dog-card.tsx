'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface DogCardProps {
  id: string
  name: string
  breed: string
  age: string
  price: string
  image: string
  phone: string
}

export function DogCard({ id, name, breed, age, price, image, phone }: DogCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover-3d-lift animate-float-3d">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-muted overflow-hidden shrink-0">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 transition-all"
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            className={`transition-colors ${
              isFavorite ? 'fill-accent stroke-accent' : 'stroke-foreground'
            }`}
          />
        </button>
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

        {/* Details */}
        <div className="space-y-1 mb-4 grow">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Age</span>
            <span className="font-medium text-foreground">{age}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Price</span>
            <span className="font-bold text-primary">{price}</span>
          </div>
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
    </Card>
  )
}
