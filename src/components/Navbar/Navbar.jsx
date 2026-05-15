import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================
     SCROLL EFFECT
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "auto";

  }, [menuOpen]);

  /* =========================================
     NAV ITEMS
  ========================================= */

  const navItems = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT US", href: "#about" },
    { name: "DESTINATION", href: "#destination" },
    { name: "FILMS", href: "#films" },
    { name: "PHOTOGRAPHY", href: "#photography" },
    { name: "POETRY", href: "#poetry" },
    { name: "BLOG", href: "#blog" },
    { name: "BOOK US", href: "#contact" }
  ];

  /* =========================================
     JSX
  ========================================= */

  return (

    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================= */}

        <motion.div
          className="logo-wrapper"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <a href="#hero" className="logo-link">

            <img
              src={logo}
              alt="ClickBy Korniza Logo"
              className="logo-img"
            />

          </a>

        </motion.div>

        {/* =========================================
            DESKTOP MENU
        ========================================= */}

        <div className="desktop-menu">

          {navItems.map((item, index) => (

            <motion.a
              href={item.href}
              key={index}
              className="nav-link"

              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: index * 0.08,
                duration: 0.6
              }}
            >

              <span>{item.name}</span>

            </motion.a>

          ))}

        </div>

        {/* =========================================
            MENU BUTTON
        ========================================= */}

        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <div className="btn-line"></div>
          <div className="btn-line"></div>

        </div>

      </div>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-overlay"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            transition={{ duration: 0.4 }}
          >

            <div className="grain-overlay"></div>

            {/* =========================================
                MOBILE MENU PANEL
            ========================================= */}

            <motion.div
              className="mobile-menu-container"

              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}

              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1]
              }}
            >

              {/* =========================================
                  MOBILE TOP
              ========================================= */}

              <div className="mobile-logo-area">

               

              </div>

              {/* =========================================
                  MOBILE LINKS
              ========================================= */}

              <div className="mobile-menu-list">

                {navItems.map((item, index) => (

                  <motion.div
                    key={index}
                    className="mobile-item-wrapper"

                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}

                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.6
                    }}
                  >

                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >

                      <span className="mobile-num">
                        0{index + 1}
                      </span>

                      <span className="mobile-text">
                        {item.name}
                      </span>

                      <svg
                        className="chevron"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>

                    </a>

                  </motion.div>

                ))}

              </div>

              {/* =========================================
                  MOBILE FOOTER
              ========================================= */}

              <div className="mobile-footer">

                <div className="footer-label">
                  CONNECT WITH US
                </div>

                <div className="mob-socials">

                  <a href="#">
                    INSTAGRAM
                  </a>

                  <a href="#">
                    WHATSAPP
                  </a>

                  <a href="#">
                    YOUTUBE
                  </a>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}