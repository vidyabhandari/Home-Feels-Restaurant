import { Link } from "react-router";
import hero from "../assets/header_img1.png";
import { FaArrowRight } from "react-icons/fa6";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img src={hero} alt="Hero" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Home Feels - Savor the Flavour
          </h1>
          <p className="hero-description">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven
          </p>
          <div className="hero-buttons">
            <Link
              to="/table-booking"
              onClick={() => scrollTo(0, 0)}
              className="book-table-button"
            >
              Book a Table <FaArrowRight />
            </Link>
            <Link
              to="/menu"
              onClick={() => scrollTo(0, 0)}
              className="explore-menu-button"
            >
              Explore Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;