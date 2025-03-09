import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/restaurant-white.png";
import "../css/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          {/* About Section */}
          <div className="about-section">
            <div className="logo-container">
              <Link to="/" onClick={() => scrollTo(0, 0)}>
                <div className="logo-link">
                  <img src={logo} alt="" className="logo-image" />
                  <div className="logo-text-container">
                    <p className="footer-logo-text">HOME FEELS</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <p className="about-description">
                A place where flavors come alive and memories are made. Dine
                with us and enjoy the best meals in town.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="section-title">Quick Links</h3>
            <ul className="links-list">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollTo(0, 0)}
                  className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={() => scrollTo(0, 0)}
                  className="footer-link"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/table-booking"
                  onClick={() => scrollTo(0, 0)}
                  className="footer-link"
                >
                  Book a Table
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => scrollTo(0, 0)}
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => scrollTo(0, 0)}
                  className="footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="contact-section">
            <h3 className="section-title">Get in Touch</h3>
            <p className="footer-contact-info">📍 123 Main Street, Your City</p>
            <p className="footer-contact-info">📞 (123) 456-7890</p>
            <p className="footer-contact-info">✉ support@homefeels.com</p>

            {/* Social Icons */}
            <div className="social-icons">
              <Link to="#" className="social-icon">
                <FaFacebookF size={20} />
              </Link>
              <Link to="#" className="social-icon">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="social-icon">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="social-icon">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright">
        © {new Date().getFullYear()} Home Feels Restaurant. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
