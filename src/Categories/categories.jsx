import { useState } from 'react'
import '../App.css'
import './categories.css'
import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage5 from '../assets/images/product-kids.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'
import heroImage2 from '../assets/images/detail-embroidery.jpg'
import Footer from '../Footer/Footer'
import { navigateToProduct } from '../utils/shopNavigation'


const categories = [
  {
    title: 'Barong Tagalog',
    subtitle: 'Traditional formalwear for every ceremony.',
    image: heroImage4,
    description: 'A heritage-first staple crafted for formal gatherings, weddings, and cultural celebrations.',
    featuredProduct: 'Heritage Piña Barong',
    priceRange: '₱12,800 – ₱18,500',
    highlights: ['Hand-embroidered detailing', 'Piña and jusi fabrics', 'Tailored fit with heritage finishing'],
    productSlug: 'heritage-pina-barong',
  },
  {
    title: 'Wedding Barong',
    subtitle: 'Elegant tailoring for your most memorable day.',
    image: heroImage8,
    description: 'Made for the most photographed moments of your life, from ceremony to reception.',
    featuredProduct: 'Ivory Wedding Barong',
    priceRange: '₱16,250 – ₱20,500',
    highlights: ['Custom fitting support', 'Luxurious linen and embroidery', 'Formal silhouette with a soft drape'],
    productSlug: 'ivory-wedding-barong',
  },
  {
    title: 'Modern Barong',
    subtitle: 'Contemporary silhouettes with heritage details.',
    image: heroImage6,
    description: 'Clean lines and modern structure without losing the craftsmanship that defines the barong.',
    featuredProduct: 'Midnight Modern Barong',
    priceRange: '₱9,800 – ₱12,800',
    highlights: ['Minimalist styling', 'Updated tailoring', 'Perfect for city events and evening wear'],
    productSlug: 'midnight-modern-barong',
  },
  {
    title: 'Polo Barong',
    subtitle: 'Lighter embroidered shirts for casual gatherings.',
    image: heroImage7,
    description: 'A relaxed, breathable option for smart casual occasions and warm-weather events.',
    featuredProduct: 'Linen Polo Barong',
    priceRange: '₱4,200 – ₱7,500',
    highlights: ['Breathable linen weave', 'Easy everyday styling', 'Light embroidery details'],
    productSlug: 'linen-polo-barong',
  },
  {
    title: 'Kids Barong',
    subtitle: 'Miniature heirloom-ready barongs for little ones.',
    image: heroImage5,
    description: 'A charming, miniature version of the classic barong made for celebrations and family portraits.',
    featuredProduct: 'Little Heritage Barong',
    priceRange: '₱3,500 – ₱6,200',
    highlights: ['Child-friendly fit', 'Fine detailing', 'Ideal for debut, baptism, and family events'],
    productSlug: 'little-heritage-barong',
  },
  {
    title: 'Accessories',
    subtitle: 'Cufflinks, accents, and finishing touches.',
    image: heroImage2,
    description: 'The final details that elevate a look with texture, formality, and polish.',
    featuredProduct: 'Mother-of-Pearl Cufflinks',
    priceRange: '₱3,500 – ₱5,000',
    highlights: ['Finishing touches', 'Small-batch artisan pieces', 'Pairs beautifully with all barong styles'],
    productSlug: null,
  },
]

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className="categories-page">
      <div className="categories-hero">
        <div>
          <span className="category-breadcrumb">HOME / CATEGORIES</span>
          <h1>Shop by category</h1>
          <p>Discover our barongs, accessories, and tailoring collections grouped for easy browsing.</p>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((item, index) => (
          <article className="category-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="category-copy">
              <span>{item.title}</span>
              <p>{item.subtitle}</p>
              <button type="button" onClick={() => setSelectedCategory(item)}>
                Browse
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCategory && (
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="product-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedCategory(null)}>
              ×
            </button>
            <img src={selectedCategory.image} alt={selectedCategory.title} />
            <div className="modal-body">
              <span className="modal-pill">{selectedCategory.title}</span>
              <h3>{selectedCategory.featuredProduct}</h3>
              <p>{selectedCategory.description}</p>
              <div className="modal-meta">
                <div>
                  <strong>Price range</strong>
                  <span>{selectedCategory.priceRange}</span>
                </div>
                <div>
                  <strong>Best for</strong>
                  <span>{selectedCategory.subtitle}</span>
                </div>
              </div>
              <ul className="modal-highlights">
                {selectedCategory.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <button className="modal-cta" type="button"
              onClick={() => selectedCategory.productSlug && navigateToProduct(selectedCategory.productSlug)}>
                 Reserve this look
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </section>
  )
}

export default Categories
