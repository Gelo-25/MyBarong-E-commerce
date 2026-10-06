import './home.css'
import heroImage from '../assets/images/hero-barong.jpg'

function home(){
    return(
        <>
        <section className="hero">
            <div className="hero-left">
                <p className="sub-title">
                    THE SPRING HERITAGE EDIT • 2026
                </p>
                <h1>
                    A barong is never <br></br>      
                    just a shirt.
                </h1>

                <h2>
                    It is an inheritance.
                </h2>

                <p className="description">
                    Woven in piña and jusi, embroidered by hand in 
                    Lumban, finished in our Intramuros atelier.<br></br> 
                    Each piece carries a maker's mark and a quiet<br></br> 
                    century of practice.
                </p>

                <div className="buttons">

                    <a href="#shop" className="btn-dark">
                        SHOP THE COLLECTION
                        <i className="ri-arrow-right-line"></i>
                    </a>

                    <a href="#categories" className="btn-light">
                        OUR CRAFT
                    </a>

                </div>

            <div className="features">
            <div className="feature">
                <i className="ri-scissors-line"></i>
                <h4>HAND-TAILORED</h4>
            </div>

            <div className="feature">
                <i className="ri-award-line"></i>
                <h4>HERITAGE PIÑA</h4>
            </div>

            <div className="feature">
                <i className="ri-truck-line"></i>
                <h4>WORLDWIDE</h4>
            </div>
            </div>

            </div>
            <div className="hero-right">
                <img src={heroImage} alt="barong" />

                <div className="hero-overlay">
                    <p className="overlay-label">Heritage Piña Barong</p>
                    <p className="overlay-copy">Photographed at the Intramuros atelier.</p>
                </div>
            </div>
        </section>


        </>
    )

}

export default home