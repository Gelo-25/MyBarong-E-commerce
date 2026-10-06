import '../App.css'
import './contact.css'
import Footer from '../Footer/footer'

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div>
          <span className="contact-breadcrumb">HOME / CONTACT</span>
          <h1>Contact our atelier</h1>
          <p>Reach out for custom orders, fit assistance, or general inquiries. We’re here to help you find the perfect barong.</p>
        </div>
      </section>

      <div className="contact-grid">
        <div className="contact-details">
          <div>
            <h2>ATELIER</h2>
            <p>14 Calle Real, Intramuros, Manila</p>
          </div>

          <div>
            <h2>PHONE</h2>
            <p>+63 2 8123 4567</p>
          </div>

          <div>
            <h2>EMAIL</h2>
            <p>hello@mybarong.ph</p>
          </div>

          <div>
            <h2>HOURS</h2>
            <p>Monday – Saturday, 9am – 6pm</p>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email address" />
          </label>
          <label>
            Message
            <textarea placeholder="How can we help?" rows="6"></textarea>
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>

      <Footer />
      
    </main>
  )
}

export default Contact
