import '../App.css'
import './about.css'
import heroImage2 from '../assets/images/detail-embroidery.jpg'
import Footer from '../Footer/footer'

const aboutPoints = [
  {
    title: 'Heritage craftsmanship',
    text: 'Our atelier blends centuries-old embroidery techniques with contemporary tailoring, creating barongs that age beautifully.',
  },
  {
    title: 'Made by hand',
    text: 'Each piece is cut, embroidered, and finished by artisans in Laguna, Aklan and Lumban with attention to every detail.',
  },
  {
    title: 'Conscious materials',
    text: 'We select natural fibers and locally woven textiles to support sustainable production and long-lasting wear.',
  },
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <span>OUR STORY</span>
          <h1>Born from craft, carried by tradition.</h1>
          <p>MyBarong began with a desire to preserve Filipino tailoring and present it with modern refinement, one meticulously embroidered barong at a time.</p>
        </div>
        <div className="about-image">
          <img src={heroImage2} alt="Atelier embroidery" />
        </div>
      </section>

      <section className="about-details">
        {aboutPoints.map((item, index) => (
          <article className="about-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default About
