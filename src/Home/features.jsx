import '../App.css'
import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'
import { navigateToProduct } from '../utils/shopNavigation'

function Features(){
  return (
    <>
      <section className="featured-title">
        <div>
          <p>FEATURED PIECES</p>
          <h2>The current obsession.</h2>
        </div>
        <a href="#">VIEW ALL</a>
      </section>

        {/**FEATURED PRODUCTS **/}
        <div className='products'>

            {/** PRODUCT1 **/}
            <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('heritage-pina-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('heritage-pina-barong') } }}>
                <div className='product-image'>
                    <img src={heroImage4} alt="barong" />
                    <span className="badge">BESTSELLER</span>
                    <button className="wishlist"> ♥</button>
                    <button className="add-cart">👜 ADD</button>
                </div>
                <div className="product-info">

                    <div className="top">

                        <span className="category">BARONG TAGALOG</span>

                        <span className="price">₱12,800</span>

                    </div>

                    <div className="middle">

                        <h3>Heritage Piña Barong</h3>

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
                    <img src={heroImage8} alt="barong" />
                    <span className="badge">LIMITED</span>
                    <button className="wishlist"> ♥</button>
                    <button className="add-cart">👜 ADD</button>
                </div>
                <div className="product-info">

                    <div className="top">

                        <span className="category">WEDDING BARONG</span>

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
                    <button className="wishlist"> ♥</button>
                    <button className="add-cart">👜 ADD</button>
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
            <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('linen-polo-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('linen-polo-barong') } }}>
                <div className='product-image'>
                    <img src={heroImage7} alt="barong" />
                    <button className="wishlist"> ♥</button>
                    <button className="add-cart">👜 ADD</button>
                </div>
                <div className="product-info">

                    <div className="top">

                        <span className="category">POLO BARONG</span>

                        <span className="price">₱4,200</span>

                    </div>

                    <div className="middle">

                        <h3>Linen Polo Barong</h3>

                        <span>5 sizes</span>

                    </div>

                    <div className="bottom">⭐ 4.6
                        <span>142 reviews</span>
                    </div>
                    
                </div>
            </div>

        </div>
        
    </>
  )
}

export default Features