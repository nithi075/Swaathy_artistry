import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // Ensure this path is correct based on your project structure

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT US", href: "#about", hasSub: true },
    { name: "DESTINATION", href: "#destination", hasSub: true },
    { name: "FILMS", href: "#films" },
    { name: "PHOTOGRAPHY", href: "#photography", hasSub: true },
    { name: "POETRY", href: "#poetry" },
    { name: "BLOG", href: "#blog" },
    { name: "BOOK US", href: "#contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="navbar-container">
        
        {/* LOGO IMAGE - Updated here */}
        <div className="logo-wrapper">
          <a href="#hero">
            <img 
              src={logo}
              alt="ClickBy Korniza Logo" 
              className="logo-img" 
            />
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <a href={item.href} key={index} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>

        {/* HAMBURGER BUTTON */}
        <div 
          className={`menu-btn ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grain-overlay"></div>

            <motion.div 
              className="mobile-menu-container"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
           

              <div className="mobile-menu-list">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="mobile-item-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                      <span className="mobile-num">0{index + 1}</span>
                      <span className="mobile-text">{item.name}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <div className="mobile-footer">
                <div className="mob-socials">
                   <a href="#">INSTAGRAM</a>
                   <a href="#">WHATSAPP</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}