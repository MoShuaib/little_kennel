export interface Dog {
  id: string
  name: string
  breed: string
  image: string
  description: string
  phone: string
  album?: string[]
}

export const dogsData: Dog[] = [
  {
    id: '1',
    name: 'Golden Delight',
    breed: 'Golden Retriever',
    image: '/dogs/dog-1.jpg',
    description: 'Beautiful golden retriever with excellent temperament',
    phone: '+917042602329',
    album: ['/dogs/dog-1.jpg', '/dogs/goldenretriever.jpg'],
  },
  {
    id: '2',
    name: 'Buddy',
    breed: 'Labrador Retriever',
    image: '/dogs/dog-2.jpg',
    description: 'Friendly and energetic labrador with great pedigree',
    phone: '+917042602329',
    album: ['/dogs/dog-2.jpg', '/dogs/labaradar.jpg'],
  },
  {
    id: '3',
    name: 'Luna',
    breed: 'German Shepherd',
    image: '/dogs/dog-3.jpg',
    description: 'Intelligent and loyal German Shepherd, perfectly trained',
    phone: '+917042602329',
    album: ['/dogs/dog-3.jpg', '/dogs/germanshephard.jpg'],
  },
  
 
  
  {
    id: '7',
    name: 'Blue eyes Wooly coat Female Husky',
    breed: 'Husky',
    image: '/dogs/BlueeyesWoolycoatFemaleHusky.jpeg',
    description: 'Beautiful female German Shepherd with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/BlueeyesWoolycoatFemaleHusky.jpeg',
      '/dogs/Blue eyes Wooly coat Female Husky2.jpeg',
      '/dogs/Blue eyes Wooly coat Female Husky3.jpeg',
      '/dogs/Blue eyes Wooly coat Female Husky4.jpeg',
      '/dogs/Blue eyes Wooly coat Female Husky5.jpeg',
      '/dogs/Blue eyes Wooly coat Female Husky6.jpeg'
    ],
  },
  {
    id: '8',
    name: 'Saint Bernard',
    breed: 'Saint Bernard',
    image: '/dogs/SaintBernard.jpeg',
    description: 'Beautiful Saint Bernard with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/SaintBernard.jpeg',
      '/dogs/Saint Bernard2.jpeg',
      '/dogs/SaintBernard3.jpeg',
      '/dogs/Saint Bernard4.jpeg'
    ],
  },
  {
    id: '9',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    image: '/dogs/SHIHTZU.jpeg',
    description: 'Beautiful Shih Tzu with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/SHIHTZU.jpeg',
      '/dogs/SHIH TZU2.jpeg',
      '/dogs/shihtzu.jpg'
    ],
  },
  {
    id: '10',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    image: '/dogs/Maltipoo.jpeg',
    description: 'Beautiful Maltipoo with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/Maltipoo.jpeg',
      '/dogs/Maltipoo2.jpeg',
      '/dogs/Maltipoo3.jpeg',
      '/dogs/Maltipoo4.jpeg',
      '/dogs/Maltipoo5.jpeg'
    ],
  },
  {
    id: '11',
    name: 'Saint Bernard',
    breed: 'Saint Bernard',
    image: '/dogs/SaintBernard01.jpeg',
    description: 'Beautiful Saint Bernard with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/SaintBernard01.jpeg',
      '/dogs/SaintBernard02.jpeg',
      '/dogs/SaintBernard03.jpeg',
      '/dogs/SaintBernard04.jpeg',
      '/dogs/SaintBernard05.jpeg',
      '/dogs/SaintBernard06.jpeg',
    ],
  },
  {
    id: '12',
    name: 'Siberian Husky',
    breed: 'Siberian Husky',
    image: '/dogs/SiberianHusky01.jpeg',
    description: 'Beautiful Siberian Husky with champion bloodline',
    phone: '+917042602329',
    album: [
      '/dogs/SiberianHusky01.jpeg',
      '/dogs/SiberianHusky02.jpeg',
      '/dogs/SiberianHusky03.jpeg',
      '/dogs/SiberianHusky04.jpeg',
    ],
  },
]