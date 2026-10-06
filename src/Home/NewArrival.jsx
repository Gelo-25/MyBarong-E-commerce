import '../App.css'
import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'
import Footer from '../Footer/Footer'
import { useShop } from '../context/useShop'
import { navigateToProduct } from '../utils/shopNavigation'

const NEW_ARRIVALS = [
  {
    slug: 'linen-polo-barong',
    name: 'Linen Polo Barong',
    category: 'Polo Barong',
    image: heroImage7,
    price: 12800,
    badge: 'BESTSELLER',
  },
  {
    slug: 'ivory-wedding-barong',
    name: 'Ivory Wedding Barong',
    category: 'Barong Tagalog',
    image: heroImage4,
    price: 18500,
    badge: 'LIMITED',
  },
  {
    slug: 'midnight-modern-barong',
    name: 'Midnight Modern Barong',
    category: 'Modern Barong',
    image: heroImage6,
    price: 9800,
    badge: 'NEW',
  },
  {
    slug: 'champagne-linen-barong',
    name: 'Ivory Wedding Barong',
    category: 'Wedding Barong',
    image: heroImage8,
    price: 4200,
    badge: '',
  },
]

function NewArrival() {
  const { toggleWishlist, isInWishlist, addToCart } = useShop()

  const handleFavoriteClick = (event, product) => {
    event.stopPropagation()
    toggleWishlist(product)
  }

  const handleAddCartClick = (event, product) => {
    event.stopPropagation()
    addToCart(product)
  }

 

  return (
    <>
      {/** New this season **/}
      <div className='new-arrivals'>
              <div className='most-loved '>
                  <div className="section-title">
                      <div>
                          <p>Just arrived</p>
                          <h2>New this season.</h2>
                      </div>
                  </div>
          
          
                          <div className='products'>
              
                              {/** PRODUCT1 **/}
                              <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('linen-polo-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('linen-polo-barong') } }}>
                                  <div className='product-image'>
                                      <img src={heroImage7} alt="barong" />
                                      <span className="badge">BESTSELLER</span>
                                      <button
                                        type="button"
                                        className={`wishlist ${isInWishlist('linen-polo-barong') ? 'active' : ''}`}
                                        onClick={(event) => handleFavoriteClick(event, NEW_ARRIVALS[0])}
                                        aria-label="Add to favorites"
                                      >
                                        ♥
                                      </button>
                                      <button
                                        type="button"
                                        className="add-cart"
                                        onClick={(event) => handleAddCartClick(event, NEW_ARRIVALS[0])}
                                      >
                                        👜 ADD
                                      </button>
                                  </div>
          
                                  <div className="product-info">            
                                      <div className="top">
                                          <span className="category">POLO BARONG</span>
                                          <span className="price">₱12,800</span>
                                      </div>
                      
                                      <div className="middle">
                                          <h3>Linen Polo Barong</h3>
                                          <span>5 sizes</span>
                                      </div>
                      
                                      <div className="bottom">⭐ 4.9
                                          <span>184 reviews</span>
                                      </div>
                                  </div>
                              </div>
                      
                              {/** PRODUCT2 **/}
                              <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('ivory-wedding-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('ivory-wedding-barong') } }}>
                                  <div className='product-image'>
                                      <img src={heroImage4} alt="barong" />
                                      <span className="badge">LIMITED</span>
                                      <button
                                        type="button"
                                        className={`wishlist ${isInWishlist('ivory-wedding-barong') ? 'active' : ''}`}
                                        onClick={(event) => handleFavoriteClick(event, NEW_ARRIVALS[1])}
                                        aria-label="Add to favorites"
                                      >
                                        ♥
                                      </button>
                                      <button
                                        type="button"
                                        className="add-cart"
                                        onClick={(event) => handleAddCartClick(event, NEW_ARRIVALS[1])}
                                      >
                                        👜 ADD
                                      </button>
                    
                                  </div>
                                  <div className="product-info">
                      
                                      <div className="top">
                                          <span className="category">BARONG TAGALOG</span>
                                          <span className="price">₱18,500</span>
                                      </div>
                      
                                      <div className="middle">
                                          <h3>Ivory Wedding Barong</h3>
                                          <span>4 sizes</span>        
                                      </div>
                      
                                      <div className="bottom">⭐ 4.9
                                          <span>96 reviews</span>
                                      </div>
                                  </div>
                              </div>
                      
                              {/** PRODUCT3 **/}
                              <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('midnight-modern-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('midnight-modern-barong') } }}>
                                  <div className='product-image'>
                                      <img src={heroImage6} alt="barong" />
                                      <span className="badge">NEW</span>
                                      <button
                                        type="button"
                                        className={`wishlist ${isInWishlist('midnight-modern-barong') ? 'active' : ''}`}
                                        onClick={(event) => handleFavoriteClick(event, NEW_ARRIVALS[2])}
                                        aria-label="Add to favorites"
                                      >
                                        ♥
                                      </button>
                                      <button
                                        type="button"
                                        className="add-cart"
                                        onClick={(event) => handleAddCartClick(event, NEW_ARRIVALS[2])}
                                      >
                                        👜 ADD
                                      </button>
                        
                                  </div>
          
                                  <div className="product-info">
                                      <div className="top">
                                          <span className="category">MODERN BARONG</span>
                                          <span className="price">₱9,800</span>
                                      </div>
                      
                                      <div className="middle">
                                          <h3>Midnight Modern Barong</h3>
                                          <span>4 sizes</span>
                                      </div>
                      
                                      <div className="bottom">⭐ 4.8
                                          <span>58 reviews</span>
                                      </div>
                                  </div>
                              </div>
                      
                              {/** PRODUCT4 **/}
                              <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('champagne-linen-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('champagne-linen-barong') } }}>
                                  <div className='product-image'>
                                      <img src={heroImage8} alt="barong" />
                                      <button
                                        type="button"
                                        className={`wishlist ${isInWishlist('champagne-linen-barong') ? 'active' : ''}`}
                                        onClick={(event) => handleFavoriteClick(event, NEW_ARRIVALS[3])}
                                        aria-label="Add to favorites"
                                      >
                                        ♥
                                      </button>
                                      <button
                                        type="button"
                                        className="add-cart"
                                        onClick={(event) => handleAddCartClick(event, NEW_ARRIVALS[3])}
                                      >
                                        👜 ADD
                                      </button>
                                      
                                  </div>
          
                                  <div className="product-info">
                                      <div className="top">
                                          <span className="category">WEDDING BARONG</span>
                                          <span className="price">₱4,200</span>
                                      </div>
                      
                                      <div className="middle">
                                          <h3>Ivory Wedding Barong</h3>
                                          <span>5 sizes</span>
                                      </div>
                      
                                      <div className="bottom">⭐ 4.6
                                          <span>142 reviews</span>
                                      </div>
                                  </div>                           
                              </div>
                              
                              </div>
                  </div>
                  </div>

                  {/** Feedback **/}
                  <div className='bg-white'>
                  <div className="testimonials">
                      <div className="testimonial-left">

                          <span className="testimonial-label">IN THEIR WORDS</span>
                          <h2>
                              Loved across the
                              islands and beyond.
                          </h2>

                          <div className="overall-rating">
                              <span className="rating-score">4.9</span>
                              <span className="stars">★★★★★</span>
                              <small>2,184 reviews</small>
                          </div>
                      </div>

                      <div className="testimonial-right">
                          <div className="review-card">
                              <div className="stars">★★★★★</div>

                              <p>
                                  "Felt like an heirloom the moment I put it on.
                                  The embroidery is breathtaking."
                              </p>
                              <span>MIGUEL R. — QUEZON CITY</span>
                          </div>

                          <div className="review-card">
                              <div className="stars">★★★★★</div>

                              <p>
                                  "Wore mine for our wedding in Cebu.
                                  Every uncle wanted to know where it came from."
                              </p>
                              <span>JOAQUIN S. — CEBU</span>
                          </div>

                          <div className="review-card">
                              <div className="stars">★★★★★</div>

                              <p>
                                  "Shipped to Toronto perfectly packed.
                                  Better than the barongs I grew up with."
                              </p>
                              <span>MARIA L. — TORONTO</span>
                          </div>

                          <div className="review-card">
                              <div className="stars">★★★★★</div>

                              <p>
                                  "The polo barong is my new uniform.
                                  Linen breathes through Manila summers."
                              </p>
                              <span>ANDRES P. — MAKATI</span>
                          </div>

                      </div>
                  </div>

                   {/* Atelier journal banner (matches provided photo) */}
                  <div className="atelier-hero">
                      <div className="atelier-overlay">
                          <p className="atelier-label">THE HAND OF THE MAKER</p>
                          <h2 className="atelier-heading">Every thread laid by a person. Often, by three.</h2>
                          <a className="atelier-cta" href="#">READ THE ATELIER JOURNAL →</a>
                      </div>
                  </div>

                  {/* Newsletter subscription section */}
                  <section className="atelier-newsletter">
                      <div className="newsletter-inner">
                          <p className="newsletter-label">THE ATELIER LETTER</p>
                          <h2 className="newsletter-heading">New arrivals, atelier stories, and quiet sales — in your inbox.</h2>

                          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                              <input type="email" className="newsletter-input" placeholder="Your email address" />
                              <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
                          </form>

                          <small className="newsletter-note">One letter per month. Unsubscribe anytime.</small>
                      </div>
                  </section>
                  
                  </div>

                  

                  
                      <Footer />
                  

      </>
    )
  }

export default NewArrival
