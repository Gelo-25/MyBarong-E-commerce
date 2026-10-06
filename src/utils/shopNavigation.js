const PENDING_PRODUCT_KEY = 'mybarong:pending-product'

export function navigateToProduct(slug) {
  if (typeof window === 'undefined') return
  window.location.hash = `#product/${slug}`
}

export function navigateToShopProduct(slug) {
  if (typeof window === 'undefined') return
  window.location.hash = `#product/${slug}`
}

export function getPendingProductSlug() {
  if (typeof window === 'undefined') return null
  const slug = window.sessionStorage.getItem(PENDING_PRODUCT_KEY)
  if (slug) window.sessionStorage.removeItem(PENDING_PRODUCT_KEY)
  return slug
}
