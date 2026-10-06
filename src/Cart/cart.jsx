import { useMemo } from 'react'
import '../App.css'
import './cart.css'
import Footer from '../Footer/Footer'
import { useShop } from '../context/useShop'
import { formatPrice } from '../data/products'

const SIZE_LABELS = ['XS', 'S', 'M', 'L', 'XL']

function Cart() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, cartCount, checkout } =
    useShop()

  const isEmpty = cart.length === 0

  const subtotal = useMemo(() => cartTotal, [cartTotal])
  const shipping = subtotal > 5000 ? 0 : 450
  const total = subtotal + shipping

  const handleCheckout = () => {
    const orderId = checkout()
    if (orderId) {
      sessionStorage.setItem('mybarong:profile-tab', 'orders')
      window.location.hash = '#profile'
    }
  }

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <span className="cart-breadcrumb">HOME / CART</span>
        <h1>Your bag</h1>
        {!isEmpty && <p className="cart-count">{cartCount} items</p>}
      </section>

      {isEmpty ? (
        <div className="cart-empty">
          <p>Your bag is empty.</p>
          <a href="#shop" className="cart-cta">
            CONTINUE SHOPPING
          </a>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article key={`${item.slug}-${item.size}`} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <div>
                      <h3>{item.name}</h3>
                      <span className="cart-item-category">
                        {SIZE_LABELS.includes(item.size)
                          ? `Size: ${item.size}`
                          : item.size || 'Standard'}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.slug, item.size)}
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="cart-item-meta">
                    <div className="cart-item-qty">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.slug,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.slug,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Summary</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button type="button" className="cart-checkout" onClick={handleCheckout}>
              CHECKOUT
            </button>
            <a href="#shop" className="cart-continue">
              ← Continue shopping
            </a>
          </aside>
        </div>
      )}

      <Footer />
    </main>
  )
}

export default Cart
