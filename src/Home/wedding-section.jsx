import '../App.css'
import heroImage3 from '../assets/images/editorial-wedding.jpg'
import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'
import { navigateToProduct } from '../utils/shopNavigation'

function WeddingSection() {
 



  return (
        <>
        <section className="wedding-section">
            <div className="wedding-container">

                <div className="wedding-image">
                    <img src={heroImage3} alt="barong" />
                </div>

                <div className="wedding-content">
                    <span className="section-label">
                        THE WEDDING EDIT
                    </span>
                    <h2>
                        The barong you will be photographed in for the rest of your life.
                    </h2>
                    <p>
                        Fittings begin twelve weeks before the ceremony.
                        Three appointments, two artisans, one barong cut
                        from a single uninterrupted panel of jusi.
                    </p>

                    <div className="wedding-buttons">
                        <a href="#shop" className="btn-dark">
                            EXPLORE WEDDING
                        </a>

                        <a href="#contact" type="button" className="btn-outline">
                            BOOK A FITTING
                        </a>



                        
                    </div>
                </div>

            </div>

        </section>

        <section className="promo-banner">
            <div className="promo-content">
                <div className="promo-text">
                    <span>LIMITED ENGAGEMENT</span>
                    <h3>
                        15% off your first piece —
                        <em>code SALAMAT15.</em>
                    </h3>
                </div>
                <a href="#shop" className="promo-btn">
                    SHOP NOW →
                </a>
            </div>
        </section>



        <section className="most-loved">

            <div className="section-title">
                <div>
                    <p>BESTSELLERS</p>
                    <h2>The most-loved.</h2>
                </div>

                <a href="#">VIEW ALL</a>
            </div>

            {/**MOST LOVE PRODUCTS **/}
                    <div className='products'>
            
                        {/** PRODUCT1 **/}
                        <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('linen-polo-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('linen-polo-barong') } }}>
                            <div className='product-image'>
                                <img src={heroImage7} alt="barong" />
                                <span className="badge">BESTSELLER</span>
                                <button className="wishlist"> ♥</button>
                                <button className="add-cart">👜 ADD</button>
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
                        <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('heritage-pina-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('ivory-wedding-barong') } }}>
                            <div className='product-image'>
                                <img src={heroImage4} alt="barong" />
                                <span className="badge">LIMITED</span>
                                <button className="wishlist"> ♥</button>
                                <button className="add-cart">👜 ADD</button>
                            </div>
                            <div className="product-info">
            
                                <div className="top">
                                    <span className="category">BARONG TAGALOG</span>
                                    <span className="price">₱18,500</span>
                                </div>
            
                                <div className="middle">
                                    <h3>Heritage Piña Barong</h3>
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
                        <div className='product-card' role='button' tabIndex={0} onClick={() => navigateToProduct('champagne-linen-barong')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigateToProduct('champagne-linen-barong') } }}>
                            <div className='product-image'>
                                <img src={heroImage8} alt="barong" />
                                <button className="wishlist"> ♥</button>
                                <button className="add-cart">👜 ADD</button>
                            </div>

                            <div className="product-info">
                                <div className="top">
                                    <span className="category">WEDDING BARONG</span>
                                    <span className="price">₱4,200</span>
                                </div>
            
                                <div className="middle">
                                    <h3>Heritage Piña Barong</h3>
                                    <span>5 sizes</span>
                                </div>
            
                                <div className="bottom">⭐ 4.6
                                    <span>142 reviews</span>
                                </div>
                            </div>                           
                        </div>
                        
                        </div>

        </section>

    

        </>
    )
}
export default WeddingSection