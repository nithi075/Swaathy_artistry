import "./footer.css";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>Luna Beauty</h2>
          <p>Luxury bridal artistry for timeless beauty moments.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#booking">Booking</a>
          </div>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2026 Luna Beauty. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
