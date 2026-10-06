import { useState } from 'react'
import '../App.css'
import './orderHistory.css'
import Footer from '../Footer/Footer'
import { useShop } from '../context/useShop'
import { formatPrice } from '../data/products'

const SIZE_LABELS = ['XS', 'S', 'M', 'L', 'XL']

function OrderHistory() {
  const { orders, updateOrderStatus, addReview, getReviewsForProduct } = useShop()
  const [reviewingOrder, setReviewingOrder] = useState(null)
  const [reviewText, setReviewText] = useState('')
  const [reviewRating, setReviewRating] = useState(5)

  const handleWriteReview = (orderId, itemSlug, itemSize) => {
    setReviewingOrder({ orderId, slug: itemSlug, size: itemSize })
    setReviewText('')
    setReviewRating(5)
  }

  const handleSubmitReview = () => {
    if (!reviewingOrder || !reviewText.trim()) return
    addReview(
      reviewingOrder.orderId,
      reviewingOrder.slug,
      reviewingOrder.size,
      reviewRating,
      reviewText.trim()
    )
    setReviewingOrder(null)
    setReviewText('')
    setReviewRating(5)
  }

  return (
    <main className="order-history-page">
      <section className="order-history-hero">
        <span className="order-history-breadcrumb">HOME / PROFILE / ORDER HISTORY</span>
        <h1>Order history</h1>
      </section>

      {orders.length === 0 ? (
        <div className="order-history-empty">
          <p>You have no orders yet.</p>
          <a href="#shop" className="order-history-cta">
            EXPLORE THE COLLECTION
          </a>
        </div>
      ) : (
        <div className="order-history-list">
          {orders.map((order) => (
            <article key={order.id} className="order-history-card">
              <div className="order-history-head">
                <div>
                  <span className="order-history-id">{order.id}</span>
                  <span className="order-history-date">
                    {new Date(order.date).toLocaleDateString('en-PH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="order-history-actions">
                  {order.status === 'processing' && (
                    <button
                      type="button"
                      className="order-history-simulate"
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                    >
                      SIMULATE DELIVERY
                    </button>
                  )}
                  <span className={`order-history-status ${order.status}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="order-history-items">
                {order.items.map((item) => {
                  const itemReviews = getReviewsForProduct(item.slug)
                  const canReview = order.status === 'delivered' && !itemReviews.some(
                    (r) => r.orderId === order.id && r.slug === item.slug && r.size === item.size
                  )
                  const isReviewing = reviewingOrder?.orderId === order.id && reviewingOrder?.slug === item.slug && reviewingOrder?.size === item.size

                  return (
                    <div key={`${item.slug}-${item.size}`} className="order-history-item">
                      <img src={item.image} alt={item.name} />
                      <div className="order-history-item-details">
                        <h3>{item.name}</h3>
                        <span>
                          {SIZE_LABELS.includes(item.size) ? `Size: ${item.size}` : item.size || 'Standard'}
                        </span>
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <span className="order-history-item-price">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <div className="order-history-item-action">
                        {canReview && !isReviewing && (
                          <button
                            type="button"
                            className="order-history-review-btn"
                            onClick={() => handleWriteReview(order.id, item.slug, item.size)}
                          >
                            WRITE REVIEW
                          </button>
                        )}
                        {isReviewing && (
                          <div className="order-history-review-form">
                            <div className="order-history-stars-input">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  className={`order-history-star ${star <= reviewRating ? 'active' : ''}`}
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
                            <div className="order-history-review-actions">
                              <button type="button" onClick={() => setReviewingOrder(null)}>Cancel</button>
                              <button type="button" onClick={handleSubmitReview} disabled={!reviewText.trim()}>
                                Submit
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="order-history-foot">
                <span>Total: {formatPrice(order.total)}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      <Footer />
    </main>
  )
}

export default OrderHistory
