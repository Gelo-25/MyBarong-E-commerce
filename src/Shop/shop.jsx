import { useEffect, useMemo, useRef, useState } from 'react'
import '../App.css'
import './shop.css'
import Footer from '../Footer/Footer'
import { getPendingProductSlug, navigateToProduct } from '../utils/shopNavigation'
import { PRODUCTS, formatPrice } from '../data/products'
import { useShop } from '../context/useShop'

const CATEGORIES = [
  'Barong Tagalog',
  'Wedding Barong',
  'Modern Barong',
  'Polo Barong',
  'Kids Barong',
  'Accessories',
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL']

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function Shop() {
  const [search, setSearch] = useState('')
  const [activeCategories, setActiveCategories] = useState([])
  const [activeSizes, setActiveSizes] = useState([])
  const [maxPrice, setMaxPrice] = useState(20000)
  const [sort, setSort] = useState('featured')
  const cardRefs = useRef({})
  const { toggleWishlist, isInWishlist } = useShop()

  useEffect(() => {
    const slug = getPendingProductSlug()
    if (slug && cardRefs.current[slug]) {
      cardRefs.current[slug].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const toggleSize = (size) => {
    setActiveSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    )
  }

  const resetFilters = () => {
    setSearch('')
    setActiveCategories([])
    setActiveSizes([])
    setMaxPrice(20000)
    setSort('featured')
  }

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase()

    const result = PRODUCTS.filter((product) => {
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)

      const matchesCategory =
        activeCategories.length === 0 || activeCategories.includes(product.category)

      const matchesPrice = product.price <= maxPrice

      return matchesSearch && matchesCategory && matchesPrice
    })

    switch (sort) {
      case 'price-asc':
        return [...result].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...result].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...result].sort((a, b) => b.rating - a.rating)
      default:
        return result
    }
  }, [search, activeCategories, maxPrice, sort])

  const handleFavoriteClick = (event, product) => {
    event.stopPropagation()
    toggleWishlist(product)
  }

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div>
          <span className="shop-breadcrumb">HOME / SHOP</span>
          <h1>Shop the collection</h1>
          <p className="shop-subtitle">
            Heritage barongs, wedding pieces, and everyday polos — cut, embroidered,
            and finished by hand in our provincial ateliers.
          </p>
        </div>

        <div className="shop-action-bar">
          <span className="shop-count">{filteredProducts.length} pieces</span>
          <div className="shop-sort-label">
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <div className="filter-block">
            <label className="filter-label" htmlFor="shop-search">Search</label>
            <input
              id="shop-search"
              className="search-input"
              type="search"
              placeholder="Search the collection"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="filter-block">
            <span className="filter-label">Category</span>
            {CATEGORIES.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={activeCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                {category}
              </label>
            ))}
          </div>

          <div className="filter-block">
            <span className="filter-label">Size</span>
            <div className="size-grid">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={activeSizes.includes(size) ? 'active' : ''}
                  onClick={() => toggleSize(size)}
                  aria-pressed={activeSizes.includes(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <span className="filter-label">Max price</span>
            <div className="price-row">
              <span>₱0</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="4000"
              max="20000"
              step="500"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              aria-label="Maximum price"
            />
          </div>

          <button type="button" className="reset-button" onClick={resetFilters}>
            Reset filters
          </button>
        </aside>

        <section className="product-grid" aria-label="Products">
          {filteredProducts.length === 0 ? (
            <p className="shop-count">No pieces match your filters.</p>
          ) : (
            filteredProducts.map((product) => (
              <article
                key={product.slug}
                className="product-card"
                ref={(element) => (cardRefs.current[product.slug] = element)}
                role="button"
                tabIndex={0}
                onClick={() => navigateToProduct(product.slug)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    navigateToProduct(product.slug)
                  }
                }}
              >
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <button
                    type="button"
                    className={`product-favorite ${isInWishlist(product.slug) ? 'active' : ''}`}
                    aria-label={isInWishlist(product.slug) ? 'Remove from favorites' : 'Add to favorites'}
                    onClick={(event) => handleFavoriteClick(event, product)}
                  >
                    ♥
                  </button>
                  <button
                    type="button"
                    className="add-cart"
                  >
                    👜 ADD
                  </button>
                </div>

                <div className="product-card-copy">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <span>{product.sizes} sizes</span>
                    <span className="product-price">{formatPrice(product.price)}</span>
                  </div>
                  <div className="product-rating">
                    <span>⭐ {product.rating.toFixed(1)}</span>
                    <span>{product.reviews} reviews</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </div>

      <Footer />
    </main>
  )
}

export default Shop
