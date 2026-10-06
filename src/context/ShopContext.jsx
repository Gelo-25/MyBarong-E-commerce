import { useEffect, useState } from 'react'
import { ShopContext } from './shopState'

const CART_KEY = 'mybarong:cart'
const WISHLIST_KEY = 'mybarong:wishlist'
const ORDERS_KEY = 'mybarong:orders'
const REVIEWS_KEY = 'mybarong:reviews'
const PROFILE_KEY = 'mybarong:profile'

function loadFromStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage(key, value) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or unavailable
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => loadFromStorage(CART_KEY, []))
  const [wishlist, setWishlist] = useState(() => loadFromStorage(WISHLIST_KEY, []))
  const [orders, setOrders] = useState(() => loadFromStorage(ORDERS_KEY, []))
  const [reviews, setReviews] = useState(() => loadFromStorage(REVIEWS_KEY, []))
  const [profile, setProfile] = useState(() =>
    loadFromStorage(PROFILE_KEY, {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      contact: '',
      password: '',
    })
  )

  useEffect(() => {
    saveToStorage(PROFILE_KEY, profile)
  }, [profile])

  useEffect(() => {
    saveToStorage(CART_KEY, cart)
  }, [cart])

  useEffect(() => {
    saveToStorage(WISHLIST_KEY, wishlist)
  }, [wishlist])

  useEffect(() => {
    saveToStorage(ORDERS_KEY, orders)
  }, [orders])

  useEffect(() => {
    saveToStorage(REVIEWS_KEY, reviews)
  }, [reviews])

  const addToCart = (product, quantity = 1, size = '') => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.slug === product.slug && item.size === size
      )
      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          quantity,
        },
      ]
    })
  }

  const removeFromCart = (slug, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.slug === slug && item.size === size))
    )
  }

  const updateCartQuantity = (slug, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(slug, size)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.slug === slug && item.size === size ? { ...item, quantity } : item
      )
    )
  }

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.slug === product.slug)
      if (exists) {
        return prev.filter((item) => item.slug !== product.slug)
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
        },
      ]
    })
  }

  const isInWishlist = (slug) => wishlist.some((item) => item.slug === slug)

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const checkout = () => {
    if (cart.length === 0) return null
    const order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      status: 'processing',
      items: [...cart],
      total: cartTotal,
    }
    setOrders((prev) => [order, ...prev])
    setCart([])
    return order.id
  }

  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    )
  }

  const addReview = (orderId, itemSlug, itemSize, rating, text) => {
    const review = {
      id: `REV-${Date.now()}`,
      orderId,
      slug: itemSlug,
      size: itemSize,
      rating,
      text,
      date: new Date().toISOString(),
      name: 'YOU',
      location: 'MANILA',
    }
    setReviews((prev) => [review, ...prev])
    return review
  }

  const getReviewsForProduct = (slug) =>
    reviews.filter((review) => review.slug === slug)

  const hasReviewed = (orderId, slug) =>
    reviews.some((review) => review.orderId === orderId && review.sug === slug)

  const getOrderReviewStatus = (orderId, slug) => {
    const order = orders.find((o) => o.id === orderId)
    if (!order) return false
    const item = order.items.find((i) => i.slug === slug)
    if (!item) return false
    return order.status === 'delivered' && !reviews.some((r) => r.orderId === orderId && r.slug === slug)
  }

  const updateProfile = (fields) => {
    setProfile((prev) => ({ ...prev, ...fields }))
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartTotal,
        cartCount,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        checkout,
        updateOrderStatus,
        reviews,
        addReview,
        getReviewsForProduct,
        hasReviewed,
        getOrderReviewStatus,
        profile,
        updateProfile,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
