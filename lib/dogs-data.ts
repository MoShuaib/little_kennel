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

export interface Breed {
  id: string
  name: string
  description: string
  image: string
  dogs: Dog[]
}

export const breedsData: Breed[] = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    description:
      'Friendly, intelligent, and devoted. Golden Retrievers make excellent family pets and service dogs.',
    image:'/dogs/goldenretriever.jpg', 
    dogs: [
      {
        id: '1',
        name: 'Golden Delight',
        breed: 'Golden Retriever',
        age: '8 months',
        price: '₹50,000',
        image: '/dogs/dog-1.jpg',
        description:
          'Beautiful golden retriever with excellent temperament',
        phone: '+917533998861',
      },
      {
        id: '4',
        name: 'Charlie',
        breed: 'Golden Retriever',
        age: '6 months',
        price: '₹48,000',
        image: '/dogs/dog-4.jpg',
        description:
          'Playful golden retriever puppy ready for a loving home',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'labrador-retriever',
    name: 'Labrador Retriever',
    description:
      'Outgoing, active, and gentle. Labradors are one of the most popular family dogs worldwide.',
    image: '/dogs/labaradar.jpg',
    dogs: [
      {
        id: '2',
        name: 'Buddy',
        breed: 'Labrador Retriever',
        age: '10 months',
        price: '₹45,000',
        image: '/dogs/dog-2.jpg',
        description:
          'Friendly and energetic labrador with great pedigree',
        phone: '+917533998861',
      },
      {
        id: '5',
        name: 'Max',
        breed: 'Labrador Retriever',
        age: '9 months',
        price: '₹46,000',
        image: '/dogs/dog-5.jpg',
        description:
          'Energetic and friendly labrador with excellent health records',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'german-shepherd',
    name: 'German Shepherd',
    description:
      'Confident, courageous, and smart. German Shepherds are loyal protectors and versatile working dogs.',
    image: '/dogs/germanshephard.jpg',
    dogs: [
      {
        id: '3',
        name: 'Luna',
        breed: 'German Shepherd',
        age: '12 months',
        price: '₹55,000',
        image: '/dogs/dog-3.jpg',
        description:
          'Intelligent and loyal German Shepherd, perfectly trained',
        phone: '+917533998861',
      },
      {
        id: '6',
        name: 'Bella',
        breed: 'German Shepherd',
        age: '11 months',
        price: '₹52,000',
        image: '/dogs/dog-6.jpg',
        description:
          'Beautiful female German Shepherd with champion bloodline',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'beagle',
    name: 'Beagle',
    description:
      'Curious, friendly, and merry. Beagles are excellent hunting dogs and loving family companions.',
    image: '/dogs/beagle.jpg',
    dogs: [
      {
        id: '7',
        name: 'Cooper',
        breed: 'Beagle',
        age: '7 months',
        price: '₹35,000',
        image: '/dogs/dog-1.jpg',
        description: 'Playful beagle puppy with excellent nose tracking abilities',
        phone: '+917533998861',
      },
      {
        id: '8',
        name: 'Daisy',
        breed: 'Beagle',
        age: '8 months',
        price: '₹38,000',
        image: '/dogs/dog-2.jpg',
        description: 'Sweet and curious beagle, great with children',
        phone: '+917533998861',
      },
      {
        id: '9',
        name: 'Rocky',
        breed: 'Beagle',
        age: '10 months',
        price: '₹36,000',
        image: '/dogs/dog-3.jpg',
        description: 'Energetic beagle with a loving personality',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'bulldog',
    name: 'Bulldog',
    description:
      'Docile, friendly, and courageous. Bulldogs are gentle companions known for their distinctive appearance.',
    image: '/dogs/bulldog.jpg',
    dogs: [
      {
        id: '10',
        name: 'Winston',
        breed: 'Bulldog',
        age: '14 months',
        price: '₹60,000',
        image: '/dogs/dog-4.jpg',
        description: 'Champion bulldog with excellent conformation',
        phone: '+917533998861',
      },
      {
        id: '11',
        name: 'Molly',
        breed: 'Bulldog',
        age: '12 months',
        price: '₹55,000',
        image: '/dogs/dog-5.jpg',
        description: 'Adorable female bulldog with sweet temperament',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'poodle',
    name: 'Poodle',
    description:
      'Intelligent, active, and elegant. Poodles are highly trainable and come in three sizes.',
    image: '/dogs/poodle.jpg',
    dogs: [
      {
        id: '12',
        name: 'Princess',
        breed: 'Poodle',
        age: '9 months',
        price: '₹42,000',
        image: '/dogs/dog-6.jpg',
        description: 'Elegant standard poodle with hypoallergenic coat',
        phone: '+917533998861',
      },
      {
        id: '13',
        name: 'Duke',
        breed: 'Poodle',
        age: '11 months',
        price: '₹45,000',
        image: '/dogs/dog-1.jpg',
        description: 'Smart and athletic poodle, great for agility',
        phone: '+917533998861',
      },
      {
        id: '14',
        name: 'Coco',
        breed: 'Poodle',
        age: '7 months',
        price: '₹40,000',
        image: '/dogs/dog-2.jpg',
        description: 'Cute miniature poodle, perfect family pet',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'siberian-husky',
    name: 'Siberian Husky',
    description:
      'Loyal, mischievous, and energetic. Huskies are beautiful working dogs originally bred for sled pulling.',
    image: '/dogs/siberianhusky.jpg',
    dogs: [
      {
        id: '15',
        name: 'Storm',
        breed: 'Siberian Husky',
        age: '8 months',
        price: '₹65,000',
        image: '/dogs/dog-3.jpg',
        description: 'Stunning blue-eyed husky with thick coat',
        phone: '+917533998861',
      },
      {
        id: '16',
        name: 'Snowball',
        breed: 'Siberian Husky',
        age: '10 months',
        price: '₹62,000',
        image: '/dogs/dog-4.jpg',
        description: 'White husky with playful and friendly nature',
        phone: '+917533998861',
      },
      {
        id: '17',
        name: 'Thor',
        breed: 'Siberian Husky',
        age: '12 months',
        price: '₹68,000',
        image: '/dogs/dog-5.jpg',
        description: 'Strong and athletic husky, great for active families',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'dachshund',
    name: 'Dachshund',
    description:
      'Clever, lively, and courageous. Dachshunds, also known as wiener dogs, are loyal and playful.',
    image: '/dogs/dachshund.jpg',
    dogs: [
      {
        id: '18',
        name: 'Wiener',
        breed: 'Dachshund',
        age: '6 months',
        price: '₹28,000',
        image: '/dogs/dog-6.jpg',
        description: 'Adorable long-haired dachshund puppy',
        phone: '+917533998861',
      },
      {
        id: '19',
        name: 'Sausage',
        breed: 'Dachshund',
        age: '8 months',
        price: '₹30,000',
        image: '/dogs/dog-1.jpg',
        description: 'Smooth coat dachshund with playful personality',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'boxer',
    name: 'Boxer',
    description:
      'Fun-loving, bright, and active. Boxers are excellent family dogs known for their patience with children.',
    image: '/dogs/boxer.jpg',
    dogs: [
      {
        id: '20',
        name: 'Bruno',
        breed: 'Boxer',
        age: '11 months',
        price: '₹48,000',
        image: '/dogs/dog-2.jpg',
        description: 'Muscular boxer with excellent guarding instincts',
        phone: '+917533998861',
      },
      {
        id: '21',
        name: 'Lola',
        breed: 'Boxer',
        age: '9 months',
        price: '₹45,000',
        image: '/dogs/dog-3.jpg',
        description: 'Female boxer with gentle and loving nature',
        phone: '+917533998861',
      },
      {
        id: '22',
        name: 'Jack',
        breed: 'Boxer',
        age: '13 months',
        price: '₹50,000',
        image: '/dogs/dog-4.jpg',
        description: 'Well-trained boxer, great with kids',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    description:
      'Affectionate, playful, and outgoing. Shih Tzus are charming companion dogs that love being around people.',
    image: '/dogs/shihtzu.jpg',
    dogs: [
      {
        id: '23',
        name: 'Mochi',
        breed: 'Shih Tzu',
        age: '7 months',
        price: '₹32,000',
        image: '/dogs/dog-5.jpg',
        description: 'Fluffy shih tzu with adorable face',
        phone: '+917533998861',
      },
      {
        id: '24',
        name: 'Biscuit',
        breed: 'Shih Tzu',
        age: '9 months',
        price: '₹35,000',
        image: '/dogs/dog-6.jpg',
        description: 'Sweet and affectionate shih tzu, perfect lap dog',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'rottweiler',
    name: 'Rottweiler',
    description:
      'Loyal, confident, and loving. Rottweilers are powerful protectors and devoted family members.',
    image: '/dogs/rotweiller.jpg',
    dogs: [
      {
        id: '25',
        name: 'Kaiser',
        breed: 'Rottweiler',
        age: '14 months',
        price: '₹70,000',
        image: '/dogs/dog-1.jpg',
        description: 'Strong and well-trained rottweiler male',
        phone: '+917533998861',
      },
      {
        id: '26',
        name: 'Sheena',
        breed: 'Rottweiler',
        age: '12 months',
        price: '₹65,000',
        image: '/dogs/dog-2.jpg',
        description: 'Female rottweiler with excellent temperament',
        phone: '+917533998861',
      },
    ],
  },

  {
    id: 'great-dane',
    name: 'Great Dane',
    description:
      'Friendly, patient, and dependable. Great Danes are gentle giants known for their imposing size and gentle nature.',
    image: '/dogs/greatdane.jpg',
    dogs: [
      {
        id: '27',
        name: 'Goliath',
        breed: 'Great Dane',
        age: '16 months',
        price: '₹80,000',
        image: '/dogs/dog-3.jpg',
        description: 'Majestic great dane with impressive height',
        phone: '+917533998861',
      },
      {
        id: '28',
        name: 'Princess',
        breed: 'Great Dane',
        age: '14 months',
        price: '₹75,000',
        image: '/dogs/dog-4.jpg',
        description: 'Gentle female great dane, great with children',
        phone: '+917533998861',
      },
    ],
  },
]

// Flat array for backward compatibility
export const dogsData: Dog[] = breedsData.flatMap(
  (breed) => breed.dogs
)