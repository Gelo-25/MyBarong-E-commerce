import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage5 from '../assets/images/product-kids.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'

export const PRODUCTS = [
  {
    slug: 'linen-polo-barong',
    name: 'Linen Polo Barong',
    category: 'Polo Barong',
    image: heroImage7,
    gallery: [heroImage7, heroImage6, heroImage4, heroImage8],
    price: 12800,
    sizes: 5,
    rating: 4.9,
    reviews: 184,
    badge: 'BESTSELLER',
    description:
      'A modern everyday barong cut from breathable European linen with a relaxed polo collar. Hand-finished embroidery traces the placket for a piece that moves from the office to a weekend gathering without missing a beat.',
    materials: ['100% European linen', 'Hand-embroidered placket', 'Mother-of-pearl buttons'],
    features: [
      'Breathes through humid Manila summers',
      'Tailored-relaxed fit, true to size',
      'Machine-washable on gentle cycle',
    ],
    reviewsList: [
      { name: 'ANDRES P.', location: 'MAKATI', rating: 5, text: 'The polo barong is my new uniform. Linen breathes through Manila summers and still looks sharp at the office.' },
      { name: 'SOPHIA M.', location: 'BGC', rating: 5, text: 'Bought one for my husband and ended up ordering a second in another shade. Effortless and elegant.' },
      { name: 'CARLOS D.', location: 'DUMAGUETE', rating: 5, text: 'Quality is incredible for the price. The embroidery detail is subtle but beautiful.' },
      { name: 'JANA T.', location: 'QUEZON CITY', rating: 4, text: 'Runs just a touch large, but the fabric and finish are excellent.' },
    ],
  },
  {
    slug: 'ivory-wedding-barong',
    name: 'Ivory Wedding Barong',
    category: 'Barong Tagalog',
    image: heroImage8,
    gallery: [heroImage8, heroImage4, heroImage6, heroImage7],
    price: 18500,
    sizes: 4,
    rating: 4.9,
    reviews: 96,
    badge: 'LIMITED',
    description:
      'Our signature piña-silk heirloom, reserved for the most important day. Fine calado embroidery frames the silhouette while a soft ivory tone photographs like a dream down the aisle.',
    materials: ['Piña-silk blend', 'Hand-done calado embroidery', 'Covered buttons'],
    features: [
      'Made-to-order with your measurements',
      'Complimentary fit consultation',
      'Arrives in a keepsake garment box',
    ],
    reviewsList: [
      { name: 'JOAQUIN S.', location: 'CEBU', rating: 5, text: 'Wore mine for our wedding in Cebu. Every uncle wanted to know where it came from.' },
      { name: 'MARIANNE L.', location: 'MANILA', rating: 5, text: 'The ivory is the perfect warm tone, not stark white. Heirloom quality through and through.' },
      { name: 'PAOLO V.', rating: 5, text: 'Fitted exactly to my measurements. My bride cried when she saw it.' },
      { name: 'THEO R.', location: 'ILOILO', rating: 5, text: 'Worth every peso. The embroidery is unfathomably detailed up close.' },
    ],
  },
  {
    slug: 'midnight-modern-barong',
    name: 'Midnight Modern Barong',
    category: 'Modern Barong',
    image: heroImage6,
    gallery: [heroImage6, heroImage7, heroImage4, heroImage8],
    price: 9800,
    sizes: 4,
    rating: 4.8,
    reviews: 58,
    badge: 'NEW',
    description:
      'A contemporary take in deep midnight with tonal embroidery. Slim through the body and finished with a hidden placket for a clean, architectural line.',
    materials: ['Premium jusi-cotton', 'Tonal tonal embroidery', 'Hidden placket'],
    features: [
      'Slim, architectural cut',
      'Dresses up or down with ease',
      'Wrinkle-resistant travel fabric',
    ],
    reviewsList: [
      { name: 'GABRIEL C.', location: 'ALABANG', rating: 5, text: 'The midnight tone is so striking in person. Got compliments all evening.' },
      { name: 'NICO B.', location: 'TAGUIG', rating: 4, text: 'Love the modern silhouette. Slightly snug in the shoulders for me.' },
      { name: 'RAFAEL M.', rating: 5, text: 'Finally a barong that feels current. The hidden placket is a great touch.' },
      { name: 'ELLA S.', location: 'PAMPANGA', rating: 5, text: 'Bought it for my fiance and it looked incredible at our engagement shoot.' },
    ],
  },
  {
    slug: 'champagne-linen-barong',
    name: 'Ivory Wedding Barong',
    category: 'Wedding Barong',
    image: heroImage8,
    gallery: [heroImage8, heroImage4, heroImage7, heroImage6],
    price: 4200,
    sizes: 5,
    rating: 4.6,
    reviews: 142,
    badge: '',
    description:
      'An approachable champagne linen barong for the whole entourage. Soft, lightweight, and beautifully embroidered — the easy choice for groomsmen and guests alike.',
    materials: ['Linen-cotton blend', 'Machine embroidery', 'Wooden buttons'],
    features: [
      'Budget-friendly for entourage orders',
      'Lightweight for all-day comfort',
      'Bulk ordering available',
    ],
    reviewsList: [
      { name: 'MARK T.', location: 'BAGUIO', rating: 5, text: 'Ordered 8 for the groomsmen. Consistent sizing and everyone looked great.' },
      { name: 'DYLAN R.', rating: 4, text: 'Great value. The linen is a bit lighter than the premium pieces but lovely.' },
      { name: 'KRISTEN A.', location: 'CAVITE', rating: 5, text: 'Perfect champagne tone that matched our theme exactly.' },
      { name: 'JONAS P.', location: 'LAGUNA', rating: 4, text: 'Comfortable and breathable. Held up well through a long reception.' },
    ],
  },
  {
    slug: 'little-heritage-barong',
    name: 'Little Heritage Barong',
    category: 'Kids Barong',
    image: heroImage5,
    gallery: [heroImage5, heroImage4, heroImage7, heroImage6],
    price: 4800,
    sizes: 3,
    rating: 4.7,
    reviews: 41,
    badge: '',
    description:
      'A miniature heritage barong for the youngest members of the family. Soft, washable fabric with gentle embroidery so they can play and still look the part.',
    materials: ['Soft cotton-jusi', 'Child-safe embroidery', 'Easy snaps'],
    features: [
      'Designed for comfort and play',
      'Machine-washable',
      'Sizes for toddlers to tweens',
    ],
    reviewsList: [
      { name: 'PATRICIA G.', location: 'BACOLOD', rating: 5, text: 'My son looked like a little gentleman at his tito’s wedding. So soft too!' },
      { name: 'LOURDES C.', rating: 5, text: 'Easy snaps made dressing a wiggly toddler painless. Lifesaver.' },
      { name: 'BENJIE M.', location: 'DAVAO', rating: 4, text: 'Adorable and well-made. Sized slightly generous which is perfect for growth.' },
      { name: 'IRIS N.', location: 'BATANGAS', rating: 5, text: 'The embroidery is delicate but sturdy. Survived a full family party.' },
    ],
  },
  {
    slug: 'heritage-pina-barong',
    name: 'Heritage Piña Barong',
    category: 'Barong Tagalog',
    image: heroImage4,
    gallery: [heroImage4, heroImage8, heroImage7, heroImage6],
    price: 16500,
    sizes: 5,
    rating: 4.9,
    reviews: 210,
    badge: '',
    description:
      'The piece that started it all. Pure piña fiber woven in Aklan, embroidered by hand in Lumban, and finished in our Intramuros atelier. A true inheritance.',
    materials: ['100% hand-woven piña', 'Hand-embroidered in Lumban', 'Heritage cut'],
    features: [
      'Pure piña, woven in Aklan',
      'Each piece carries a maker’s mark',
      'Heirloom-grade construction',
    ],
    reviewsList: [
      { name: 'MIGUEL R.', location: 'QUEZON CITY', rating: 5, text: 'Felt like an heirloom the moment I put it on. The embroidery is breathtaking.' },
      { name: 'MARIA L.', location: 'TORONTO', rating: 5, text: 'Shipped to Toronto perfectly packed. Better than the barongs I grew up with.' },
      { name: 'ANTONIO B.', location: 'CEBU', rating: 5, text: 'You can feel the centuries of craft in every thread. Worth the wait.' },
      { name: 'CLAIRE D.', location: 'ILOILO', rating: 5, text: 'Bought one for my father and one for myself. A tradition renewed.' },
    ],
  },
]

export const getProductBySlug = (slug) =>
  PRODUCTS.find((product) => product.slug === slug)

export const formatPrice = (value) => `₱${value.toLocaleString('en-PH')}`

export const renderStars = (rating) => {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(5 - full - (half ? 1 : 0))
}
