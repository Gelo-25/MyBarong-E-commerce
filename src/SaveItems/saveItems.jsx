import { useMemo } from 'react'
import '../App.css'
import './saveItems.css'
import Footer from '../Footer/Footer'
import { useShop } from '../context/useShop'
import { formatPrice } from '../data/products'

function SaveItems() {
  const { wishlist, toggleWishlist } = useShop()

  const sortedWishlist = useMemo(
    () => [...wishlist].sort((a, b) => a.name.localeCompare(b.name)),
    [wishlist]
  )

  return (
    <main className="save-items-page">
      <section className="save-items-hero">
        <span className="save-items-breadcrumb">HOME / SAVE ITEMS</span>
        <h1>Saved items</h1>
        <p className="save-items-count">{wishlist.length} pieces</p>
      </section>

      {wishlist.length === 0 ? (
        <div className="save-items-empty">
          <p>You have no saved items yet.</p>
          <a href="#shop" className="save-items-cta">
            EXPLORE THE COLLECTION
          </a>
        </div>
      ) : (
        <div className="save-items-grid">
          {sortedWishlist.map((item) => (
            <article key={item.slug} className="save-item-card">
              <div className="save-item-image">
                <img src={item.image} alt={item.name} />
                <span className="save-item-category">
                  {item.category}
                </span>
              </div>
              <div className="save-item-info">
                <h3>{item.name}</h3>
                <span className="save-item-price">
                  {formatPrice(item.price)}
                </span>
                <div className="save-item-actions">
                  <a
                    href={`#product/${item.slug}`}
                    className="save-item-view"
                  >
                    VIEW PIECE
                  </a>
                  <button
                    type="button"
                    className="save-item-remove"
                    onClick={() => toggleWishlist({ slug: item.slug, ...item })}
                    aria-label="Remove from saved items"
                  >
                    ♥
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <Footer />
    </main>
  )
}

export default SaveItems
