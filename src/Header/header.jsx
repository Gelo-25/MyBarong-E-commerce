import { useEffect, useState } from 'react'
import '../App.css'
import Home from '../Home/home.jsx'
import Features from '../Home/features.jsx'
import Collection from '../Home/collection.jsx'
import WeddingSection from '../Home/wedding-section.jsx'
import NewArrival from '../Home/NewArrival.jsx'
import Shop from '../Shop/shop.jsx'
import Categories from '../Categories/categories.jsx'
import About from '../About/about.jsx'
import Contact from '../Contact/contact.jsx'
import ProductDetail from '../ProductDetail/ProductDetail'
import Cart from '../Cart/cart'
import SaveItems from '../SaveItems/saveItems'
import Profile from '../Profile/Profile'
import OrderHistory from '../OrderHistory/OrderHistory'
import { ShopProvider } from '../context/ShopContext'
import { useShop } from '../context/useShop'

function HeaderInner() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [hideAnnouncement, setHideAnnouncement] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [activeProductSlug, setActiveProductSlug] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount, wishlist } = useShop()

  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.replace('#', '')
      if (raw.startsWith('product/')) {
        setActivePage('product')
        setActiveProductSlug(raw.replace('product/', ''))
        return
      }
      const validPages = [
        'home',
        'shop',
        'categories',
        'about',
        'contact',
        'cart',
        'save-items',
        'profile',
        'order-history',
      ]
      setActivePage(validPages.includes(raw) ? raw : 'home')
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setNavScrolled(currentScrollY > 0)

      if (currentScrollY === 0) {
        setHideAnnouncement(false)
      } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setHideAnnouncement(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='topbar'>
        <div className={`announcement-bar ${hideAnnouncement ? 'hidden' : ''}`}>
          <div className='announcement-track'>
            <span>Hand-embroidered in the Philippines</span>
            <span>Made-to-order tailoring available</span>
            <span>Complimentary shipping over ₱5,000</span>
            <span>Made-to-order tailoring available</span>
          </div>
        </div>

        <header className={navScrolled ? 'scrolled' : ''}>
          <nav className='navbar'>
            <ul className='nav-left'>
              <li><a href='#home' onClick={() => setActivePage('home')}>HOME</a></li>
              <li><a href='#shop' onClick={() => setActivePage('shop')}>SHOP</a></li>
              <li><a href='#categories' onClick={() => setActivePage('categories')}>CATEGORIES</a></li>
              <li><a href='#about' onClick={() => setActivePage('about')}>ABOUT</a></li>
              <li><a href='#contact' onClick={() => setActivePage('contact')}>CONTACT</a></li>
            </ul>

            <div className='logo'>
              <a href='#'>
                <span className='black'>My</span><span className='gold'>Barong</span>
              </a>
            </div>

             <div className='nav-icons'>
               <button type='button' className={`search-toggle ${searchOpen ? 'active' : ''}`} onClick={() => setSearchOpen((open) => !open)}>
                 <i className='ri-search-line'></i>
               </button>
               <a href='#save-items' onClick={() => setActivePage('save-items')} className='nav-icon-link'>
                 <i className='ri-heart-3-line'></i>
                 {wishlist.length > 0 && <span className='nav-badge'>{wishlist.length}</span>}
               </a>
               <a href='#profile' onClick={() => setActivePage('profile')} className='nav-icon-link'>
                 <i className='ri-user-3-line'></i>
               </a>
               <a href='#cart' onClick={() => setActivePage('cart')} className='nav-icon-link'>
                 <i className='ri-shopping-bag-line'></i>
                 {cartCount > 0 && <span className='nav-badge'>{cartCount}</span>}
               </a>
             </div>
          </nav>

          <div className={`search-panel ${searchOpen ? 'active' : ''}`}>
            <div className='search-panel-inner'>
              <input
                type='search'
                className='header-search-input'
                placeholder="Search the collection — try 'wedding', 'polo', 'cufflinks'..."
                aria-label='Search the collection'
              />
              <button type='button' className='search-close' onClick={() => setSearchOpen(false)}>
                CLOSE
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className='content-wrapper'>
        {activePage === 'product' ? (
          <ProductDetail key={activeProductSlug} slug={activeProductSlug} />
        ) : activePage === 'shop' ? (
          <Shop />
        ) : activePage === 'categories' ? (
          <Categories />
        ) : activePage === 'about' ? (
          <About />
        ) : activePage === 'contact' ? (
          <Contact />
        ) : activePage === 'cart' ? (
          <Cart />
        ) : activePage === 'save-items' ? (
          <SaveItems />
        ) : activePage === 'profile' ? (
          <Profile />
        ) : activePage === 'order-history' ? (
          <OrderHistory />
        ) : (
          <>
            <div className='bg-brown'>
              <Home />
            </div>

            <div className='bg-white'>
              <Features />
            </div>
       
            <Collection />

            <div className='bg-white'>
              <WeddingSection />
            </div>

            <NewArrival />
          </>
        )}
      </div>
    </>
  )
}

function Header() {
  return (
    <ShopProvider>
      <HeaderInner />
    </ShopProvider>
  )
}

export default Header

