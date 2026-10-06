import { useEffect, useMemo, useState } from 'react'
import '../App.css'
import './productDetail.css'
import Footer from '../Footer/Footer'
import { getProductBySlug, formatPrice, renderStars } from '../data/products'
import { useShop } from '../context/useShop'

const SIZE_LABELS = ['XS', 'S', 'M', 'L', 'XL']
const INITIAL_REVIEW_COUNT = 4

function ProductDetail({ slug }) {
  const { addToCart, toggleWishlist, isInWishlist, orders, addReview, getReviewsForProduct } = useShop()
  const product = getProductBySlug(slug)

  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('details')
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [reviewText, setReviewText] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const gallery = useMemo(
    () => (product ? product.gallery || [product.image] : []),
    [product]
  )

  if (!product) {
    return (
      <main className="pd-page pd-missing">
        <h1>Piece not found</h1>
        <p>We couldn't find the barong you were looking for.</p>
        <a className="pd-back-link" href="#shop">← BACK TO SHOP</a>
        <Footer />
      </main>
    )
  }

  const totalRatings = product.reviewsList?.length || 0
  const avgRating =
    totalRatings > 0
      ? product.reviewsList.reduce((sum, review) => sum + review.rating, 0) / totalRatings
      : product.rating

  const userReviews = getReviewsForProduct(slug)
  const allReviews = [...(product.reviewsList || []), ...userReviews]
  const visibleReviews = showAllReviews ? allReviews : allReviews.slice(0, INITIAL_REVIEW_COUNT)
  const hasMoreReviews = allReviews.length > INITIAL_REVIEW_COUNT

  const deliveredOrderItem = orders
    .filter((order) => order.status === 'delivered')
    .flatMap((order) =>
      order.items
        .filter((item) => item.slug === slug)
        .map((item) => ({ ...item, orderId: order.id }))
    )[0]

  const canReview = !!deliveredOrderItem && !reviewSubmitted

  const handleSubmitReview = () => {
    if (!reviewText.trim() || !deliveredOrderItem) return
    addReview(
      deliveredOrderItem.orderId,
      slug,
      deliveredOrderItem.size,
      reviewRating,
      reviewText.trim()
    )
    setReviewSubmitted(true)
    setReviewText('')
    setReviewRating(5)
  }

  return (
    <main className="pd-page">
      <nav className="pd-breadcrumb" aria-label="Breadcrumb">
        <a href="#home" onClick={() => (window.location.hash = '#home')}>HOME</a>
        <span>/</span>
        <a href="#shop" onClick={() => (window.location.hash = '#shop')}>SHOP</a>
        <span>/</span>
        <span className="pd-breadcrumb-current">{product.name}</span>
      </nav>

      <section className="pd-main">
        <div className="pd-gallery">
          <div className="pd-main-image">
            <img src={gallery[activeImage]} alt={product.name} />
            {product.badge && <span className="pd-badge">{product.badge}</span>}
          </div>
          <div className="pd-thumbs">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`pd-thumb ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pd-info">
          <span className="pd-category">{product.category}</span>
          <h1 className="pd-name">{product.name}</h1>

          <div className="pd-rating">
            <span className="pd-stars">{renderStars(avgRating)}</span>
            <span>{avgRating.toFixed(1)}</span>
            <span className="pd-rating-count">· {allReviews.length} reviews</span>
          </div>

          <div className="pd-price">{formatPrice(product.price)}</div>

          <p className="pd-description">{product.description}</p>

          <div className="pd-size">
            <div className="pd-size-head">
              <span className="pd-label">SIZE</span>
              <button type="button" className="pd-size-guide">SIZE GUIDE</button>
            </div>
            <div className="pd-size-row">
              {SIZE_LABELS.slice(0, product.sizes).map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`pd-size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pd-qty-row">
            <div className="pd-qty">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>

            <div className="pd-actions">
              <button
                type="button"
                className="pd-btn-cart"
                onClick={() => addToCart(product, quantity, selectedSize)}
              >
                👜 ADD TO BAG — {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                className={`pd-btn-wishlist ${isInWishlist(product.slug) ? 'active' : ''}`}
                aria-label={isInWishlist(product.slug) ? 'Remove from wishlist' : 'Add to wishlist'}
                onClick={() => toggleWishlist(product)}
              >
                ♥
              </button>
            </div>
            <button
              type="button"
              className="pd-buy-now"
              onClick={() => {
                addToCart(product, quantity, selectedSize)
                window.location.hash = '#cart'
              }}
            >
              BUY NOW
            </button>
          </div>

          {canReview && (
            <div className="pd-review-prompt">
              <p>This item was delivered. Share your experience?</p>
              <button
                type="button"
                className="pd-review-toggle"
                onClick={() => setReviewSubmitted(false)}
              >
                WRITE A REVIEW
              </button>
            </div>
          )}

          {reviewSubmitted && (
            <div className="pd-review-thanks">
              Thank you! Your review has been added.
            </div>
          )}

          {canReview && !reviewSubmitted && (
            <div className="pd-review-form">
              <div className="pd-review-stars-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`pd-review-star ${star <= reviewRating ? 'active' : ''}`}
                    onClick={() => setReviewRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your thoughts..."
                rows={3}
              />
              <button
                type="button"
                className="pd-review-submit"
                onClick={handleSubmitReview}
                disabled={!reviewText.trim()}
              >
                SUBMIT REVIEW
              </button>
            </div>
          )}

          <div className="pd-accordion">
            <div className={`pd-panel ${openPanel === 'details' ? 'open' : ''}`}>
              <button type="button" className="pd-panel-head" onClick={() => setOpenPanel(openPanel === 'details' ? '' : 'details')}>
                DETAILS &amp; MATERIALS
                <span className="pd-panel-icon">{openPanel === 'details' ? '−' : '+'}</span>
              </button>
              {openPanel === 'details' && (
                <ul className="pd-panel-body">
                  {product.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className={`pd-panel ${openPanel === 'features' ? 'open' : ''}`}>
              <button type="button" className="pd-panel-head" onClick={() => setOpenPanel(openPanel === 'features' ? '' : 'features')}>
                WHY YOU'LL LOVE IT
                <span className="pd-panel-icon">{openPanel === 'features' ? '−' : '+'}</span>
              </button>
              {openPanel === 'features' && (
                <ul className="pd-panel-body">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pd-reviews">
        <div className="pd-reviews-head">
          <span className="testimonial-label">IN THEIR WORDS</span>
          <h2>Reviews &amp; feedback</h2>
          <div className="overall-rating">
            <span className="rating-score">{avgRating.toFixed(1)}</span>
            <span className="stars">{'★'.repeat(Math.round(avgRating))}{'☆'.repeat(5 - Math.round(avgRating))}</span>
            <small>{allReviews.length} reviews</small>
          </div>
        </div>

        <div className="pd-reviews-grid">
          {visibleReviews.map((review, index) => (
            <article key={`${review.id || index}-${index}`} className="review-card">
              <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <p>{review.text}</p>
              <span>{review.name}{review.location ? ` — ${review.location}` : ''}</span>
            </article>
          ))}
        </div>

        {hasMoreReviews && (
          <div className="pd-reviews-toggle">
            <button
              type="button"
              className="pd-reviews-toggle-btn"
              onClick={() => setShowAllReviews((prev) => !prev)}
            >
              {showAllReviews ? 'SHOW LESS REVIEWS' : `SEE ALL REVIEWS (${allReviews.length})`}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

export default ProductDetail
