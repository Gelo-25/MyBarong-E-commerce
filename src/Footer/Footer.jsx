import '../App.css'
import './footer.css'

function Footer(){
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-col footer-about">
                    <h3 className="footer-logo"><span className="logo-black">My</span><span className="logo-gold">Barong</span></h3>
                    <p className="footer-copy">Authentic Filipino Barong Tagalog and formal wear — woven, embroidered and tailored by hand in the provinces of Laguna, Aklan and Lumban.</p>

                    <div className="socials">
                        <a href="#" aria-label="instagram" className="social"><i className="ri-instagram-line"></i></a>
                        <a href="#" aria-label="facebook" className="social"><i className="ri-facebook-line"></i></a>
                        <a href="#" aria-label="youtube" className="social"><i className="ri-youtube-line"></i></a>
                    </div>
                </div>


                <div className="footer-col foot">
                    <h4>CUSTOMER CARE</h4>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Care Instructions</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-contact">
                    <h4>ATELIER</h4>
                    <address>
                        <div>14 Calle Real, Intramuros, Manila</div>
                        <div>+63 2 8123 4567</div>
                        <div>hello@mybarong.ph</div>
                    </address>
                </div>
            </div>

            <div className="footer-bottom">
                <small>© 2026 MyBarong Atelier. All rights reserved.</small>
                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
