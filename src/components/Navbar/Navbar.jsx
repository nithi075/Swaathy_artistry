import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] =
    useState("hero");

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* ===========================
     SCROLL EFFECT
  =========================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ===========================
     ACTIVE SECTION
  =========================== */

  useEffect(() => {
    const sections = [
      "hero",
      "services",
      "portfolio",
      "about",
      "testimonials",
      "booking",
    ];

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id
              );
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

    sections.forEach((id) => {
      const el =
        document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ===========================
     BODY LOCK
  =========================== */

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* ===========================
     NAV ITEMS
  =========================== */

  const navItems = [
    {
      name: "HOME",
      href: "#hero",
      id: "hero",
    },

    {
      name: "SERVICES",
      href: "#services",
      id: "services",
    },

    {
      name: "PORTFOLIO",
      href: "#portfolio",
      id: "portfolio",
    },

    {
      name: "ABOUT",
      href: "#about",
      id: "about",
    },

    {
      name: "TESTIMONIALS",
      href: "#testimonials",
      id: "testimonials",
    },

    {
      name: "BOOK NOW",
      href: "#booking",
      id: "booking",
    },
  ];

  /* ===========================
     VARIANTS
  =========================== */

  const desktopContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const desktopItem = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
    },

    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.8,
      },
    },
  };

  const mobileContainer = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const mobileItem = {
    hidden: {
      opacity: 0,
      x: 60,
      filter: "blur(10px)",
    },

    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      {/* SCROLL PROGRESS */}

      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
        }}
      />

      <motion.nav
        className={`navbar ${
          scrolled
            ? "navbar-scroll"
            : ""
        }`}
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-container">
          {/* LOGO */}

          <motion.div
            className="logo-wrapper"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <a
              href="#hero"
              className="logo-link"
            >
              <h1 className="brand-title">
                Swaathy Artistry
              </h1>

              <span className="brand-subtitle">
                Luxury Bridal Makeup
                Artist
              </span>
            </a>
          </motion.div>

          {/* DESKTOP */}

          <motion.div
            className="desktop-menu"
            variants={
              desktopContainer
            }
            initial="hidden"
            animate="show"
          >
            {navItems.map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="nav-link"
                  variants={
                    desktopItem
                  }
                  whileHover={{
                    y: -2,
                  }}
                >
                  <span>
                    {item.name}
                  </span>

                  {activeSection ===
                    item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="active-indicator"
                    />
                  )}
                </motion.a>
              )
            )}
          </motion.div>

          {/* HAMBURGER */}

          <motion.div
            className={`menu-btn ${
              menuOpen
                ? "active"
                : ""
            }`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
          >
            <span className="btn-line"></span>
            <span className="btn-line"></span>
          </motion.div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="mobile-menu-container"
              initial={{
                x: "100%",
                scale: 1.05,
              }}
              animate={{
                x: 0,
                scale: 1,
              }}
              exit={{
                x: "100%",
                scale: 1.05,
              }}
              transition={{
                duration: 1,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              {/* GLOW */}

              <motion.div
                className="menu-glow"
                animate={{
                  opacity: [
                    0.2,
                    0.4,
                    0.2,
                  ],

                  scale: [
                    1,
                    1.1,
                    1,
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat:
                    Infinity,
                }}
              />

              {/* TOP */}

              <motion.div
                className="mobile-logo-area"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                <h2>
                  Luna Beauty
                </h2>

                <p>
                  Luxury Bridal
                  Makeup Artist
                </p>
              </motion.div>

              {/* LINKS */}

              <motion.div
                className="mobile-menu-list"
                variants={
                  mobileContainer
                }
                initial="hidden"
                animate="show"
              >
                {navItems.map(
                  (
                    item,
                    index
                  ) => (
                    <motion.div
                      key={
                        index
                      }
                      className="mobile-item-wrapper"
                      variants={
                        mobileItem
                      }
                      whileHover={{
                        x: 10,
                      }}
                    >
                      <a
                        href={
                          item.href
                        }
                        onClick={() =>
                          setMenuOpen(
                            false
                          )
                        }
                      >
                        <span className="mobile-num">
                          0
                          {index +
                            1}
                        </span>

                        <span className="mobile-text">
                          {
                            item.name
                          }
                        </span>
                      </a>
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* FOOTER */}

              <motion.div
                className="mobile-footer"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                }}
              >
                <div className="footer-label">
                  CONNECT WITH
                  US
                </div>

                <div className="mob-socials">
                  <motion.a
                    href="#"
                    whileHover={{
                      y: -3,
                    }}
                  >
                    INSTAGRAM
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{
                      y: -3,
                    }}
                  >
                    WHATSAPP
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{
                      y: -3,
                    }}
                  >
                    YOUTUBE
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}