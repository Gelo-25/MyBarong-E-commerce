import '../App.css'
import heroImage2 from '../assets/images/detail-embroidery.jpg'
import heroImage4 from '../assets/images/product-classic.jpg'
import heroImage5 from '../assets/images/product-kids.jpg'
import heroImage6 from '../assets/images/product-modern.jpg'
import heroImage7 from '../assets/images/product-polo.jpg'
import heroImage8 from '../assets/images/product-wedding.jpg'

function Collection() {
  return (
    <section className='collections'>
      <div className='collection-header'>
        <p>DISCOVER COLLECTIONS</p>
        <h2>Where will you wear it?</h2>
      </div>
      <a href="#shop">
      <div className='collection-grid'>
        <div className='collection-card large'>
          <img src={heroImage4} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Barong Tagalog</h3>
            <p>Traditional • Formal • Heritage</p>
          </div>
        </div>

        <div className='collection-card'>
          <img src={heroImage8} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Wedding Barong</h3>
            <p>Elegant • Groom</p>
          </div>
        </div>

        <div className='collection-card'>
          <img src={heroImage6} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Modern Barong</h3>
            <p>Minimal • Contemporary</p>
          </div>
        </div>

        <div className='collection-card'>
          <img src={heroImage7} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Polo Barong</h3>
            <p>Casual • Smart</p>
          </div>
        </div>

        <div className='collection-card'>
          <img src={heroImage5} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Kids Barong</h3>
            <p>Children • Formal</p>
          </div>
        </div>

        <div className='collection-card wide'>
          <img src={heroImage2} alt='barong' />
          <div className='overlay'></div>
          <div className='content'>
            <h3>Accessories</h3>
            <p>Pins • Handkerchiefs • Cufflinks</p>
          </div>
        </div>
      </div>
      </a>
    </section>
  )
}

export default Collection
