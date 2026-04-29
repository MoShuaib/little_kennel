export interface Dog {
  id: string
  name: string
  breed: string
  age: string
  price: string
  image: string
  description: string
  phone: string
}

export const dogsData: Dog[] = [
  {
    id: '1',
    name: 'Golden Delight',
    breed: 'Golden Retriever',
    age: '8 months',
    price: '₹50,000',
    image: '/dogs/dog-1.jpg',
    description: 'Beautiful golden retriever with excellent temperament',
    phone: '+917533998861',
  },
  {
    id: '2',
    name: 'Buddy',
    breed: 'Labrador Retriever',
    age: '10 months',
    price: '₹45,000',
    image: '/dogs/dog-2.jpg',
    description: 'Friendly and energetic labrador with great pedigree',
    phone: '+917533998861',
  },
  {
    id: '3',
    name: 'Luna',
    breed: 'German Shepherd',
    age: '12 months',
    price: '₹55,000',
    image: '/dogs/dog-3.jpg',
    description: 'Intelligent and loyal German Shepherd, perfectly trained',
    phone: '+917533998861',
  },
  {
    id: '4',
    name: 'Charlie',
    breed: 'Golden Retriever',
    age: '6 months',
    price: '₹48,000',
    image: '/dogs/dog-4.jpg',
    description: 'Playful golden retriever puppy ready for a loving home',
    phone: '+917533998861',
  },
  {
    id: '5',
    name: 'Max',
    breed: 'Labrador Retriever',
    age: '9 months',
    price: '₹46,000',
    image: '/dogs/dog-5.jpg',
    description: 'Energetic and friendly labrador with excellent health records',
    phone: '+917533998861',
  },
  {
    id: '6',
    name: 'Bella',
    breed: 'German Shepherd',
    age: '11 months',
    price: '₹52,000',
    image: '/dogs/dog-6.jpg',
    description: 'Beautiful female German Shepherd with champion bloodline',
    phone: '+917533998861',
  },
]
